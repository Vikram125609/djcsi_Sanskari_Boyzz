import React from "react";

const HomeSub = ({ title, desc, btntxt, imgSrc, align ,path}) => {
  return (
    <>
        {(align === true) && <div className="flex flex-row justify-center items-center text-center min-w-[80%] mb-7 mt-7 bg-gray-100 rounded-lg p-8 mx-14">
        
      <div className="img_container flex-[2] flex items-center justify-center">
        <img src={imgSrc} class="p-2 my-4 rounded-lg h-[400px] aspect-auto"></img>
      </div>
      <div className="data_container flex-[3] flex flex-col items-center ">
        <h1 class="mb-4 text-4xl font-bold leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-black tracking-wide">
          {title}
        </h1>
        <p class=" text-lg font-normal text-gray-500 lg:text-xl px-4 dark:text-gray-600 mb-14">
          {desc}
        </p>
        <a
          href={path}
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mb-8 hover:shadow-2xl"
        >
          {btntxt}
          <svg
            class="w-5 h-5 ml-2 -mr-1 font-bold"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
}
{(align !== true) && <div className="flex flex-row-reverse justify-center items-center text-center min-w-[80%] mb-7 mt-7 bg-gray-100 rounded-lg p-8 mx-14">
        
        <div className="img_container flex-[2] flex items-center justify-center">
          <img src={imgSrc} class="p-2 my-4 rounded-lg h-[400px] aspect-auto"></img>
        </div>
        <div className="data_container flex-[3] flex flex-col items-center ">
          <h1 class="mb-4 text-4xl font-bold leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-black tracking-wide">
            {title}
          </h1>
          <p class=" text-lg font-normal text-gray-500 lg:text-xl px-4 dark:text-gray-600 mb-14">
            {desc}
          </p>
          <a
            href={path}
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mb-8 hover:shadow-2xl"
          >
            {btntxt}
            <svg
              class="w-5 h-5 ml-2 -mr-1 font-bold"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
  }
    </>
 
  );
};

export default HomeSub;