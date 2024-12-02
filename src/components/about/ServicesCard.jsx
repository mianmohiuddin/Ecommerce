import React from 'react'

function ServicesCard({image,title,discription}) {
  return (
    <div className='w-full flex flex-col justify-center items-center  bg-white mt-24'>
        <img
        src={image}
        alt="Service"
        className='w-[80px] h-[80px]'/>
        <div className='flex flex-col text-[#000000] mt-5'>
        <h1 className='text-[20px] font-semibold leading-7 text-center'>{title}</h1>
        <p className='text-[14px] font-normal leading-5 mt-2'>{discription}</p>
        </div>
       
    </div>
  )
}

export default ServicesCard