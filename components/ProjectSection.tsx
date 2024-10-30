import React from "react";
import Image from "next/image";
const ProjectSection = () => {
  return (
    <div className="lg:h-screen  flex flex-col md:flex-row md:h-screen overflow-hidden">
      <div className="flex-grow w-full">
        <div className="h-full w-full flex  items-center justify-center overflow-hidden">
          <Image
            src="/Screenshot 2024-10-28 162434.png"
            width={1080}
            height={1920}
            alt="Picture of the author"
            className=" md:aspect-video aspect-[5/4] border-black-1 border-[2px] rounded-xl p-4  md:h-[515px] md:w-[916px]"
          />
        </div>
      </div>
      <div className="h-[8rem] md:w-2/5 md:h-full ml-4 bg-black-300"></div>
    </div>
  );
};

export default ProjectSection;
