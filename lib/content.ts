import { cache } from "react";
import { db } from "@/lib/db";
import { siteConfig, pageContent, type SectionData } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const getSiteConfig = cache(async () => {
  const [config] = await db.select().from(siteConfig).limit(1);
  return config ?? null;
});

export const getPageContent = cache(async (slug: string) => {
  const [page] = await db.select().from(pageContent).where(eq(pageContent.slug, slug));
  return page ?? null;
});

export function getSections(page: Awaited<ReturnType<typeof getPageContent>>): SectionData[] {
  return ((page?.sections ?? []) as (SectionData | null)[]).filter(Boolean) as SectionData[];
}
