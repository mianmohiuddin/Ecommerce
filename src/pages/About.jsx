import React from 'react'
import Abouts from "../components/about/Abouts"
import Sections from '../components/about/Sections'
import Services from '../components/about/Services'
function About() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
        <Abouts />
        <Sections/>
        <Services />
        
    </div>
  )
}

export default About