import { CodeIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import { projects } from "../data";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";


export default function Projects() {

  const scrollRef = useRef(null);

  projects.map((project, index) => (
    console.log(index)
  ))
  

  return (
    <section id="projects" className="text-gray-400 bg-gray-700 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-600">
            Things I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore a few of my projects here.
          </p>
        </div>
        
        <div className="container w-full">
            {projects.map((project, index) => (
              <motion.div key={project.image} className="flex flex-col md:flex-row justify-center items-center w-full text-center my-20">
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""} lg:w-1/2`}>
                  <img className="w-full" src={project.image} alt={project.title} />
                </div>
                <div className="lg:w-1/2 text-white flex flex-col justify-center items-center">
                  <div className="lg:w-2/3">
                    <div className="py-4">
                      <div className="font-bold text-4xl mb-2">{project.title}</div>
                      <p className="text-base">
                        {project.description}
                      </p>
                    </div>
                    <div className="pt-4 pb-2 flex gap-8 justify-center items-center">
                      {project.tools.map((tool) => (
                        <div key={tool.title} className="">
                          <img className="w-8" src={tool.image} alt={tool.title} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex my-8">
                    <a className="bg-yellow-400 text-black py-2 px-4 rounded" href={project.link} target="_blank" rel="noreferrer noopener">
                      Live
                    </a>
                    {!project.github ? "" : 
                    <a className="bg-gray-500 hover:bg-blue-700 text-white py-2 px-4 rounded ml-4" href={project.github} target="_blank" rel="noreferrer noopener">GitHub</a>
                    }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}

