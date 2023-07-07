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
      strings: ['Web Developer', 'Ball Player', 'Nature Lover'],
      typeSpeed: 50,
      })
  },[]);

  //Waving Hand Animation Component
  const WavingHand = () => {
  
    return (
      <motion.div
        style={{
          marginBottom: '-20px',
          marginRight: '-45px',
          paddingBottom: '20px',
          paddingRight: '45px',
          display: 'inline-block',
        }}
        animate={{ rotate: 20 }}
        transition={{
          yoyo: Infinity,
          from: 0,
          duration: 0.2,
          ease: 'easeInOut',
          type: 'tween',
        }}
      >
        👋🏿
      </motion.div>
    );
  };
  

  


  return (
    <section id='home' className="container-fluid flex flex-col md:flex-row h-auto mx-auto px-10 py-12 items-center bg-blue-100">
        <div>
          <img
            className="object-cover object-center rounded-full z-9"
            alt="Amman Abua"
            src="./avatar.png"/>
        </div>
      
      <div className='flex flex-col lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0  items-center'>
        <h2>
          Hi there, I'm
          <br className="lg:inline-block" />
        </h2>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity:1 }} className="title-font font-mont text-2xl md:text-5xl mb-4 text-blue-900">Amman</motion.h1>
        <h3 className="title-font text-3xl lg:text-6xl mb-6 font-medium"><span className="title-font text-yellow-600" ref={textRef}></span></h3>

        <div className="flex justify-center">
          <a
          href="#contact"
          className="text-white bg-blue-900 border-0 py-2 px-3 focus:outline-none hover:bg-blue-200 hover:text-black rounded text-lg">
          Hire Me
          </a>
          <a
          href="/cv.pdf"
          className="ml-4 text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          Resume
          </a>
        </div>
      </div>
      
        
    </section>
  )
}
