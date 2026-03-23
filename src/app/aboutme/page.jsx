import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  MotionTabs,
} from "@/components/ui/tabs";
import { MotionDiv } from "@/utils/motionTags";
import { BADEGE, EDUCATION } from "@/utils/data";
import { transition, variants, viewport } from "@/utils/framer_variants";
import { Download, MapPin, Sparkles } from "lucide-react";

const strengths = [
  {
    title: "Backend mindset",
    description:
      "I enjoy thinking about structure, flow, reliability, and how systems behave beyond the interface.",
  },
  {
    title: "Product awareness",
    description:
      "I like connecting technical work back to the user experience so the result feels useful, not just functional.",
  },
  {
    title: "Steady growth",
    description:
      "I keep learning through coursework, experiments, and real projects that help sharpen both fundamentals and delivery.",
  },
  {
    title: "Detail driven",
    description:
      "From UI polish to implementation decisions, I care about how a project feels and how well it holds together.",
  },
];

const quickFacts = [
  "Aspiring backend developer",
  "Bangkok based",
  "Interested in scalable systems",
];

export default function Resume() {
  return (
    <section className="px-4 pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-6 lg:grid-cols-[0.78fr,1.22fr]">
          <MotionDiv
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={variants.revealRight}
            transition={transition.smooth}
            className="section-shell p-6 md:p-8">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04]">
              <Image
                src="/profile.jpg"
                alt="Chanakarn Kruehong"
                width={600}
                height={760}
                className="h-[340px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="mt-6 space-y-4">
              <span className="section-eyebrow">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                About Me
              </span>

              <div>
                <h2 className="text-foreground">Chanakarn Kruehong</h2>
                <p className="mt-2 flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Bangkok, Thailand
                </p>
              </div>

              <p>
                An aspiring backend developer who enjoys combining clean technical
                thinking with a presentation style that feels more refined and memorable.
              </p>

              <div className="flex flex-wrap gap-3">
                {quickFacts.map((fact) => (
                  <span key={fact} className="chip">
                    {fact}
                  </span>
                ))}
              </div>

              <Button asChild variant="outline">
                <a href="/resume.pdf" download>
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={variants.revealLeft}
            transition={transition.slow}
            className="section-shell p-6 md:p-8">
            <span className="section-eyebrow">Profile Snapshot</span>
            <h2 className="mt-5 max-w-3xl text-foreground">
              Curious about systems, committed to growth, and motivated by work
              that feels both useful and well crafted.
            </h2>
            <p className="mt-4 max-w-3xl">
              I&apos;m currently studying at King Mongkut&apos;s University of Technology
              Thonburi and using each project as a chance to improve how I build,
              collaborate, and communicate ideas. My main interest is backend
              development, but I also care about how the whole product experience
              comes together.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="glass-panel rounded-[1.5rem] p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-lg font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>

        <MotionTabs
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={variants.revealUp}
          transition={transition.smooth}
          defaultValue="about"
          className="space-y-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                  Who I Am
                </p>
                <h3 className="mt-4 text-foreground">
                  Building foundations first, then improving the polish around them.
                </h3>
                <p className="mt-4">
                  I&apos;m focused on learning how strong backend work is designed,
                  implemented, and maintained. That includes understanding APIs,
                  data flow, authentication, and the kind of technical decisions that
                  make a product more stable over time.
                </p>
                <p className="mt-4">
                  At the same time, I care about how the final work is presented.
                  A portfolio should not only show what I built, but also reflect
                  how intentional I am about the craft itself.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Focused on backend growth and technical depth",
                  "Comfortable learning through real project constraints",
                  "Motivated by work that is both useful and memorable",
                ].map((item) => (
                  <div key={item} className="glass-panel rounded-[1.5rem] p-5">
                    <p className="text-base font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {BADEGE.map((badge) => (
                <div
                  key={badge.name}
                  className="glass-panel flex items-center gap-3 rounded-[1.5rem] p-4 transition-transform duration-300 hover:-translate-y-1">
                  <badge.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience">
            <div className="grid gap-5">
              {EDUCATION.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-[1.8rem] border border-white/10">
                  <Image
                    src={item.backdrop}
                    alt={item.school}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

                  <div className="relative z-10 flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                    <div className="flex items-center gap-4">
                      <div className="glass-panel rounded-full p-3">
                        <Image
                          src={item.logo}
                          alt={`${item.school} logo`}
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
                          {item.program}
                        </p>
                        <h3 className="mt-2 text-foreground">{item.school}</h3>
                        <p className="mt-2 max-w-2xl text-sm text-white/75">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="chip self-start border-white/15 bg-white/[0.08] text-white md:self-center">
                      {item.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </MotionTabs>
      </div>
    </section>
  );
}
