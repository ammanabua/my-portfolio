import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-blue-700 md:sticky top-0 z-10 opacity-90">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        
        <div>
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#" className="ml-3 text-4xl justify-left">
              A<span className="text-yellow-400">k</span><span className="text-red-300">.</span>
            </a>
          </a>
        </div>
        <div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <div className="hidden md:block">
              <a href="#projects" className="mr-5 hover:text-white">
                Past Work
              </a>
              <a href="#skills" className="mr-5 hover:text-white">
                Skills
              </a>
              <a href="#education" className="mr-5 hover:text-white">
                Education
              </a>
              <a href="#blog" className="mr-5 hover:text-white">
                Blog
              </a>
              <a href="#contact" className="mr-5 hover:text-white">
                Contact
              </a>
            </div>
            
          </nav>
        </div>
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
