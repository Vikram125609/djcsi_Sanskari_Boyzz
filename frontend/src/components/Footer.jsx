import React from "react";
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div>
      <footer class="bg-white  shadow dark:bg-gray-900  mt-6">
        <div class="w-full max-w-screen-xl mx-auto py-2">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 "
            >
              <img
                src={logo}
                class="h-16 mr-3 rounded-xl"
                alt="Flowbite Logo"
              />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                HR Assist
              </span> */}
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/home" class="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="/enroll" class="mr-4 hover:underline md:mr-6 ">
                  Enroll Employee
                </a>
              </li>
              <li>
                <a href="/explore" class="mr-4 hover:underline md:mr-6">
                  Explore
                </a>
              </li>
              <li>
                <a href="/report" class="mr-4 hover:underline md:mr-6 ">
                  Report
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Sanskari Boyzzz
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
