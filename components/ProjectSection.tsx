"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Fa1 } from "react-icons/fa6";
import { ArrowLeft, ArrowRight, ArrowUpLeft } from "lucide-react";
const images = [
  "/Screenshot 2024-10-28 162434.png",
  "/Screenshot 2024-10-28 162434.png",
  "/Screenshot 2024-10-28 162434.png",
  "/images.jpg",
];
enum directions {
  postive = 1,
  negative = -1,
}
const ProjectSection = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [trasition, setTrasition] = useState<number[]>([]);
  const incrementIndex = (direction: directions) => {
    if (direction == directions.postive) {
      if (images.length - 1 == imageIndex) {
        setImageIndex(0);
        return;
      }
      setImageIndex((perves) => ++perves);
    }
    if (direction == directions.negative) {
      if (imageIndex== 0) {
        setImageIndex(images.length - 1);
        return;
      }
      setImageIndex((perves) => --perves);
    }
  };
  const currTranlate= () => {
         return { x: -imageIndex*100+ "%" }; 

  }
  return (
    <div className="lg:h-screen  flex flex-col h-[40vh] md:h-screen overflow-hidden z-10 relative">
      <div className=" -z-10 absolute w-[300%] flex flex-col flex-nowrap overflow-hidden">
        <AnimatePresence>
          <div
            className={`flex flex-row snap-center  justify-center items-center gap-0  `}
          >
            {images.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  animate={currTranlate()}
                  className={`w-1/2`}
                  transition={{ duration: 0.75,  ease: "easeIn" }}
                >
                  <Image
                    src={value}
                    key={index}
                    width={1080}
                    alt="value"
                    height={1920}
                    className={index != imageIndex ?"image-sm" :"image"}
                  />
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
      <div className="h-4 absolute md:bottom-20 md:right-20 bottom-10 right-10 z-10">
      <button
      onClick={() => {
        incrementIndex(directions.negative);
      }}
      className="md:h-16 md:w-16 h-8 w-8 sna rounded-xl border-2 border-black-1 "
      >
      <ArrowLeft/>
      </button>
        <button
          onClick={() => {
            incrementIndex(directions.postive);
          }}
          className="md:h-16 md:w-16 h-8 w-8 rounded-xl border-2 border-black-1 m-4"
        >
        <ArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
