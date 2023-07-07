import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog"
import Testimonials from "./components/Testimonials";



export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  )
}
