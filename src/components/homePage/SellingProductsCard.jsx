import React from "react";

function SellingProductsCard({discount,heart,eye,image,title,rating,ratings,star1,star2,star3,star4,star5}) {
  return (
    <div>
      <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-100 shadow-sm  overflow-hidden relative mt-10">
        <div className=" absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          {discount}
        </div>
        <div className=" flex flex-col absolute top-2 right-2 text-white px-2 py-1 text-sm ">
          <img src={heart} alt="icon" className="w-[30px] object-cover" />
          <img src={eye} alt="icon" className="w-[30px] object-cover mt-4" />
        </div>

        <img src={image} alt="" className="w-[178px]  object-cover" />
      </div>
      <div className="w-[250px] flex flex-col items-start justify-start  mt-2 ">
        <h1 className="text-[16px] font-normal text-[#000000]">{title}</h1>
        <div className="flex gap-4 items-center font-bold mb-2">
          <p className="text-red-600">{rating}</p>
          <p className="text-[#000000]">{ratings}</p>
        </div>
        <div className="flex items-center text-sm font-normal text-yellow-300 gap-1.5">
          <img src={star1} alt="star" className="w-[10px] object-cover" />
          <img src={star2} alt="star" className="w-[10px] object-cover" />
          <img src={star3} alt="star" className="w-[10px] object-cover" />
          <img src={star4} alt="star" className="w-[10px] object-cover" />
          <img src={star5} alt="star" className="w-[10px] object-cover" />
          <p className="text-[16px] text-[#000000] "> (65)</p>
        </div>
      </div>
    </div>
  );
}

export default SellingProductsCard;
