"use client";
import React from "react";
import {  VscJson, VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFlask,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiPytorch,
  SiReact,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { IconContext } from "react-icons";
import { BsThreeDots } from "react-icons/bs";

const SkillSection = () => {
  return (
    <div className=" grid  lg:grid-cols-2  h-screen items-center  ">
      <div className="lib data  grid-cols-3  iconContainer  ">
        <IconContext.Provider value={{ color: "white", className: "icon" }}>
          <SiReact />
          <SiExpress />
          <SiFlask />
          <SiPytorch />
          <SiMongodb />
          <SiMongoose />
          <SiPostgresql />
          <SiPostman />
          <BsThreeDots />
        </IconContext.Provider>
        <div className="grid grid-rows-subgrid row-span-1">
          <h1>hi</h1>
        </div>
      </div>
      <div className="tools  iconContainer grid-cols-2 sm:ml-auto">
        <IconContext.Provider value={{ color: "white", className: "icon" }}>

          <VscVscode/> 
          <FaGitAlt />
          <SiNpm />
          <SiDocker />
        </IconContext.Provider>
      </div>
      <div className="lang iconContainer grid-cols-2 ">
        <IconContext.Provider value={{ color: "white", className: "icon" }}>
          <SiJavascript />
          <DiJava />
          <SiHtml5 />
          <SiCss3 />
          <VscJson />
          <SiGo />
        </IconContext.Provider>
      </div>
      <div className=" ml-auto iconContainer grid-cols-2 ">
      </div>
    </div>
  );
};

export default SkillSection;
