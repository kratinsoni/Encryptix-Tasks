import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-headerbg w-full h-72 font-poppins py-16 px-44">
      <div className="text-white text-2xl">Contact</div>
      <div className="my-6 text-white ">
        Seasoned Full Stack Software Engineer with over 8 years of hands-on
        experience in designing and implementing robust, scalable, and
        innovative web solutions. Adept at leveraging a comprehensive skill set
        encompassing front-end and back-end technologies
      </div>
      <div className="text-white">✉ kratin67@gmail.com</div>
      <div className="my-4 flex gap-6">
        <Link to="https://www.linkedin.com/in/harshit-soni-70336229a/">
          <img src="src\assets\linkedin.png" width="30px" alt="" />
        </Link>
        <Link to="https://github.com/kratinsoni">
          <img src="src\assets\github.png" width="30px" alt="" />
        </Link>
        <Link to="https://www.instagram.com/harshit_soni_1010/">
          <img src="src\assets\instagram.png" width="30px" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
