"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";

const projects = [
  {
    title: "Password Generator",
    desc: "It's feature two main functionality: a Password Generator and a Password Checker. The Password Generator allows users to create secure, customized passwords based on selected criteria, while the Password Checker evaluates the strength of entered passwords against common security standards.",
    category: "frontend",
    linkgit: "",
    linkdemo: "https://int203-project-password-secure.vercel.app/",
    image: "/proj2.png",
    stack: ["vue"],
  },

  {
    title: "Markdown-parser",
    desc: "It's a markdown editor aims to create, edit, manage markdown document.",
    category: "Fronend, Backend",
    linkgit: "",
    linkdemo: "https://project-2-sec-1-markdown-parser.vercel.app/",
    image: "/proj1.png",
    stack: ["vue", "json-server"],
  },
  {
    title: "Kanban board",
    desc: "an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)",
    category: "backend",
    linkgit: "",
    linkdemo: "http://intproj23.sit.kmutt.ac.th/sy1/login",
    image: "/proj3.png",
    stack: ["Java", "Vue", "JWT", "MYSQL", "Docker "],
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null);

  const onSlideChange = (item) => {
    setCurrentProject(projects[item?.activeIndex]);
  };
  const index =
    projects.findIndex((item) => item.title === currentProject?.title) + 1;

  const nexto = () => {
    swiper.slideNext();
  };
  const prev = () => {
    swiper.slidePrev();
  };
  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen container">
      <div className="mt-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-10 ">
          <h3>
            {" "}
            My <span>Projects</span>
          </h3>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transition.moveDown}
          className="flex lg:flex-row  flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center  w-full">
          <div className="flex-1 space-y-3">
            <h2 className="text-6xl font-semibold text-primary">
              {index < 10 ? `0${index}` : index}
            </h2>
            <h3>{currentProject?.title}</h3>
            <p className="w-9/12 text-accent-foreground">
              {currentProject?.desc}
            </p>
            <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
              {currentProject?.stack?.map((item) => {
                return (
                  <Badge
                    key={item}
                    variant={"outline"}
                    className="text-primary text-base">
                    {item}
                  </Badge>
                );
              })}
            </div>
            <br />
            <div className="flex gap-x-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="bg-accent p-2.5 rounded-full">
                      <Image
                        src="/GitHub.svg"
                        alt="GitHub"
                        width={40}
                        height={40}
                      />
                    </button>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="bg-accent p-2.5 rounded-full">
                      <a
                        href={currentProject?.linkdemo} // Correct syntax for href
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex" // Ensuring the anchor wraps properly
                      >
                        <Image
                          src="/open.svg"
                          alt="github"
                          width={40}
                          height={40}
                        />
                      </a>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Preview</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col">
            <Swiper
              // slidesPerView={1.4}
              breakpoints={{
                // when window width is <= 499px
                499: {
                  slidesPerView: 1,
                },
                // when window width is <= 999px
                999: {
                  slidesPerView: 1.4,
                },
              }}
              spaceBetween={20}
              className="w-full md:max-w-lg max-w-[250px]"
              onSlideChange={onSlideChange}
              onSwiper={(s) => {
                setSwiper(s);
              }}>
              {projects.map((project, i) => {
                return (
                  <SwiperSlide
                    key={project.title}
                    className={cn(index - 1 !== i && "opacity-45", "")}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={350}
                      height={350}
                      className="object-contain"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex ml-6 mt-4 gap-x-4">
              <button onClick={prev} disabled={index === 1}>
                <Image
                  src={"/prev.png"}
                  alt={"prev"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
              <button onClick={nexto} disabled={index === projects.length}>
                <Image
                  src={"/next.png"}
                  alt={"next"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
