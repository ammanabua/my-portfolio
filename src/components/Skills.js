import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-amber-200 text-gray-400">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-gray-600">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some tools I employ to bring my projects to life.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.image} className="p-2 w-full">
              <div className="mx-auto mb-5 flex align-center justify-center" style={{height: "5rem"}}>
                <img src={skill.image} alt={skill.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}