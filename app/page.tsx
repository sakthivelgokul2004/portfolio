import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/skillSection";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="max-w-[80rem] mx-auto h-screen  z-10">
      <div className="h-5/6 md:h-screen">
        <div className="h-full w-full bg-black   bg-grid-white/[0.1]  relative flex items-center justify-center overflow-hidden">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            hi I am sakthivel
          </p>
          <Spotlight />
        </div>
      </div>
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
