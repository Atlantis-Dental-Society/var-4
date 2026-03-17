import { insights } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CalendarDays, User, Clock } from "lucide-react";

const categoryGradients: Record<string, string> = {
  Technology: "from-primary/15 via-primary/5 to-sage/10",
  Clinical: "from-sage/15 via-sage/5 to-primary/10",
  "Practice Management": "from-terracotta/15 via-terracotta/5 to-primary/10",
};

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute -top-32 -right-32 h-96 w-96 blob-shape-1 bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Link href="/insights" className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all mb-10">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Insights
        </Link>

        {/* Cover image placeholder */}
        <div className={`aspect-[2/1] rounded-3xl bg-gradient-to-br ${categoryGradients[post.category] || "from-primary/15 to-sage/10"} flex items-center justify-center mb-10 relative overflow-hidden`}>
          <div className="absolute -top-10 -right-10 h-40 w-40 blob-shape-1 bg-white/10 blur-xl" />
          <span className="text-5xl text-primary/20 font-extrabold">{post.category}</span>
        </div>

        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl leading-tight">{post.title}</h1>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-sage/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-foreground block">{post.author}</span>
              <span className="text-xs">{post.authorPosition}</span>
            </div>
          </span>
          <span className="flex items-center gap-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
              <CalendarDays className="h-3 w-3" />
            </div>
            Published {new Date(post.publishedDate).toLocaleDateString("en", { dateStyle: "long" })}
          </span>
          {post.updatedDate && (
            <span className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                <Clock className="h-3 w-3" />
              </div>
              Updated {new Date(post.updatedDate).toLocaleDateString("en", { dateStyle: "long" })}
            </span>
          )}
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mt-10 text-muted-foreground">
          {post.body.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="mt-10 mb-4 text-xl font-extrabold text-foreground">{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={i} className="mt-8 mb-3 text-lg font-bold text-foreground">{paragraph.replace("### ", "")}</h3>;
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(Boolean);
              return (
                <ul key={i} className="my-5 space-y-2.5 pl-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                      <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/40" />
                      <span>{item.replace(/^- \*\*(.+?)\*\*/, "$1").replace(/^- /, "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i} className="my-5 text-sm leading-relaxed">{paragraph}</p>;
          })}
        </div>
      </div>
    </article>
  );
}
