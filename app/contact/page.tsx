import { contactContent, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 blob-shape-1 bg-primary/6 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 blob-shape-2 bg-sage/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Mail className="h-4 w-4" />
              We&apos;d Love to Hear From You
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">{contactContent.headline}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{contactContent.description}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground pt-2">{siteConfig.address}</div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground pt-2">{contactContent.hours}</div>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <h2 className="text-xl font-bold">Departments</h2>
              {contactContent.departments.map((d) => (
                <div key={d.name} className="rounded-2xl bg-card p-5 shadow-warm-sm">
                  <h3 className="font-bold text-foreground">{d.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-3 w-3 text-primary" />
                      </div>
                      {d.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-3 w-3 text-primary" />
                      </div>
                      {d.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-card p-8 sm:p-10 shadow-warm">
            <h2 className="text-2xl font-extrabold">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground">First Name</label>
                  <input className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">Last Name</label>
                  <input className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Email</label>
                <input type="email" className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Subject</label>
                <select className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Events</option>
                  <option>Partnerships</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Message</label>
                <textarea rows={5} className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
              </div>
              <Button className="w-full rounded-full py-6 text-base gap-2 shadow-gold" size="lg">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
