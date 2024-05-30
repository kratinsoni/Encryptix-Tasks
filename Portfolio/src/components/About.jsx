import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

function About() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="h-screen p-4 "
    >
      <div className="flex py-2 px-6 h-full items-center">
        <div className=" w-2/5 mx-2 flex">
          <img src="src\assets\profile-pic.png" width="500px" alt="" />
        </div>
        <div className=" w-3/5 mx-2 px-2 text-white h-full flex justify-center items-center">
          <div className="h-1/2">
            <div className="text-4xl font-bold font-poppins mb-4 ">
              About Me
            </div>
            <div className="bg-yellow-500 h-2 w-48"></div>
            <div className="text-2xl font-bold mt-6 font-poppins">
              Harshit Soni
            </div>
            <div className="text-2xl text-gray-400 align-bottom mt-8">
              Seasoned Full Stack Software Engineer with over 8 years of
              hands-on experience in designing and implementing robust,
              scalable, and innovative web solutions. Adept at leveraging a
              comprehensive skill set encompassing front-end and back-end
              technologies
            </div>
            <div className="flex gap-8 my-14">
              <button className="text-black bg-white font-poppins px-7 py-3 rounded-3xl font-semibold hover:text-white hover:bg-black  border-white border-2">
                Get In Touch
              </button>
              <Link
                className="text-white bg-black font-poppins px-7 py-3 rounded-3xl font-semibold border-white border-2 hover: border-collapse hover:bg-white hover:text-black"
                to={
                  "https://drive.google.com/uc?export=download&id=1vjH7JcMRwI27_z_BmCI6R-WktE3-qggD"
                }
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
