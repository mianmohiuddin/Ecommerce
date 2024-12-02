import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const WishListCard = ({
  discount,
  image,
  image1,
  button,
  title,
  rating,
  ratings,
  
}) => {
  return (
    <div>
      <div className=" flex flex-col  justify-center items-center mt-12">
        <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-100 shadow-sm  overflow-hidden relative ">
          <div className=" absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            {discount}
          </div>
          <div className=" flex flex-col absolute top-2 right-2 text-white px-2 py-1 text-sm ">
            <img src={image} alt="icon" className="w-[30px] object-cover" />
          </div>
          <div className="w-full flex flex-col  items-center mt-6">
            <img src={image1} alt="Game Controller" className="w-[170px]  " />
            <button className="w-full h-[41px] text-[16px] font-normal  bg-black text-white mt-6 flex justify-center items-center gap-1">
              <RiShoppingCart2Line size={20} /> {button}
            </button>
          </div>
        </div>
        <div className="w-[250px] flex flex-col items-start justify-start  mt-2 ">
          <h1 className="text-[16px] font-normal text-[#000000]">{title}</h1>
          <div className="flex gap-4 items-center font-bold mb-2">
            <p className="text-red-600">{rating}</p>
            <p className="text-[#000000]">{ratings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
