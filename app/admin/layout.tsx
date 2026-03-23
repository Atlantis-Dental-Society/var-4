"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CalendarDays, FileText, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

const navItems = [
  { label: "Events", href: "/admin/events", icon: CalendarDays },
  { label: "Insights", href: "/admin/insights", icon: FileText },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (session && session.user.role !== "admin") {
    return (
      <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold">Access Denied</h1>
          <p className="mt-2 text-muted-foreground">You don&apos;t have permission to access the admin panel.</p>
          <Button
            variant="outline"
            className="mt-6 rounded-full"
            onClick={() => router.push("/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)]">
      <aside className="w-56 shrink-0 border-r border-border/30 bg-muted/30 p-4 flex flex-col">
        <div className="flex items-center gap-2 px-3 py-2 mb-2">
          <LayoutDashboard className="h-5 w-5 text-primary" />
          <span className="font-bold text-sm">Admin Panel</span>
        </div>
        <Separator className="mb-4 bg-border/30" />
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Button
                key={item.href}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2.5 rounded-lg",
                  isActive && "bg-primary/10 text-primary hover:bg-primary/15"
                )}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>
        <Separator className="my-4 bg-border/30" />
        <div className="px-1">
          <p className="mb-2 truncate px-2 text-xs text-muted-foreground">
            {session?.user.email}
          </p>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2.5 rounded-lg text-muted-foreground hover:text-destructive"
            onClick={async () => {
              await authClient.signOut();
              router.push("/login");
            }}
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
