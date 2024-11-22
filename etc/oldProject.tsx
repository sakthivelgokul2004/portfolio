"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const [silde, setsilde] = useState(true);
  const [index, setIndex] = useState(0);
  const varients = {
    next: {
      x: 100,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    prevous: {
      x: -1000,
    },
  };
  const incrementIndex = (direction: directions) => {
    if (direction == directions.postive) {
      if (images.length - 1 == index) {
        setIndex(0);
        return;
      }
      setIndex((perves) => ++perves);
    }
    if (direction == directions.negative) {
      if (index == 0) {
        setIndex(images.length - 1);
        return;
      }
      setIndex((perves) => --perves);
    }
  };
  return (
    <div className="lg:h-screen  flex flex-col h-[40vh] md:h-screen overflow-scroll relative">
      <div className="w-full   flex flex-col overflow-hidden  z-0">
        <AnimatePresence>
          <motion.div animate={silde ? "next" : "prevous"} variants={varients}>
            <Image
              src={images[index]}
              width={1080}
              height={1920}
              alt="Picture of the author"
              className=" md:aspect-video aspect-[5/4] border-black-1 border-[2px] rounded-xl p-4  md:h-[515px] md:w-[916px] scale-75 md:scale-90"
              data-isactive="false"
            />
            <Image
              src={images[index]}
              width={1080}
              height={1920}
              alt="Picture of the author"
              className=" md:aspect-video aspect-[5/4] border-black-1 border-[2px] rounded-xl p-4  md:h-[515px] md:w-[916px] scale-75 md:scale-90"
              data-isactive="false"
            />
            <Image
              src={images[index]}
              width={1080}
              height={1920}
              alt="Picture of the author"
              className=" md:aspect-video aspect-[5/4] border-black-1 border-[2px] rounded-xl p-4  md:h-[515px] md:w-[916px] scale-75 md:scale-90"
              data-isactive="false"
            />
          </motion.div>
        </AnimatePresence>
        <div className="h-4 bg-gray-50 absolute md:bottom-20 md:right-20 bottom-10 right-10 z-10">
          <button
            onClick={() => {
              setsilde(!silde);
              incrementIndex(directions.postive);
            }}
            className="md:h-16 md:w-16 h-8 w-8 rounded-xl border-2 border-black-1 m-4"
          >
            add
          </button>
          <button
            onClick={() => {
              incrementIndex(directions.negative);
            }}
            className="md:h-16 md:w-16 h-8 w-8 rounded-xl border-2 border-black-1 "
          >
            mimus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
