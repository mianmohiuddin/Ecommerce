import React from 'react'
import MyForm from '../components/input/MyForm'
import { Link } from 'react-router-dom'
function InputField() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
    <Link 
    to="/Check">
      <MyForm/>
      </Link>
    </div>
  )
}

export default InputField