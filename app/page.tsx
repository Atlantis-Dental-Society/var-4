import Link from "next/link";
import { heroContent, stats, features, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { GraduationCap, Microscope, Globe, TrendingUp, ArrowRight, Quote, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ElementType> = { GraduationCap, Microscope, Globe, TrendingUp };

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
        {/* Organic background blobs */}
        <div className="absolute -top-32 -right-32 h-96 w-96 blob-shape-1 bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] blob-shape-2 bg-sage/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-72 w-72 blob-shape-3 bg-terracotta/6 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Welcome to Your Dental Wellness Community
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
              <span className="text-foreground">{heroContent.headline.split("Meets")[0]}Meets </span>
              <span className="text-primary">Innovation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {heroContent.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base gap-2 shadow-gold">
                <Link href="/join">
                  {heroContent.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base">
                <Link href="/services">{heroContent.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-muted/50 to-primary/5" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Why Join Atlantis Dental Society</h2>
            <p className="mt-4 text-muted-foreground text-lg">Everything you need to advance your career and practice.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = iconMap[f.icon] || GraduationCap;
              return (
                <div key={f.title} className="group rounded-3xl bg-card p-8 shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/10" />
        <div className="absolute -top-20 -left-20 h-80 w-80 blob-shape-2 bg-sage/8 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 blob-shape-1 bg-terracotta/6 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">What Our Members Say</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.author} className="rounded-3xl bg-card p-8 shadow-warm hover:shadow-warm-lg transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-sage/20 blob-shape-1" />
                  <div>
                    <div className="font-bold text-sm">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-primary/5 to-sage/10 p-12 sm:p-16 text-center">
            <div className="absolute -top-10 -right-10 h-40 w-40 blob-shape-1 bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 blob-shape-2 bg-sage/10 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Elevate Your Practice?</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">Join thousands of dental professionals who are shaping the future of oral healthcare.</p>
              <Button asChild size="lg" className="mt-10 rounded-full px-10 py-6 text-base gap-2 shadow-gold">
                <Link href="/join">Get Started Today <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
