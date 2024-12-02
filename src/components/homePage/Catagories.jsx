import React from "react";
import CatagoriesCard from "./CatagoriesCard";
function Catagories() {
  return (
    <div className="w-[86%] flex flex-col items-center bg-white mt-20 pl-9">
      <div className="w-full flex  gap-3">
        <img src="images/Rectangle17.png" alt="" className="w-[14px]" />
        <h1 className=" text-[16px] font-medium text-[#DB4444]">Categories</h1>
      </div>
      <div className="w-full flex justify-between items-center  ">
        <h2 className="text-[36px] font-semibold leading-8 mt-4  ">
          Browse By Category
        </h2>
        <div className="flex gap-1 pr-16">
          <div className="flex justify-center items-center text-[16px] text-black  w-10 h-10 text-center bg-slate-600 font-semibold rounded-full ">
            {"⬅"}
          </div>
          <div className="flex justify-center items-center text-[16px] text-black  w-10 h-10 text-center bg-slate-600 font-semibold  rounded-full ">
            {"➡"}
          </div>
        </div>
      </div>
      <div className="flex gap-2 pr-16 ">
        <CatagoriesCard image={"images/Category1.png"} title={"Phones"} />
        <CatagoriesCard image={"images/Category1.png"} title={"Phones"} />
        <CatagoriesCard image={"images/Category1.png"} title={"Phones"} />
        <CatagoriesCard image={"images/Category1.png"} title={"Phones"} />
        <CatagoriesCard image={"images/Category1.png"} title={"Phones"} />
        <CatagoriesCard image={"images/Category1.png"} title={"Phones"} />
      </div>
    
    </div>
  );
} 

export default Catagories;
