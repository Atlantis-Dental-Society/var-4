import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Leaf, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-muted/40">
      {/* Organic wave divider */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/15">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold text-foreground">ADS</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}</p>
            <p className="mt-2 text-xs text-muted-foreground/70">
              A premier dental society dedicated to advancing oral healthcare through education, collaboration, and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Get Involved</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/join" className="hover:text-primary transition-colors">Join</Link></li>
              <li><Link href="/partner" className="hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li className="leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border/30 pt-8">
          <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
            Made with <Heart className="h-3 w-3 text-terracotta fill-terracotta" /> for dental excellence
          </div>
          <div className="text-center text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
