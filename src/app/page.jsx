"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HERO_METRICS, SOCIAL_LINKS } from "@/utils/data";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { transition, variants, viewport } from "@/utils/framer_variants";
import { MotionDiv, MotionImage } from "@/utils/motionTags";

const focusAreas = ["API Design", "Database Thinking", "Reliable Delivery"];

export default function Home() {
  return (
    <section className="px-4 pb-10 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <MotionDiv
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={variants.staggerContainer}
          className="space-y-8">
          <MotionDiv
            variants={variants.revealUp}
            transition={transition.smooth}>
            <span className="section-eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Backend Developer Portfolio
            </span>
          </MotionDiv>

          <MotionDiv
            variants={variants.revealUp}
            transition={transition.smooth}
            className="space-y-6">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-primary/80">
              <MapPin className="h-4 w-4" />
              Bangkok, Thailand
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Chanakarn <span className="text-primary">Kruehong</span>
            </h1>
          </MotionDiv>

          <MotionDiv
            variants={variants.revealUp}
            transition={transition.delayed}
            className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="/resume.pdf" download>
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionDiv>

          <MotionDiv
            variants={variants.staggerContainer}
            className="grid gap-4 sm:grid-cols-3">
            {HERO_METRICS.map((item) => (
              <MotionDiv
                key={item.id}
                variants={variants.revealUp}
                transition={transition.snappy}
                className="section-shell rounded-[1.6rem] px-5 py-5">
                <p className="text-3xl font-semibold text-foreground">
                  {item.value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  {item.label}
                </p>
              </MotionDiv>
            ))}
          </MotionDiv>

          <MotionDiv
            variants={variants.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <MotionDiv
                  key={item.id}
                  variants={variants.revealUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={transition.snappy}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-sm text-foreground transition-shadow hover:shadow-lg hover:shadow-primary/5">
                    <Icon className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        {item.handle}
                      </p>
                    </div>
                  </a>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={variants.revealLeft}
          transition={transition.slow}
          className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />

          <MotionDiv
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-panel absolute -left-6 top-12 z-10 hidden rounded-[1.5rem] px-5 py-4 md:block shadow-2xl shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.26em] text-primary">
              Core Focus
            </p>
            <p className="mt-1 text-sm font-bold text-foreground">
              Architecting <br /> Scalable Systems
            </p>
          </MotionDiv>

          <MotionDiv
            animate={{
              y: [0, 18, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-panel absolute -right-6 bottom-20 z-10 hidden rounded-[1.5rem] px-5 py-4 md:block shadow-2xl shadow-primary/10">
            <p className="text-xs uppercase tracking-[0.26em] text-primary">
              Current Status
            </p>
            <p className="mt-1 text-sm font-bold text-foreground">
              Building the Future
            </p>
          </MotionDiv>

          <div className="section-shell p-4 md:p-5">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d1420]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
              <MotionImage
                src="/hero.jpg"
                alt="Chanakarn Kruehong portrait"
                width={760}
                height={980}
                className="h-[480px] w-full object-cover object-top md:h-[620px]"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="glass-panel rounded-[1.5rem] p-4 md:p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
                    Portfolio v2.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
