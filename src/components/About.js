import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";



export default function About() {

    return (
        <section id="about" className="container-fluid flex items-center justify-center bg-white w-full md:mb-0 md:h-screen">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row p-4 items-center justify-center md:w-5/6 md:px-8 bg-card-bg rounded">
                <div className="flex-col flex lg:flex-grow md:w-1/2 md:items-start md:text-left my-5 md:mb-0  items-center">
                    <h2 className="font-title text-4xl mb-5 text-card-heading">About Me</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a passionate full-stack developer with 5+ years of experience crafting digital solutions 
                            that bridge the gap between complex technical requirements and intuitive user experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                            My journey began with curiosity about how websites work, and it evolved into a deep love 
                            for building scalable, performant applications that solve real-world problems. I thrive in 
                            collaborative environments where innovation meets practicality.
                        </p>
                    </div>
                    
                </div>
                <div className="md:w-1/2 w-full justify-center">
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