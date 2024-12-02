import React from "react";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
function SectionsCard({image,title,discription}) {
  return (
    <div className=" flex flex-col justify-center items-center bg-white mt-8">
      <div className="w-[350px] h-[391px] flex flex-col justify-center items-center bg-slate-100 shadow-sm  overflow-hidden relative mt-4">
        <img
          src={image}
          alt="jkn"
          className="w-[240px] h-[391px] "
        />
      </div>
      <div className="w-[350px] flex flex-col justify-start items-start mt-2 ">
        <h1 className="text-[32px] font-normal text-[#000000]">{title}</h1>
        <div className="flex flex-col gap-4 items-start font-bold mb-2">
          <p className="text-red-600">{discription}</p>
          <div className="flex gap-2">
            <CiTwitter />
            <IoLogoInstagram />
            <RiLinkedinLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionsCard;

