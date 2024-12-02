import React from "react";

function ProductsCard({

  discount,
  image,
  image2,
  image3,
  title,
  rating,
  dollar,
  image4,
  image5,
  image6,
  image7,
  image8,
}) {

  return (
    <div className=" flex flex-col  justify-center items-center ">
      <div className="w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-100 shadow-sm  overflow-hidden relative mt-4">
        <div className=" absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          {discount}
        </div>
        <div className=" flex flex-col absolute top-2 right-2 text-white px-2 py-1 text-sm ">
          <img src={image} alt="icon" className="w-[30px] object-cover" />
          <img src={image2} alt="icon" className="w-[30px] object-cover mt-4" />
        </div>

        <img
          src={image3}
          alt="Game Controller"
          className="w-[170px]  object-cover"
        />
      </div>
      <div className="w-[250px] flex flex-col items-start justify-start  mt-2 ">
        <h1 className="text-[16px] font-normal text-[#000000]">{title}</h1>
        <div className="flex gap-4 items-center font-bold mb-2">
          <p className="text-red-600">{rating}</p>
          <p className="text-[#000000]">{dollar}</p>
        </div>
        <div className="flex items-center text-sm font-normal text-yellow-300">
          <img src={image4} alt="star" className="w-[10px] object-cover" />
          <img src={image5} alt="star" className="w-[10px] object-cover" />
          <img src={image6} alt="star" className="w-[10px] object-cover" />
          <img src={image7} alt="star" className="w-[10px] object-cover" />
          <img src={image8} alt="star" className="w-[10px] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
