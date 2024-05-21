import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skillsData } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I am a full-stack developer with a wealth of professional and project experience.
            I am well-versed in the modern JavaScript landscape, using technologies such as TypeScript, React, and Tailwind to create impactful user experiences. Additionally, I have built cloud-native microservices using Java Spring Boot and other associated technologies.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div key={skill.name} className="bg-gray-800 rounded overflow-hidden flex flex-col justify-center items-center p-4 w-44 h-44">
                <div className="mb-3">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16"
                  />
                </div>
                <span className="title-font font-medium text-white text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
