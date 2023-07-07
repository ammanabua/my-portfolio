import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";



export default function About() {



    return (
        <section id="about" className="container-fluid md:flex justify-center bg-blue-200 w-full md:mb-0">
            <motion.div className="flex flex-col md:flex-row p-5 items-center align-center md:h-3/4 md:w-3/4 mx-auto md:px-20 mx-20 bg-white"
                animate={{
                    
                }}>
                <div className="flex-col flex lg:flex-grow md:w-1/2 md:items-start md:text-left my-5 md:mb-0  items-center justify-between">
                    <h2 className="font-title text-3xl mb-5">About Me</h2>
                    <p className="font-mont text-md lg:text-lg mb-5 leading-relaxed text-center md:text-left w-3/4 lg:w-full text-gray-700 tracking-wider">
                        Welcome to my digital playground! I'm a passionate web developer who thrives on crafting innovative software solutions. When I'm not immersed in lines of code, you'll find me grooving to the rhythm of my favorite tunes or shooting hoops on the basketball court. Join me on this exciting journey as I merge creativity, technology, and a love for the game into captivating digital experiences. Let's build something extraordinary together!
                    </p>
                    
                </div>
                <div className="lg:max-w-lg md:w-1/2 w-full bg-white justify-center">
                    <img
                    className="m-auto object-cover object-center rounded-full z-9 p-6"
                    alt="Amman Abua"
                    src="./me.png"
                    />
                    <motion.div
                        className="flex justify-center my-3"
                        >
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://github.com/ammanabua" style={{ height: 35, width: 35 }} target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://linkedin.com/in/amman-abua" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://twitter.com/ammanie_k" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
      )
}