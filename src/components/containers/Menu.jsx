"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MobMenu } from "./MobMenu";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { transition, variants } from "@/utils/framer_variants";

export default function Menu() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial="initial"
        animate="animate"
        variants={variants.revealDown}
        transition={transition.smooth}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-background/70 px-4 py-3 shadow-[0_20px_60px_-36px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full border border-white/10 bg-white/[0.06] p-2">
            <Image
              src="/logo.png"
              className="h-8 w-auto"
              width={40}
              height={40}
              alt="Book Portfolio logo"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio 2026
            </p>
            <p className="text-sm font-semibold text-foreground">
              Chanakarn Kruehong
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {ROUTES.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  pathname === item.path
                    ? "bg-white/[0.09] text-foreground shadow-[0_8px_25px_-18px_rgba(255,255,255,0.4)]"
                    : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground"
                )}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="outline" size="sm">
            <a href="/resume.pdf" download>
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <MobMenu pathname={pathname} />
      </motion.nav>
    </header>
  );
}
