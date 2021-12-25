import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { SocialIcon } from "react-social-icons";


export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-600">
            Things I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore a few of my projects here.
          </p>
        </div>
        
        <div className="container">
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.image} className="rounded overflow-hidden shadow-2xl">
                <img className="w-full" src={project.image} alt="Mountain" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-gray-700 text-base">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.subtitle}</span>
                </div>
                <div className="mx-auto mb-5">
                  <SocialIcon network="rss" fgColor="#fff" url={project.link} style={{ height: 25, width: 25 }} target="_blank" rel="noopener noreferrer" className="mr-3" />
                  <SocialIcon network="github" fgColor="#fff" url={project.github} style={{ height: 25, width: 25 }} target="_blank" rel="noopener noreferrer" />
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
