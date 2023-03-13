import React, { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";



export default function About() {



    return (
        <section id="about" className="container-fluid flex h-screen items-center bg-blue-200 w-full mb-10 md:mb-0">
            <motion.div className="flex flex-col md:flex-row p-5 items-center align-center md:h-3/4 md:w-3/4 mx-auto md:px-20 mx-20 bg-white"
                animate={{
                    
                }}>
                <div className="flex flex-col lg:flex-grow md:w-1/2 md:items-start md:text-left my-5 md:mb-0  items-center justify-between">
                    <h2 className="font-title text-3xl mb-5">About Me</h2>
                    <p className="font-mont text-sm lg:text-lg mb-5 leading-relaxed text-center md:text-left w-full lg:w-3/4 text-gray-700">
                        I am a web developer currently based in Abuja, Nigeria. I have a passion for writing clean and efficient code. I began my coding journey in 2019 and I am fluent with HTML, CSS, and skilled in JavaScript. I enjoy writing code to find creative solutions and help businesses increase their potential. I'm also passionate about <span className="text-xl font-medium">Art</span>, <span className="text-xl font-medium">Music</span> & <span className="text-xl font-medium">Basketball</span>
                    </p>
                    
                    <motion.div
                        className="flex justify-center my-3"
                        >
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://github.com/ammanabua" style={{ height: 35, width: 35 }} target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://linkedin.com/in/amman-abua" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://twitter.com/ammanie_k" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                    </motion.div>
                </div>
                <div className="flex lg:max-w-lg md:w-1/2 w-full bg-white">
                    <img
                    className="object-cover object-center rounded-full z-9 p-6"
                    alt="Amman Abua"
                    src="./me.png"
                    />
                </div>
            </motion.div>
        </section>
      )
}