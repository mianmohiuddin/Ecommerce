import React from "react";
import { useState } from "react";
function Section() {

  return (
    <div className="w-[86%] flex px-14  pl-9 mt-20 ">
      <div className=" flex justify-center items-center w-full bg-[#000000] p-10 ">
        {/* left */}

        <div className=" w-full flex flex-col ">
          <h1 className="text-[16px] font-semibold text-[#00FF66]  ">
            Catogries
          </h1>

          <p className=" text-[48px] leading-7 text-[#FAFAFA] font-semibold  mt-10 ">
            Enhance Your
          </p>
          <p className="text-[48px] leading-7 text-[#FAFAFA] font-semibold mt-8">
            {" "}
            Music Experience
          </p>
          <div className="w-full flex gap-6 mt-8  text-center  ">
            <div className="flex flex-col justify-center items-center   border-[2px] w-[55px] h-[55px] bg-[#ffffff] rounded-full">
              <p className="text-[16px]  font-bold mt-4">23</p>
              <p className="text-[11px] text-[#000000] font-semibold mb-6">
                Hours
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[55px] h-[55px]  border-[2px] bg-[#ffffff] rounded-full">
              <p className="text-[16px]  font-bold mt-4">05</p>
              <p className="text-[11px] text-[#000000] font-semibold mb-6">
                Days
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[55px] h-[55px] border-[2px] bg-[#ffffff] rounded-full">
              <p className="text-[16px]  font-bold mt-4">59</p>
              <p className="text-[11px] text-[#000000] font-semibold mb-6">
                Mintues
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  w-[55px] h-[55px] border-[2px] bg-[#ffffff] rounded-full">
              <p className="text-[16px]  font-bold mt-4">35</p>
              <p className="text-[11px] text-[#000000] font-semibold mb-6">
                Seconds
              </p>
            </div>
          </div>
          <button  className=" text-white w-[171px] h-[56px] rounded-[4px] border-[2px] text-center  bg-[#00FF66]  mt-6">
            Buy Now!
          </button>
          <div>
            
          </div>
        </div>
        {/*right*/}
        <div className=" w-full flex justify-center items-center pr-16">
          <img
            src="images/Frame 694.png"
            alt="Feature Illustration"
            className="w-[500px] flex justify-center items-center "
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
