import React from "react";
import Countdown from "./Countdown";
import ProductsCard from "./ProductsCard";
import { useState } from "react";
function Products() {
  const [count,setCount]=useState()
  const handleClick=()=>{
    setCount(count + 1)
  }
  return (
    <div className="w-[86%] bg-[#ffff] flex flex-col  justify-center  items-center  mt-8 pl-9">
      <div className="w-full flex gap-4 pl-1">
        <img src="images/Rectangle17.png" alt="" className="w-[14px] " />
        <h1 className=" text-[16px] font-medium text-[#DB4444]">Today's</h1>
      </div>
       <div className="w-full flex jusitfy-between gap-24 mt-4 ">
        <h2 className="text-[36px] font-semibold leading-8 p-1">Flash Sales</h2>

        <div className="flex justify-center items-center gap-4">
          <Countdown />
        </div>
      </div>

      <div className="flex gap-4 pr-16">
        <ProductsCard
          discount={"40%"}
          image={"images/icon2.png"}
          image2={"images/icon 1.png"}
          image3={"images/product.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          dollar={"$160"}
          image4={"images/star1.png"}
          image5={"images/star2.png"}
          image6={"images/star3.png"}
          image7={"images/star4.png"}
          image8={"images/star5.png"}
        />
        <ProductsCard
          discount={"40%"}
          image={"images/icon2.png"}
          image2={"images/icon 1.png"}
          image3={"images/productkey.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          dollar={"$160"}
          image4={"images/star1.png"}
          image5={"images/star2.png"}
          image6={"images/star3.png"}
          image7={"images/star4.png"}
          image8={"images/star5.png"}
        />
        <ProductsCard
          discount={"40%"}
          image={"images/icon2.png"}
          image2={"images/icon 1.png"}
          image3={"images/prdouctlcd.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          dollar={"$160"}
          image4={"images/star1.png"}
          image5={"images/star2.png"}
          image6={"images/star3.png"}
          image7={"images/star4.png"}
          image8={"images/star5.png"}
        />
        <ProductsCard
          discount={"40%"}
          image={"images/icon2.png"}
          image2={"images/icon 1.png"}
          image3={"images/product.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          dollar={"$160"}
          image4={"images/star1.png"}
          image5={"images/star2.png"}
          image6={"images/star3.png"}
          image7={"images/star4.png"}
          image8={"images/star5.png"}
        />
      </div>
      <div className="felx justify-center items-center  mt-10">
        <button  className="text-[16px] font-normal leading-6 text-[#ffff] bg-red-600 rounded border-[2px] w-[234px] h-[55px]">
          View All Products
        </button>
      </div>
      <div className=" w-full border text-white mt-16"></div>
    </div>
  );
}

export default Products;
