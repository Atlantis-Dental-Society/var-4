import { aboutContent, stats } from "@/lib/data";
import { Heart, Lightbulb, Users, Shield } from "lucide-react";

const valueIcons: Record<string, React.ElementType> = {
  Excellence: Heart,
  Innovation: Lightbulb,
  Community: Users,
  Integrity: Shield,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute -top-32 -right-32 h-96 w-96 blob-shape-1 bg-sage/8 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 blob-shape-2 bg-primary/6 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-medium text-sage">
              Our Story
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">About Us</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{aboutContent.mission}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-muted/50 to-primary/5" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-primary">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* History & Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {aboutContent.history}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold">Our Vision</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{aboutContent.vision}</p>

              <h2 className="mt-16 text-3xl font-extrabold">Our Values</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {aboutContent.values.map((v) => {
                  const Icon = valueIcons[v.title] || Heart;
                  return (
                    <div key={v.title} className="rounded-3xl bg-card p-7 shadow-warm hover:shadow-warm-lg transition-all">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 font-bold text-lg text-foreground">{v.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
