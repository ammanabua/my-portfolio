import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";



export default function About() {

    return (
        <section id="about" className="container-fluid flex items-center justify-center bg-white w-full md:mb-0 md:h-screen">
            <motion.div className="flex flex-col md:flex-row p-5 items-center justify-center md:h-3/4 md:w-4/5 mx-auto md:px-5 bg-card-bg"
                animate={{
                    
                }}>
                <div className="flex-col flex lg:flex-grow md:w-1/2 md:items-start md:text-left my-5 md:mb-0  items-center justify-between">
                    <h2 className="font-title text-4xl mb-5 text-card-heading">About Me</h2>
                    <p className="font-mont text-sm md:text-md lg:text-lg mb-5 leading-relaxed text-left w-full text-card-text tracking-wider">
                        Welcome to my digital playground! Crafting seamless digital experiences, one line of code at a time. Welcome to my world of creativity, where the backend is as smooth as the frontend!
                    </p>
                    
                </div>
                <div className="lg:max-w-lg md:w-1/2 w-full justify-center">
                    <img
                    className="m-auto object-cover object-center"
                    alt="Amman Abua"
                    src="./me.png"
                    />
                    <motion.div
                        className="flex justify-center my-8 gap-8"
                        >
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://github.com/ammanabua" style={{ height: 25, width: 25 }} target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://linkedin.com/in/amman-abua" style={{ height: 25, width: 25 }} className="" target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="#fbdd74" fgColor="#111827" url="https://twitter.com/ammanie_k" style={{ height: 25, width: 25 }} className="" target="_blank" rel="noopener noreferrer" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
      )
}