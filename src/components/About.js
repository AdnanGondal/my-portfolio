import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-900">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-white">
            Hello World!
          </h1>
          <p className="mb-1 leading-relaxed text-white text-l">
            My name is Adnan and I am a Software Engineer
            based in London. The aim of this website is to let the rest of
            the world know what I am up to! I will showcase my personal
            projects, professional experience and technical skills here.
          </p>
          <p className="mb-8 leading-relaxed text-white text-l">
            Feel free to get in touch with me if you would like to discuss
            anything you see here. Currently I am open to opportunities that
            involve open source contributions, hackathons and receiving and
            giving mentorship.
          </p>
          <div className="flex justify-center">
            <a
              href="#experience"
              className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              Projects
            </a>
            {/* <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              Contact
            </a> */}
          </div>
        </div>
        <div className="md:max-w-md md:w-1/2 w-5/6">
          <div className="w-80 h-80 mx-auto mb-10 overflow-hidden rounded-full">
            <img
              className="object-cover object-center w-full h-full"
              alt="an image of me"
              src="./me_casual.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
