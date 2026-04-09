"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/utils/data";
import { transition, variants, viewport } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import { CheckCircle2, ExternalLink, Github, Lock, Sparkles } from "lucide-react";

const getProjectSummary = (projectCount) => [
  { value: projectCount, label: "ผลงานที่เลือกมาเล่า" },
  { value: "KMUTT", label: "แพลตฟอร์มมหาวิทยาลัย" },
  { value: "Full Stack", label: "ตั้งแต่ UI ถึงระบบหลังบ้าน" },
];

export default function Projects() {
  const projectCount = String(PROJECTS.length).padStart(2, "0");
  const projectSummary = getProjectSummary(projectCount);

  return (
    <section className="px-4 pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl space-y-16 md:space-y-24">
        <MotionDiv
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={variants.staggerContainer}
          className="section-shell p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr,0.75fr] lg:items-end">
            <MotionDiv variants={variants.revealUp} transition={transition.smooth}>
              <span className="section-eyebrow">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                ผลงานที่คัดมา
              </span>
              <h2 className="mt-5 max-w-3xl text-foreground">
                รวมโปรเจกต์ที่ได้ลงมือออกแบบ พัฒนา และส่งมอบให้ใช้งานจริง
              </h2>
              <p className="mt-4 max-w-2xl">
                แต่ละงานสะท้อนวิธีคิดด้านระบบ การจัดการข้อมูล และการทำประสบการณ์ใช้งานให้เรียบง่ายขึ้น พร้อมลิงก์สำหรับดูผลงานจริง
              </p>
            </MotionDiv>

            <MotionDiv
              variants={variants.staggerContainer}
              className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {projectSummary.map((item) => (
                <MotionDiv
                  key={item.label}
                  variants={variants.revealUp}
                  transition={transition.snappy}
                  className="glass-panel rounded-[1.5rem] p-4">
                  <p className="text-2xl font-semibold text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {item.label}
                  </p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </MotionDiv>

        <div className="space-y-14 md:space-y-20">
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
                className="grid gap-5 lg:grid-cols-[1.05fr,0.95fr] lg:items-stretch">
                <MotionDiv
                  variants={isEven ? variants.revealRight : variants.revealLeft}
                  transition={transition.smooth}
                  className={cn(
                    "section-shell flex flex-col justify-between p-6 md:p-8",
                    !isEven && "lg:order-last"
                  )}>
                  <div>
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

                    <p className="mt-4 max-w-2xl text-base leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {project.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p className="text-sm leading-6 text-foreground/80">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {hasRepository ? (
                      <Button asChild variant="outline">
                        <a
                          href={project.linkgit}
                          target="_blank"
                          rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          ดูโค้ด
                        </a>
                      </Button>
                    ) : (
                      <Button variant="plain" size="sm" disabled>
                        <Lock className="mr-2 h-4 w-4" />
                        โค้ดเป็น Private
                      </Button>
                    )}

                    <Button asChild>
                      <a
                        href={project.linkdemo}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        ดูผลงานจริง
                      </a>
                    </Button>
                  </div>
                </MotionDiv>

                <MotionDiv
                  variants={isEven ? variants.revealLeft : variants.revealRight}
                  transition={transition.slow}
                  className="group section-shell min-h-[360px] p-3">
                  <div className="relative h-full min-h-[340px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0d1420]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                      <div className="glass-panel rounded-[1.5rem] p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <Badge variant="outline">{project.category}</Badge>
                          <span className="text-sm font-semibold text-foreground">
                            โปรเจกต์ {projectNum}
                          </span>
                        </div>
                        <h3 className="mt-3 text-foreground">{project.title}</h3>
                      </div>
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
