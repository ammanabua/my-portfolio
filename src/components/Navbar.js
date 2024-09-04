import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Modal, Box, Typography } from "@mui/material";


export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("");
  const sectionRefs = useRef([]);

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <header className="bg-transparent md:fixed w-full top-0 z-50">
      <div className="container mx-auto flex p-5 items-center justify-between">
        
        <div>
            <button onClick={() => scrollToSection("home")} className="ml-3 text-5xl justify-left title-font font-medium text-white mb-4 md:mb-0">
              <span className="text-blue-600">A</span><span className="text-yellow-400">k</span><span className="text-red-300">.</span>
            </button>
        </div>
        <div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex items-center text-white justify-center">
            <div className="hidden md:block">
              <a className={`${activeLink === "home" ? "active" : ""} ${"mr-5 hover:text-yellow-400"} cursor-pointer`} onClick={() => scrollToSection("home")}>
                Home
              </a>
              <a className={`${activeLink === "about" ? "active" : ""} ${"mr-5 hover:text-yellow-400"} cursor-pointer`} onClick={() => scrollToSection("about")}>
                About
              </a>
              <a className={`${activeLink === "projects" ? "active" : ""} ${"mr-5 hover:text-yellow-400"} cursor-pointer`} onClick={() => scrollToSection("projects")}>
                Past Work
              </a>
              <a className={`${activeLink === "skills" ? "active" : ""} ${"mr-5 hover:text-yellow-400"} cursor-pointer`} onClick={() => scrollToSection("skills")}>
                Skills
              </a>
              {/*<a className={`${activeLink === "blog" ? "active" : ""} ${"mr-5 hover:text-yellow-400"} cursor-pointer`} onClick={() => scrollToSection("blog")}>*/}
              {/*  Blog*/}
              {/*</a>*/}
              <a className={`${activeLink === "contact" ? "active" : ""} ${"mr-5 hover:text-yellow-400"} cursor-pointer`} onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </div>
            
          </nav>
        </div>
        <div class="md:hidden">
          <button class="outline-none mobile-menu-button" onClick={handleOpen}>
            <svg
              class="w-8 h-8 text-white"
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
      </div>
      
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box className="absolute w-full h-screen bg-white px-12 py-4">
                <Box className="flex justify-between items-center">
                    <a href='/' onClick={handleClose}>
  
                    </a>
                    <Typography className="text-center" onClick={handleClose}>
                        X
                    </Typography>
                </Box>
                <ul className="bg-transparent pt-36 font-rubik text-3xl font-light">
                    <a href="#home" className="block px-2 py-4" onClick={handleClose}>Home</a>
                    <a href="#about" className="block px-2 py-4 hover:underline" onClick={handleClose}>About</a>
                    <a href="#projects" className="block px-2 py-4 hover:underline" onClick={handleClose}>Past Work</a>
                    <a href="#skills" className="block px-2 py-4 hover:underline" onClick={handleClose}>Skills</a>
                    <a className="block px-2 py-4 hover:underline" onClick={handleClose}>Contact</a>
                </ul>
            </Box>
            </Modal>
    </header>
  );
}
