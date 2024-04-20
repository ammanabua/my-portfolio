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
    <section id="projects" className="text-gray-400 bg-card-bg body-font">
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
          <div className="">
            {projects.map((project, index) => (
              <motion.div key={project.image} className="flex justify-center w-full h-screen items-center rounded">
                <div className={`${index % 2 != 0 ? "order-2" : ""} w-1/2`}>
                  <img className="w-full" src={project.image} alt={project.title} />
                </div>
                <div className="flex flex-col w-1/2 bg-card-heading rounded">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="text-gray-700 text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.subtitle}</span>
                  </div>
                  <div className="mx-auto my-8">
                    <a className="bg-red-400 hover:bg-blue-700 text-white py-2 px-4 rounded" href={project.link} target="_blank" rel="noreferrer noopener">Demo</a>
                    <a className="bg-gray-500 hover:bg-blue-700 text-white py-2 px-4 rounded ml-4" href={project.github} target="_blank" rel="noreferrer noopener">GitHub</a>
                  </div>
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}

