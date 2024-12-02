import React from 'react'
import WishListCard from './WishListCard'
const WishLists = () => {
  return (
    <div className="w-[86%] flex flex-col items-center bg-white mt-20 pl-6 ">
      <div className="w-full flex justify-between items-center pr-12">
        <h2 className="text-[36px] font-semibold leading-8 mt-4 pl-2">
          Wishlist (4)
        </h2>
        <button className="w-[223px] h-[56px] text-center border text-[16px] text-black bg-white rounded ">
          Move All To Bag
        </button>
      </div>

     
      <div className='flex flex-wrap  gap-6 pr-6'>
      <WishListCard 
      discount={"38%"}
      image={"images/icon6.png"}
      image1={"images/bag.png"}
      button={"Add to cart"}
      title={"Gucci duffle bag"}
      rating={"$960"}
      ratings={"$1160"}/>
      <WishListCard 
      discount={"38%"}
      image={"images/icon6.png"}
      image1={"images/speaker.png"}
      button={"Add to cart"}
      title={"RGB liquid CPU Cooler"}
      rating={"$960"}
      />
      <WishListCard 
      discount={"38%"}
      image={"images/icon6.png"}
      image1={"images/bag.png"}
      button={"Add to cart"}
      title={"Gucci duffle bag"}
      rating={"$960"}
      ratings={"$1160"}/>
     <WishListCard 
      discount={"38%"}
      image={"images/icon6.png"}
      image1={"images/game.png"}
      button={"GP11 Shooter USB Gamepad"}
      title={"Gucci duffle bag"}
      rating={"$960"}
      />
      
    

      </div>
      <div className="w-full flex justify-between items-center pr-10">
      <div className="w-full flex  gap-3 pl-3">
        <img src="images/Rectangle17.png" alt="" className="w-[14px] mt-20 " />
        <h2 className="text-[20px] font-medium leading-8 mt-20 ">
        Just For You
        </h2>
      </div>
       
        <button className="w-[223px] h-[56px] text-center border text-[16px] text-black bg-white rounded mt-20">
          Move All To Bag
        </button>
      </div>
      
      <div className='flex flex-wrap  gap-6 pr-6'>
      <WishListCard 
      discount={"38%"}
      image={"images/icon 1.png"}
      image1={"images/shoes.png"}
      button={"Add to cart"}
      title={"Quilted Satin Jacket"}
      rating={"$960"}
      />
      <WishListCard 
      discount={"38%"}
      image={"images/icon 1.png"}
      image1={"images/jacket.png"}
      button={"Add to cart"}
      title={"ASUS FHD Gaming Laptop"}
      rating={"$960"}
      />
      <WishListCard 
      discount={"38%"}
      image={"images/icon 1.png"}
      image1={"images/prdouctlcd.png"}
      button={"Add to cart"}
      title={"IPS LCD Gaming Monitor"}
      rating={"$960"}
      />
      <WishListCard 
      discount={"38%"}
      image={"images/icon 1.png"}
      image1={"images/product.png"}
      button={"Add to cart"}
      title={"HAVIT HV-G92 Gamepad"}
      rating={"$960"}
      />
      </div>
    </div>
    
  )
}

export default WishLists