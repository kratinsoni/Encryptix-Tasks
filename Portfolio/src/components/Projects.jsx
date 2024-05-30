import React from "react";
import ProjectBox from "./ProjectBox";
import {motion } from "framer-motion";
import {fadeIn} from "../variants";

function Projects() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="my-12 px-12 min-h-screen"
    >
      <div className="flex justify-center">
        <h1 className="text-white font-poppins text-7xl font-extrabold">
          Projects
        </h1>
      </div>
      <div className="border-yellow-500 border-8 w-96 mx-auto my-6"></div>
      <div className="grid grid-flow-col grid-cols-2 px-32 justify-items-center">
        <div className="w-[440px] my-4 ">
          <ProjectBox
            name="BlogApp"
            source="src\assets\Screenshot 2024-04-30 122042.png"
            uri="https://github.com/kratinsoni/BlogApp-appwrite"
          />
        </div>
        <div className="w-[440px] my-4">
          <ProjectBox
            name="VideoTube"
            source="src\assets\Screenshot 2024-04-30 130855.png"
            uri="https://github.com/kratinsoni/VideoTube-Backend"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
