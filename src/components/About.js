import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-900">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Adnan.
            <br className="hidden inline-block" /> I am a curious and creative
            Engineer.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Hello and welcome to my website! I am currently a Software Engineer
            based in London. The aim of this website is to let the rest of
            the world know what I am up to! I will showcase my personal
            projects, professional experience and technical skills here. 
          </p>
          <p className="mb-8 leading-relaxed text-white">
            Feel free to get in touch with me if you would like to discuss
            anything you see here. Currently I am open to opportunities that
            involve open source contributions, hackathons and receiving and
            giving mentorship.
          </p>
          <div className="flex justify-center">
            <a
              href="#Experience"
              className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
            >
              See my Experience
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div> */}
      </div>
    </section>
  );
}
