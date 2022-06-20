import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react/cjs/react.production.min";

export default function Navbar() {


  return (
    <header className="bg-gray-200 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#" className="ml-3 text-3xl">
            AA
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            Education
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div class="md:hidden flex items-center">
        <button class="outline-none mobile-menu-button">
          <svg
            class="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="hidden mobile-menu">
        <ul class="">
          <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
          <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Past Work</a></li>
          <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Skills</a></li>
          <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}