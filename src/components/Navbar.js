import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className=" top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium  mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-3xl">
            Adnan Gondal
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experience" className="mr-5 hover:underline">
            Experience
          </a>
          <a href="#projects" className="mr-5 hover:underline">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:underline">
            Skills
          </a>
        </nav>
        <img
          href="#contact"
          src="./MyLogo.png"
          className="inline-flex items-center h-20 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
        ></img>
      </div>
    </header>
  );
}
