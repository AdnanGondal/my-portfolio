import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-10 py-24">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 order-1 md:order-2">
          <div className="w-60 h-60 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-full">
            <img
              className="object-cover object-center w-full h-full"
              alt="an image of me"
              src="./me_casual.png"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center order-2 md:order-1 px-4 sm:px-0">
          <h1 className="title-font sm:text-4xl text-2xl mb-8 font-medium text-white">
            👋 Hello World!
          </h1>
          <p className="mb-6 leading-relaxed text-white text-l md:text-lg">
            My name is Adnan and I am a Software Engineer based in London. The
            aim of this website is to let the rest of the world know what I am
            up to! I will showcase my personal projects, professional
            experience and technical skills here.
          </p>
          <p className="mb-10 leading-relaxed text-white text-l md:text-lg">
            Feel free to get in touch with me if you would like to discuss
            anything you see here. Currently I am open to opportunities that
            involve open source contributions, hackathons and receiving and
            giving mentorship.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <a
              href="#experience"
              className="inline-flex text-center text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg mb-4 md:mb-0 md:mr-4"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="inline-flex text-center text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg mb-4 md:mb-0 md:mr-4"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


