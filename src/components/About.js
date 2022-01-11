import React, { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { init } from 'ityped';


export default function About() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, { 
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60, 
          strings: ['Web Developer', 'Designer', 'Content-creator', 'Basketballer'],
          typeSpeed: 100,
         })
    },[]);


    return (
        <section id="about">
            <div className="container mx-auto flex px-10 my-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2>
                        Hi There, I'm
                        <br className="lg:inline-block" />
                    </h2>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Amman Abua</h1>
                    <h3 className="title-font text-2xl mb-4 font-medium"><span className="title-font text-yellow-600" ref={textRef}></span></h3>
                    <p className="mb-8 leading-relaxed">
                        Web developer with a passion for writing clean and efficient code; bringing ideas to life.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        Hire Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Portfolio
                        </a>
                    </div>
                    <div className="flex justify-center my-10">
                        <SocialIcon bgColor="grey" fgColor="#111827" url="https://github.com/ammanabua" style={{ height: 35, width: 35 }} target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="grey" fgColor="#111827" url="https://linkedin.com/in/amman-abua" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                        <SocialIcon bgColor="grey" fgColor="#111827" url="https://twitter.com/ammanie_k" style={{ height: 35, width: 35 }} className="ml-10" target="_blank" rel="noopener noreferrer" />
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded-full"
                    alt="hero"
                    src="./me.png"
                     />
                </div>
            </div>
        </section>
      )
}