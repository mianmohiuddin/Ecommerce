import React, { useState } from 'react'
import { useRef } from 'react'
import { useMouseOverZoom } from '../components/useEffect/Hook'
function Hooks(selected) {
    const source = useRef(null);
    const target = useRef(null);
    const cursor = useRef(null);
   const [count,setCount]=useState("")
   const handleClick=(()=>
   {
    setCount(count)
   })
    // call the custom hook
    useMouseOverZoom(source, target, cursor);
  console.log(
    selected,"select img"
  )
    return (
      <div className="w-full bg-gradient-to-tr from-indigo-200 to-indigo-50 absolute top-20">
        <div className="">
        
          <div className="">
            <img ref={source} src="images/image 63.png" className="w-[420px] h-[320px] bg-gray-100 cursor-crosshair object-cover " />
            <div ref={cursor} className=" absolute pointer-events-none" />
            <canvas onclick={handleClick} ref={target} className="absolute pointer-events-none bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-y-0 md:translate-x-0 md:bottom-16 md:-left-48 border-8 border-blue-500 w-64 h-64 z-10 bg-gray-200" />{" "}
          </div>
        </div>
      </div>
    );
  }
  
  export default Hooks;
