import { MotionButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition, variants } from "@/utils/framer_variants";
import schoolBg from "../../../public/schoolbg.jpg";
import debsirinLogo from "../../../public/Debsirinlogo.png";
import backgroundImage from "../../../public/backgroundImage.jpg";
import collegeLogo from "../../../public/collegeLogo.png";

import {
  TabsContent,
  TabsList,
  TabsTrigger,
  MotionTabs,
} from "@/components/ui/tabs";
import { MotionDiv, MotionImage } from "@/utils/motionTags";
import { BADEGE } from "@/utils/data";

export default function Resume() {
  return (
    <>
      <div
        className={cn(
          "max-w-4xl mx-auto 2xl:pt-60 pt-32 px-3 pb-4 min-h-screen"
        )}>
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center">
            <MotionImage
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              src="/profile.jpg"
              width={155}
              height={155}
              className="md:w-36 w-28 rounded-full " // Tailwind CSS for circular image
              alt="avatar"
            />

            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={transition.moveDown}
              className="sm:text-left text-center">
              <h3 className="mb-2">
                Chanakarn <span>Kruehong.</span>
              </h3>
              <h5>Bangkok, TH</h5>
            </MotionDiv>
          </div>
          <MotionButton
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transition.moveDown}
            variant="outline"
            size="lg">
            Backend developer
          </MotionButton>
        </div>
        <MotionTabs
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          defaultValue="about"
          className="leading-7 mt-10">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">education</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <h6>Who I&apos;m </h6>
            <p className="text-accent-foreground mt-2">
              My name is <span className="font-bold">Chanakarn Kruehong</span>,
              and I am an aspiring Backend Developer currently pursuing my
              degree at King Mongkut’s University of Technology Thonburi. I have
              a strong passion for building efficient and scalable systems, with
              a solid foundation in programming and a keen interest in
              server-side technologies. I am committed to developing solutions
              that drive seamless user experiences. I am dedicated to continuous
              learning and improving my technical skills, always seeking new
              challenges and opportunities to innovate. As a detail-oriented and
              proactive individual, I am eager to contribute to impactful
              projects and grow as a developer in a collaborative environment.
            </p>
          </TabsContent>
          <TabsContent value="skills">
            <div className="flex flex-wrap gap-4 p-4">
              {BADEGE.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border border-gray-300 rounded-full p-2 bg-[#3c338a] shadow-sm hover:transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                  {badge.icon && (
                    <badge.icon className="w-6 h-6 mr-2 text-white" />
                  )}
                  <span className="text-sm font-medium text-white">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="experience">
            <div className="relative rounded-lg overflow-hidden shadow-md mt-3">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('/schoolbg.jpg')`,
                  filter: "blur(2px)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}></div>
              <div className="relative flex items-center justify-between p-6 bg-black bg-opacity-70 z-10">
                <div className="flex items-center space-x-4">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">I was a student at</h3>
                    <p className="text-sm">Debsirin School</p>
                  </div>
                  <img
                    src="/Debsirinlogo.png"
                    alt="College Logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="text-white font-bold text-lg">2016 - 2022</div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md mt-3">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('/backgroundImage.jpg')`,
                  filter: "blur(2px)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 0,
                }}></div>
              <div className="relative flex items-center justify-between p-6 bg-black bg-opacity-70 z-10">
                <div className="flex items-center space-x-4">
                  <div className="text-white">
                    <h3 className="text-lg font-bold">
                      I'm currently studying at
                    </h3>
                    <p className="text-sm">
                      King Mongkut’s University of Technology Thonburi
                    </p>
                  </div>
                  <img
                    src="/collegeLogo.png"
                    alt="College Logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="text-white font-bold text-lg">2022 - now</div>
              </div>
            </div>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}
