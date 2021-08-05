import { AcademicCapIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Explore my academic qualifications
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {education.map((education) => (
            <a
              href={education.link}
              key={education.image}
              className="sm:w-1/2 w-100 p-4" 
              rel="noopener"
              target="_blank">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={education.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {education.degree}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {education.course}
                  </h1>
                  <p className="leading-relaxed">{education.school}, {education.year}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        </div>
    </section>
  );
}