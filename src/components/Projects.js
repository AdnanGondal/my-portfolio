import { CodeIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import { practiceProjects, professionalProjects } from "../data";



export default function Projects() {
  const projectContainerClass = "sm:w-1/2 w-full p-4 h-300";

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 pb-0 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-12">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Professional Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are some projects that I have worked on professionally as a part of multi-disciplinary agile teams.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {professionalProjects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className={projectContainerClass}
            >
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-12">
          <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Practice Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are some projects I have worked on to learn new things and improve my skills.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {practiceProjects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className={projectContainerClass}
            >
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
