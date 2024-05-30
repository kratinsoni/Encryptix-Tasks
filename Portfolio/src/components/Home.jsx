import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import ProjectBox from "./ProjectBox.jsx";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [text] = useTypewriter({
    words: [" Developer", " Student", " Learner"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 50,
  });

  const naviagte = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full flex px-12 py-12 justify-around items-center">
        <div className="mt-12 w-1/2">
          <div
            className="font-poppins text-white text-7xl
      font-extrabold"
          >
            Hey I'm Harshit
          </div>
          <div className="font-poppins text-white text-5xl font-extrabold my-12">
            I am a{" "}
            <span className="font-poppins text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              {text}
            </span>
            <span>
              <Cursor />
            </span>
          </div>
          <div className="font-poppins font-light text-base text-white my-6">
            <span>
              👋 Hey there, I'm Harshit Soni, currently pursuing my studies at
              IIT Kharagpur. Hailing from the vibrant state of Rajasthan, I
              bring a blend of cultural richness and technical prowess to the
              table. specializing in backend and frontend development.
            </span>
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
        <div className="">
          <img
            src="src\assets\profile-pic (1).png"
            className="w-[400px]"
            alt=""
          />
        </div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center "
      >
        <span className="font-poppins text-base text-gray-400 ">
          EXPIERENCE WITH
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex gap-4 justify-center my-4 "
      >
        <span>
          <img src="src\assets\javascript.png" width="30px" alt="" />
        </span>
        <span>
          <img src="src\assets\nodejs.png" width="30px" alt="" />
        </span>
        <span>
          <img src="src\assets\html.png" width="30px" alt="" />
        </span>
        <span>
          <img src="src\assets\css.png" width="30px" alt="" />
        </span>
        <span>
          <img src="src\assets\reactjs.png" width="30px" alt="" />
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center"
      >
        <span className="font-poppins my-10 text-3xl font-extrabold bg-gradient-to-r from-orange-200 to-orange-600 inline-block text-transparent bg-clip-text">
          PROJECTS
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center gap-20"
      >
        <div>
          <ProjectBox
            name="BlogApp"
            source="src\assets\Screenshot 2024-04-30 122042.png"
            uri="https://github.com/kratinsoni/BlogApp-appwrite"
          />
        </div>
        <div>
          <ProjectBox
            name="VideoTube"
            source="src\assets\Screenshot 2024-04-30 130855.png"
            uri="https://github.com/kratinsoni/VideoTube-Backend"
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center gap-10 my-4"
      >
        <button
          class="relative py-2 px-8 my-4 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          onClick={() => {
            naviagte("/projects");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          ALL PROJECTS
        </button>
      </motion.div>
      <div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center my-12"
        >
          <img src="src\assets\Experience.png" alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="my-12">
            <div className="text-white font-poppins font-extrabold text-2xl text-start px-80 my-3 flex">
              <span>
                <img
                  className="w-6 mx-2 my-1"
                  src="src\assets\6204d333e0c96_kshitij_logo.png"
                  alt=""
                />
              </span>
              Design Associate At KSHITIJ
            </div>
            <div className="text-gray-400 font-poppins text-sm text-start px-80">
              Made Various Banners and Posters for Sponsers using softwares like
              Photoshop and illustrator. Collaborated with many students to make
              design for the fest and Sponsers. Developed and learned Various
              Teamworks and Design Skills and social skills while interaction
              with various people.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
