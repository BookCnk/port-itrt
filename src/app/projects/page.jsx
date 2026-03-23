"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/utils/data";
import { transition, variants, viewport } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import { ExternalLink, Github, Lock } from "lucide-react";

export default function Projects() {
  const projectCount = String(PROJECTS.length).padStart(2, "0");

  return (
    <section className="px-4 pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl space-y-24 md:space-y-32">
        <MotionDiv
           initial="initial"
           whileInView="animate"
           viewport={viewport}
           variants={variants.staggerContainer}
           className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
           <MotionDiv variants={variants.revealUp} transition={transition.smooth}>
             <span className="section-eyebrow">Selected Projects</span>
             <h2 className="mt-5 max-w-3xl text-foreground">
               A deeper look at the work I've built.
             </h2>
             <p className="mt-4 max-w-2xl">
               Each project is presented as a featured case with a clear overview of the tech stack, key takeaways, and live references.
             </p>
           </MotionDiv>
        </MotionDiv>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, index) => {
            const projectNum = String(index + 1).padStart(2, "0");
            const hasRepository = Boolean(project.linkgit);
            const isEven = index % 2 === 0;

            return (
              <MotionDiv
                key={project.id}
                initial="initial"
                whileInView="animate"
                viewport={{ ...viewport, margin: "-100px" }}
                variants={variants.staggerContainer}
                className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                
                {/* Details Side */}
                <MotionDiv
                  variants={isEven ? variants.revealRight : variants.revealLeft}
                  transition={transition.smooth}
                  className={cn("section-shell p-6 md:p-10", !isEven && "lg:order-last")}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                        {project.category}
                      </p>
                      <h2 className="mt-3 text-foreground">{project.title}</h2>
                    </div>

                    <div className="chip shrink-0">
                      {projectNum} / {projectCount}
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-relaxed max-w-2xl">{project.desc}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {hasRepository ? (
                      <Button asChild variant="outline">
                        <a
                          href={project.linkgit}
                          target="_blank"
                          rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    ) : (
                      <Button variant="plain" size="sm" disabled>
                        <Lock className="mr-2 h-4 w-4" />
                        Private Repo
                      </Button>
                    )}

                    <Button asChild>
                      <a
                        href={project.linkdemo}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </MotionDiv>
                {/* Image Side */}
                <MotionDiv
                  variants={isEven ? variants.revealLeft : variants.revealRight}
                  transition={transition.slow}
                  className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-[0_30px_90px_-46px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                  </div>
                </MotionDiv>

              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
