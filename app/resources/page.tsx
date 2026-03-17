import { resources } from "@/lib/data";
import { FileText, BookOpen, Newspaper, Briefcase, Heart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = { FileText, BookOpen, Newspaper, Briefcase, Heart, Users };

const cardAccents = [
  "from-primary/10 to-primary/5",
  "from-sage/10 to-sage/5",
  "from-terracotta/10 to-terracotta/5",
  "from-primary/10 to-sage/5",
  "from-terracotta/10 to-primary/5",
  "from-sage/10 to-terracotta/5",
];

export default function ResourcesPage() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 blob-shape-2 bg-primary/6 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 blob-shape-1 bg-sage/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-medium text-sage">
            <BookOpen className="h-4 w-4" />
            Member Resources
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Resources</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Tools, guides, and materials to support your practice and professional development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => {
            const Icon = iconMap[r.icon] || FileText;
            return (
              <div key={r.title} className="group flex flex-col rounded-3xl bg-card overflow-hidden shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${cardAccents[i % cardAccents.length]}`} />
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold">{r.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{r.category}</span>
                    <Button variant="ghost" size="sm" className="gap-1.5 text-xs rounded-full text-primary hover:bg-primary/10">
                      Access <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
