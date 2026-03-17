import { partnerContent } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Handshake, Eye, Lightbulb, Package, Network } from "lucide-react";
import Link from "next/link";

const benefitIcons: Record<string, React.ElementType> = {
  "Brand Visibility": Eye,
  "Thought Leadership": Lightbulb,
  "Product Showcase": Package,
  "Networking Access": Network,
};

const tierAccents = [
  { bg: "bg-card", border: "border-border/30", badge: "bg-muted text-muted-foreground" },
  { bg: "bg-card", border: "border-sage/30", badge: "bg-sage/10 text-sage" },
  { bg: "bg-gradient-to-br from-primary/5 to-primary/10", border: "border-primary/30", badge: "bg-primary/10 text-primary" },
];

export default function PartnerPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute -top-32 -right-32 h-96 w-96 blob-shape-1 bg-primary/6 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-80 w-80 blob-shape-2 bg-sage/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Handshake className="h-4 w-4" />
              Collaborate With Us
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">{partnerContent.headline}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{partnerContent.description}</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {partnerContent.benefits.map((b) => {
              const Icon = benefitIcons[b.title] || Handshake;
              return (
                <div key={b.title} className="rounded-3xl bg-card p-7 shadow-warm hover:shadow-warm-lg transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="absolute -top-20 left-1/3 h-80 w-80 blob-shape-3 bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Partnership Tiers</h2>
          <p className="mt-4 text-center text-muted-foreground text-lg max-w-xl mx-auto">Choose the tier that best aligns with your goals.</p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {partnerContent.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl ${tierAccents[i].bg} ${tierAccents[i].border} border p-8 shadow-warm hover:shadow-warm-lg transition-all ${i === 2 ? "ring-2 ring-primary/20" : ""}`}
              >
                {i === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-gold">
                    Best Value
                  </div>
                )}
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tierAccents[i].badge}`}>
                  {tier.name}
                </div>
                <div className="mt-4 text-3xl font-extrabold text-primary">{tier.price}</div>
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
                <Button className={`mt-8 w-full gap-2 rounded-full ${i === 2 ? "shadow-gold" : ""}`} variant={i === 2 ? "default" : "outline"} asChild>
                  <Link href="/contact">Get Started <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
