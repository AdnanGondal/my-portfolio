import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font  mb-12">
          Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((experience) => (
            <div className="p-4  w-full">
              <div className="h-full border-2 border-gray-800 border-opacity-100 p-8 rounded">
                <div className="inline-flex items-center">
                  {/* <img
                    alt="testimonial"
                    src={experience.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium ">
                      {experience.role}
                    </span>
                    <span className="text-gray-900 text-sm uppercase">
                      {`${experience.company}, ${experience.location}`}
                    </span>
                    <span className=" text-sm uppercase">
                      {experience.dates}
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-center text-left">
                  <ul className="list-disc">
                    {experience.descriptions.map((bullet) => {
                      return <li>{bullet}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
