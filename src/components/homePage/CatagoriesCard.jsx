import React from "react";

function CatagoriesCard({ image, title }) {
  return (
    <div className="">
      <div className="flex  w-[170px] h-[145px]  mt-8">
        <div className="w-full flex justify-center items-center flex-col rounded-[4px] border-[1px] mt-2">
          <img
            src={image}
            alt="Phn"
            className="w-[50px] h-[50px] object-cover"
          />
          <h1 className="text-[16px] text-[#000000] font-normal leading-6  mt-2">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CatagoriesCard;
