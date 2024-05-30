import React from "react";

function ProjectBox({ name, source, uri="https://www.google.com" }) {
  return (
    <div
      className="my-8 w-[440px] rounded-2xl bg-headerbg cursor-pointer shadow-lg hover:transform hover:scale-110 transition-all"
      onClick={() => {
        window.open(uri);
      }}
    >
      <div>
        <img src={source} className="rounded-t-2xl" alt="" />
      </div>
      <div className="flex justify-between px-3 py-1">
        <div className=" p-2 flex-col">
          <div className="text-slate-300 font-poppins text-sm">
            CLICK HERE TO VISIT
          </div>
          <div className="text-white text-2xl font-poppins font-extrabold">
            {name}
          </div>
        </div>
        <div className="relative top-6 right-5">
          <img src="src\assets\ViewIcon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
