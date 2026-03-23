import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ROUTES, SOCIAL_LINKS } from "@/utils/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-10">
      <div className="section-shell mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Let&apos;s build something thoughtful</span>
            <h3 className="mt-5 max-w-xl text-foreground">
              A backend-minded portfolio with stronger motion, richer layout, and
              a more cinematic feel.
            </h3>
            <p className="mt-3 max-w-xl">
              Built to present projects with more personality while keeping the
              content readable and professional.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-sm text-foreground transition-transform duration-300 hover:-translate-y-1">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{item.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} Chanakarn Kruehong. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            {ROUTES.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="transition-colors duration-300 hover:text-foreground">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
