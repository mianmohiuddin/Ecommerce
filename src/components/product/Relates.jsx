import React from "react";
import RelatesCard from "./RelatesCard";
function Relates() {
  return (
    <div className="w-[86%] flex flex-col justify-center items-center mt-14">
      <div className="w-full flex gap-4 pl-8">
        <img src="images/Rectangle17.png" alt="" className="w-[14px] " />
        <h1 className=" text-[16px] font-medium text-[#DB4444]">
          Related Item
        </h1>
      </div>
      <div className="flex gap-8 pl-4">
        <RelatesCard
         discount={"40%"}
         heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/product.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          ratings={"$128"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />

        <RelatesCard
         discount={"40%"}
         heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/prdouctlcd.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          ratings={"$128"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <RelatesCard
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/speaker.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          ratings={"$128"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
        <RelatesCard
          discount={"40%"}
          heart={"images/icon2.png"}
          eye={"images/icon 1.png"}
          image={"images/productkey.png"}
          title={"HAVIT HV-G92 Gamepad"}
          rating={"$120"}
          ratings={"$128"}
          star1={"images/star1.png"}
          star2={"images/star2.png"}
          star3={"images/star3.png"}
          star4={"images/star4.png"}
          star5={"images/star5.png"}
        />
      </div>
    </div>
  );
}

export default Relates;
