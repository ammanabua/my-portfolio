import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { init } from 'ityped';

export default function Hero (){

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  //Automatic Text Typing 

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 30,
      strings: ['Software Engineer', 'Web Developer', 'Creative'],
      typeSpeed: 60,
      })
  },[]);

  return (
    <section id='home' className="flex flex-col md:flex-row h-screen md:py-4 items-center justify-center bg-black">
        <motion.div initial={{ opacity: 0, x: -600 }} animate={{ opacity: 1, x: 0}} transition={{ duration: 1 }} className='md:w-1/2 flex md:justify-end z-0'>
          <img
            className="m-auto object-cover w-3/4 h-96 md:h-screen md:w-full border border-2 md:border-none border-white rounded md:rounded-none"
            alt="Amman Abua"
            src="./profile-bg.jpg"/>
        </motion.div>
      
      <div className='flex flex-col items-center lg:flex-grow md:w-1/2 md:pl-12 lg:pl-24 md:items-start md:text-left mb-16 md:mb-0 md:justify-end'>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ duration: 1 }} className="title-font font-mont font-bold text-4xl md:text-7xl mb-4 text-gray-600 uppercase">A<span className='text-blue-600'>m</span>man<br/>Ab<span className='text-yellow-400'>u</span>a<span className='text-yellow-500'>.</span></motion.h1>
        <motion.h3 initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="title-font text-2xl md:text-4xl mb-6 font-thin"><span className="title-font text-white" ref={textRef}></span></motion.h3>
        <motion.div initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className="flex gap-4 md:justify-start w-full">
          <button
          onClick={() => scrollToSection("contact")}
          className="text-white bg-[#ff8906] border-2 border-white py-2 px-3 hover:border-opacity-0 hover:bg-blue-200 hover:text-black rounded-md w-24 md:w-40 text-lg">
          Hire Me
          </button>
          <a
          href="/cv.pdf" target="_blank"
          className="text-black text-center bg-yellow-400 py-2 px-3 hover:bg-blue-200 rounded-md w-24 md:w-40 text-lg">
          Resume
          </a>
        </motion.div>
      </div>
      
        
    </section>
  )
}
