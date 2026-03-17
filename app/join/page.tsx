import { joinContent } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const tierStyles = [
  { badge: "bg-sage/10 text-sage", accent: "border-border/30", gradient: "" },
  { badge: "bg-primary/10 text-primary", accent: "border-primary/30 ring-2 ring-primary/15", gradient: "bg-gradient-to-br from-primary/5 to-primary/10" },
  { badge: "bg-terracotta/10 text-terracotta", accent: "border-terracotta/30", gradient: "" },
];

export default function JoinPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute -top-32 -right-32 h-96 w-96 blob-shape-1 bg-primary/6 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 blob-shape-2 bg-sage/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-60 w-60 blob-shape-3 bg-terracotta/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Become a Member
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">{joinContent.headline}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{joinContent.description}</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {joinContent.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl border ${tierStyles[i].accent} ${tierStyles[i].gradient || "bg-card"} p-8 shadow-warm hover:shadow-warm-lg transition-all`}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-bold text-primary-foreground shadow-gold">
                    Most Popular
                  </div>
                )}
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${tierStyles[i].badge}`}>
                  {tier.name}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{tier.description}</div>
                <div className="mt-4 text-4xl font-extrabold text-primary">{tier.price}</div>
                <ul className="mt-7 space-y-3.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sage/15 shrink-0">
                        <Check className="h-3 w-3 text-sage" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className={`mt-8 w-full gap-2 rounded-full ${i === 1 ? "shadow-gold" : ""}`} variant={i === 1 ? "default" : "outline"} asChild>
                  <Link href="/contact">Join Now <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
