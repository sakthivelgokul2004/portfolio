"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [index, setIndex] = useState(0);
  const [trasition, setTrasition] = useState<number[]>([]);
  const scrollref = useRef<HTMLDivElement | null>(null);
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
  useEffect(() => {
    indexing(index, images.length - 1);
  }, [index]);
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
  const indexing = (index: number, length: number) => {
    const arr: number[] = [];
    let min = length - index;
    for (let i = 0; i < length + 1; i++) {
      arr.push(min * 100);
      min -= 1;
    }
    arr.sort((a, b) => a - b);
    setTrasition(arr);
    console.log(trasition);
  };
  return (
    <div className="lg:h-screen  flex flex-col h-[40vh] md:h-screen overflow-hidden z-10 relative">
      <div className=" -z-10 absolute w-[300%] flex flex-col flex-nowrap overflow-hidden">
        <AnimatePresence>
          <div
            className={`flex flex-row snap-center  justify-center items-center gap-0  `}
            ref={scrollref}
          >
            {images.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  animate={{x : -100 + "%"}}
                  className={`w-1/2`}
                >
                  <Image
                    src={value}
                    key={index}
                    width={1080}
                    alt="value"
                    height={1920}
                    className="image"
                  />
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
      <div className="h-4 bg-gray-50 absolute md:bottom-20 md:right-20 bottom-10 right-10 z-10">
      <button
      onClick={() => {
        // setsilde(!silde);
        // window.scrollBy(window.screenX, window.screenY);
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
      className="md:h-16 md:w-16 h-8 w-8 sna rounded-xl border-2 border-black-1 "
      >
      mimus
      </button>
      </div>
    </div>
  );
};

export default ProjectSection;
