import React, { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { init } from 'ityped';
import { motion } from "framer-motion";



export default function About() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, { 
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60, 
          strings: ['Web Developer', 'Designer', 'Content-creator', 'Ball Player'],
          typeSpeed: 100,
         })
    },[]);


    return (
        <section id="about">
            <div className="container-fluid flex flex-col md:flex-row h-screen mx-auto px-10 items-center bg-gray-200">
                <div className="flex flex-col lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0  items-center">
                    <h2>
                        Hi There <span className="text-3xl">👋🏿</span>, I'm
                        <br className="lg:inline-block" />
                    </h2>
                    <h1 className="title-font  sm:text-6xl mb-4 font-medium text-indigo-900">Amman</h1>
                    <h3 className="title-font text-2xl mb-4 font-medium"><span className="title-font text-yellow-600" ref={textRef}></span></h3>
                    <p className="mb-8 leading-relaxed text-center md:text-left sm:w-100 lg:w-3/4 text-gray-700">
                        I am a self-taught developer currently based in Abuja, Nigeria. I have a passion for writing clean and efficient code. I began my coding journey in 2019 and I am fluent in HTML, CSS, and skilled in JavaScript. I enjoy writing code to find creative solutions and help businesses increase their potential. I'm passionate about <span className="text-2xl font-medium text-from-yellow-800">Code</span>, <span className="text-2xl font-medium">Art</span>, <span className="text-2xl font-medium">Music</span> & <span className="text-2xl font-medium">Basketball</span>
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        Hire Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Portfolio
                        </a>
                    </div>
                    <motion.div
                        className="flex justify-center my-10">
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://github.com/ammanabua" style={{ height: 35, width: 35 }} target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://linkedin.com/in/amman-abua" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://twitter.com/ammanie_k" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                    </motion.div>
                </div>
                <div className="invisible md:visible lg:max-w-lg lg:w-full md:w-1/2 w-full">
                    <img
                    className="object-cover object-center rounded-full z-9"
                    alt="hero"
                    src="./me.png"
                     />
                </div>
            </div>
        </section>
      )
}