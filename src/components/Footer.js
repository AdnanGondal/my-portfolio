import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const ICON_SIZE = 36;
  return (
    <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700 bg-gray-900 flex flex-col">
      <div class="container mx-auto pt-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-row justify-center">
            <div class="flex flex-col mx-4">
              <a href="https://www.linkedin.com/in/adnan-gondal-2021/">
                <span class="font-bold text-white uppercase mb-2 cursor-pointer">
                  <FaLinkedin size={ICON_SIZE} />
                </span>{" "}
              </a>
              {/* <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span> */}
            </div>

            <div class="flex flex-col mx-4">
              <a href="https://github.com/AdnanGondal">
                {" "}
                <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2 cursor-pointer">
                  <FaGithubSquare size={ICON_SIZE}></FaGithubSquare>
                </span>
              </a>

              {/* <span class="my-2">
                <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                  link 1
                </a>
              </span> */}
            </div>
            <div class="flex flex-col mx-4">
              <a href="mailto:adnangondal1@hotmail.com">
                <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2 cursor-pointer">
                  <MdEmail size={ICON_SIZE}></MdEmail>
                </span>
              </a>

              {/* <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-white font-bold mb-2">
              © 2024 by Adnan Gondal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
