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
import ImageUploader from "./components/ImageUploader";



export default function App() {
  return (
    <main className="text-gray-900 bg-gray-700 body-font">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ImageUploader />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  )
}
