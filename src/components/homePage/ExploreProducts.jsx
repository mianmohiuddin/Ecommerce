import React from "react";
import ExploreProductsCard from "./ExploreProductsCard";
function ExploreProducts() {
  return (
    <div className="w-[86%] bg-[#ffff] flex flex-col justify-between items-center  mt-16 pl-9">
      <div className="w-full flex  gap-3 ">
        <img src="images/Rectangle17.png" alt="" className="w-[14px]" />
        <h1 className=" text-[16px] font-medium text-[#DB4444]">Categories</h1>
      </div>
      <div className="w-full flex justify-between items-center  ">
        <h2 className="text-[36px] font-semibold leading-8 mt-4  ">
          Browse By Category
        </h2>
        <div className="flex  gap-1 pr-14">
          <div className="flex justify-center items-center text-[16px] text-black  w-10 h-10 text-center bg-slate-600 font-semibold rounded-full ">
            {"<--"}
          </div>
          <div className="flex justify-center items-center text-[16px] text-black  w-10 h-10 text-center bg-slate-600 font-semibold  rounded-full ">
            {"-->"}
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-wrap">
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/Frame 604.png"}
          title={"Breed Dry Dog Food"}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/camera.png"}
          title={"CANON EOS DSLR Camera"}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/laptop.png"}
          title={"ASUS FHD Gaming Laptop"}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/cosmetic.png"}
          title={"Curology Product Set "}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/car.png"}
          title={"Kids Electric Car"}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/shoes.png"}
          title={"Jr. Zoom Soccer Cleats"}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/game.png"}
          title={"GP11 Shooter USB Gamepad"}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <ExploreProductsCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/jacket.png"}
          title={"Quilted Satin Jacket"}
          rating={"$100"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
      </div>
      <div className="felx justify-center items-center  mt-10">
        <button className="text-[16px] font-normal leading-6 text-[#ffff] bg-red-600 rounded border-[2px] w-[234px] h-[55px]">
          View All Products
        </button>
        </div>
    </div>
  );
}

export default ExploreProducts;
