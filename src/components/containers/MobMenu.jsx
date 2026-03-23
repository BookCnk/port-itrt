"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";
import { Download, Menu } from "lucide-react";

export function MobMenu({ pathname }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="px-4 pb-8">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader className="px-0 pt-5 text-left">
            <DrawerTitle className="text-2xl text-foreground">
              Explore the portfolio
            </DrawerTitle>
            <DrawerDescription>
              Browse the main sections and grab the latest resume from here.
            </DrawerDescription>
          </DrawerHeader>

          <div className="mt-6 space-y-3">
            {ROUTES.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-[1.5rem] border px-5 py-4 text-base font-medium transition-all duration-300",
                  pathname === item.path
                    ? "border-primary/40 bg-primary text-primary-foreground"
                    : "border-white/10 bg-white/[0.04] text-foreground hover:bg-white/[0.07]"
                )}>
                <span>{item.name}</span>
                <span className="text-xs uppercase tracking-[0.3em] opacity-70">
                  Open
                </span>
              </Link>
            ))}
          </div>

          <DrawerFooter className="px-0 pt-6">
            <Button asChild className="w-full justify-center">
              <a href="/resume.pdf" download>
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <DrawerClose asChild>
              <button className="w-full rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Close Menu
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
