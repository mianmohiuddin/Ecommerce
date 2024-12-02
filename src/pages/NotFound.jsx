import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-white mt-40'>
       <Link 
       to="/*">
        <h1 className='text-[110px] font-bold leading-10 text-black'>
          404 Not Found
        </h1>
        </Link>
        <h2 className='text-[16px] font-normal text-black mt-10'>Your visited page not found. You may go home page.</h2>
      <Link 
      to="/Home">
      <button className='w-[254px] h-[56px] text-[16px] text-white font-normal bg-red-700 mt-10'>Back to home pbage</button>
    </Link>
    </div>
  )

}

export default NotFound