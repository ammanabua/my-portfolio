import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { init } from 'ityped';

export default function Hero (){

  //Automatic Text Typing 

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 20, 
      strings: ['React Engineer', 'Web Developer', 'Amateur Artiste'],
      typeSpeed: 50,
      })
  },[]);

  return (
    <section id='home' className="flex flex-col md:flex-row md:h-screen md:py-4 items-center justify-center bg-black">
        <div className='md:w-1/2 flex md:justify-end z-0'>
          <img
            className="object-cover h-screen w-full"
            alt="Amman Abua"
            src="./profile-bg.jpg"/>
        </div>
      
      <div className='flex flex-col lg:flex-grow md:w-1/2 md:pl-12 lg:pl-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 md:justify-center'>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity:1 }} className="title-font font-mont font-bold text-6xl md:text-7xl mb-4 text-gray-600 uppercase">A<span className='text-red-700'>m</span>man<br/>Ab<span className='text-yellow-400'>u</span>a<span className='text-yellow-500'>.</span></motion.h1>
        <h3 className="title-font text-4xl lg:text-6xl mb-6 font-medium"><span className="title-font text-yellow-400" ref={textRef}></span></h3>

        <div className="flex gap-4 md:justify-start w-full">
          <button
          href="#contact"
          className="text-white bg-[#ff8906] border-2 border-white py-2 px-3 hover:bg-blue-200 hover:text-black rounded-3xl w-40 text-lg">
          Hire Me
          </button>
          <a
          href="/cv.pdf"
          className="text-white bg-[#ff8906] border-2 border-white py-2 px-3 hover:bg-blue-200 hover:text-black rounded-3xl w-40 text-lg">
          Resume
          </a>
        </div>
      </div>
      
        
    </section>
  )
}
