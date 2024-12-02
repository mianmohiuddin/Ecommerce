import { useState } from "react";
import { PiCarProfileBold } from "react-icons/pi";
import Hooks from "../../pages/Hooks";
const Images = [
  {
    name: "image1",
    imageURL: "images/Frame8.png",
  },
  {
    name: "image2",
    imageURL: "images/Frame8.png",
  },
  {
    name: "image3",
    imageURL: "images/Frame8.png",
  },
  {
    name: "image4",
    imageURL: "images/car.png",
  },
];

function ImageSlider() {
  
  const [selected, setSelected] = useState(null);
  const [selectedSize,setSelectedSize]=useState(null)
  const [quantity,setQuantity]=useState(1)

  const handleSizeClick=(size)=>{
    setSelectedSize(size)
  }
  const incrementQuantity=()=>{
    setQuantity((prevQuantity)=>prevQuantity+1)
  }
  const decrementQuantity=()=>{
    if(quantity>1) setQuantity(quantity-1)
  }
  return (
    <div className=" mt-16 w-[86%] grid  grid-cols-12 gap-6">
      <div className="col-span-3 w-[150px] ">
        {Images.map((item, index) => (
          <div key={index} className=" mt-2">
            <img
              src={item.imageURL}
              alt={item.name}
               className={`w-200 h-140 cursor-pointer transition-all duration-300 ${selected?.name===item.name ? "scale-105":""}hover:scale-110`}

              onClick={() => setSelected(item)}
            />
          </div>
        ))}
      </div>

      <div className="col-span-5 bg-[#F5F5F5F5] border border-red-900">
     
        <div className="relative h-[480px] flex justify-center items-center border-2 border-red-500">
        <Hooks/> 
          {selected ? (
           
            <img
              src={selected.imageURL}
              alt={selected.name}
              className=" h-[480px]"
            />
          ) : (
            <img
              // src="images/image 63.png"
              alt=""
              className="w-[420px] h-[320px]"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col col-span-4 p-4">
        <h1 className="text-[24px] font-bold leading-6 text-black">
          Havic HV G-92 Gamepad
        </h1>
        <div className="flex items-center text-sm font-normal leading-4 text-yellow-300 gap-1.5 mt-4">
          <img
            src="images/star2.png"
            alt="star"
            className="w-[15px] object-cover"
          />
          <img
            src="images/star1.png"
            alt="star"
            className="w-[15px] object-cover"
          />
          <img
            src="images/star2.png"
            alt="star"
            className="w-[15px] object-cover"
          />
          <img
            src="images/star3.png"
            alt="star"
            className="w-[15px] object-cover"
          />
          <img
            src="images/star4.png"
            alt="star"
            className="w-[15px] object-cover"
          />
          <p className="text-[16px] font-normal text-[#000000] ">
            (150 Reviews)
          </p>
          |<p className="text-[16px] font-normal text-green-500">In Stock</p>
        </div>
        <p className="text-[24px] font-normal text-black leading-6 mt-3">
          $192.00
        </p>
        <p className="text-[14px] font-normal text-black mt-10">
          PlayStation 5 Controller Skin High quality vinyl with air
          <br /> channel adhesive for easy bubble free install & mess free
          removal Pressure sensitive.
        </p>
        <div className="w-full border text-white mt-8"></div>
        <div className="flex gap-4 mt-4">
          <h1 className="text-[20px] font-normal text-black "> Colours :</h1>
          <img
            src="images/icon5.png"
            alt=""
            className="w-[20px] h-[20px] mt-1"
          />
          <img
            src="images/icon5.png"
            alt=""
            className="w-[20px] h-[20px] mt-1"
          />
        </div>
        <div className="flex gap-3 mt-2">
          <h1 className="text-[20px] font-normal text-black "> Size :</h1>
          <div className="flex gap-3 items-center text-center">
          {["XS", "S", "M", "L", "XL"].map((size) => (
              <div
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`w-[32px] h-[32px] text-[14px] cursor-pointer ${
                  selectedSize === size ? "bg-red-600 text-white" : "bg-white text-black"
                } font-medium border rounded flex items-center justify-center`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="flex  gap-4">
          <div className="w-[159px] h-[40px] border mt-4 flex items-center">
            <h1 onClick={decrementQuantity} className=" w-[35px] h-[40px] border text-[20px]  font-bold p-1">
              −
            </h1>
            <h2  className="w-[80px] h-full  text-[20px] text-center border font-medium text-black">
              {quantity}
            </h2>
            <h3 onClick={incrementQuantity} className="w-[42px] h-full text-[20px]  text-center border bg-red-600 font-medium text-black">
              +
            </h3>
          </div>
          <button className="w-[140px] h-[40px] text-[16px] text-white bg-red-600 font-normal border mt-4">
            BUY NOW
          </button>
        </div>
        <div className="w-[360px] h-[190px] flex flex-col mt-6 border gap-3 p-4">
          <div className="flex  gap-3">
            <p className="mt-3"><PiCarProfileBold size={25} /></p>
             <div className="">
              <h4 className="text-[16px] font-medium text-black ">
                Free Delivery
              </h4>
              <p className="text-[12px] font-normal text-black">
                Enter your postal code for Delivery Availability
              </p>
              <div className="w-full border mt-8"></div>
            </div>
          </div>
          <div className="flex  gap-3">
            <p className="mt-3"><PiCarProfileBold size={25} /></p>
             <div className="">
              <h4 className="text-[16px] font-medium text-black ">
                Free Delivery
              </h4>
              <p className="text-[12px] font-normal text-black">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
