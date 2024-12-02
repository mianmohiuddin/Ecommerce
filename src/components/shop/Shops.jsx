import React from 'react'
import ShopCard from './ShopCard'
function Shops() {
  return (
    <div className="w-[86%] flex flex-col items-center bg-white mt-24 pl-9">
      <div className="w-full flex  gap-3 ">
        <img src="images/Rectangle17.png" alt="" className="w-[14px]" />
        <h1 className=" text-[16px] font-medium text-[#DB4444] ">This Month</h1>
      </div>
      <div className="w-full flex justify-between items-center pr-16 ">
        <h2 className="text-[36px] font-semibold leading-8 mt-6  ">
          Best Selling Products
        </h2>
        <button className="w-[145px] h-[45px] text-[16pxs] text-white bg-[#DB4444] rounded-[4px] ">
          View All
        </button>
      </div>
      <div className="flex gap-5 pr-14">
      <ShopCard
       discount={"40%"} 
       heart={"images/icon2.png"}
       eye={"images/icon 1.png"}
       image={"images/coat.png"}
       title={"The north coat"}
       rating={"$20"}
       ratings={"$30"}
       star1={"images/star1.png"}
       star2={"images/star1.png"}
       star3={"images/star1.png"}
       star4={"images/star1.png"}
       star5={"images/star1.png"}
       />
       <ShopCard
       discount={"40%"} 
       heart={"images/icon2.png"}
       eye={"images/icon 1.png"}
       image={"images/bag.png"}
       title={"Gucci duffle bag"}
       rating={"$960"}
       ratings={"$1160"}
       star1={"images/star1.png"}
       star2={"images/star1.png"}
       star3={"images/star1.png"}
       star4={"images/star1.png"}
       star5={"images/star1.png"}
       />
       <ShopCard
       discount={"40%"} 
       heart={"images/icon2.png"}
       eye={"images/icon 1.png"}
       image={"images/speaker.png"}
       title={"RGB liquid CPU Cooler"}
       rating={"$160"}
       ratings={"$170"}
       star1={"images/star1.png"}
       star2={"images/star1.png"}
       star3={"images/star1.png"}
       star4={"images/star1.png"}
       star5={"images/star1.png"}
       />
       <ShopCard
       discount={"40%"} 
       heart={"images/icon2.png"}
       eye={"images/icon 1.png"}
       image={"images/table.png"}
       title={"Small BookSelf"}
       rating={"$360"}
       ratings={"$300"}
       star1={"images/star1.png"}
       star2={"images/star1.png"}
       star3={"images/star1.png"}
       star4={"images/star1.png"}
       star5={"images/star1.png"}/>
       </div>
    </div>
  )
}

export default Shops