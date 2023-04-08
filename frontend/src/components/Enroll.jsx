import React from "react";
import ImageUpload from "./ImageUpload";
import "../styles/upload.css";

function Enroll() {
  return (
    <div className="enroll_container bg-[#f8f8fb]  my-20  rounded-lg p-12 drop-shadow-lg h-fit w-[40%] mx-auto">
      <p className="text-center text-4xl mb-12 font-[cambria] font-semibold	">
        Enroll Employees
      </p>
      <div className="flex content-center flex-col h-fit justify-center">
        <div className="">
          <label
            for="4"
            className="block w-full pb-1 text-sm  transition-all duration-200 ease-in-out group-focus-within:text-blue-[400] my-[10px] font-bold"
          >
            Name :
          </label>
          <input
            placeholder="Enter Your full name"
            id="4"
            type="text"
            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-blue-[400] border-2"
          />
        </div>
        <div className="">
          <label
            for="4"
            className="block w-full pb-1 text-sm  transition-all duration-200 ease-in-out group-focus-within:text-blue-[400] my-[10px] font-bold"
          >
            Select Your Gender :
          </label>
          <div class="container h-[65%] flex align-middle justify-center content-center">
            <div class="select-wrapper w-full">
              <select class="select  peer h-10 w-full rounded-md bg-gray-50 px-8  font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-blue-[400] border-2">
                <option value="value1">Gender</option>
                <option value="value1">Male</option>
                <option value="value2">Female</option>
                <option value="value3">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div class=" ">
          <p className="flex my-[10px] font-bold">Aaddhar card image :</p>
          <div className=" image_upload flex  h-fit ">
            <ImageUpload />
          </div>
        </div>
        <div class=" h-fit">
          <p className="flex my-[10px] font-bold">Pan card image :</p>
          <div className=" image_upload flex h-fit ">
            <ImageUpload />
          </div>
        </div>

        <div class="flex mb-4 h-fit ">
          <div class=" ">
            <p className="flex my-[10px] font-bold">Person's Facial Image :</p>
            <div className=" image_upload flex  h-fit ">
              <ImageUpload />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button class="rounded-lg px-8 py-2 text-xl border-2  text-black-500 hover:bg-[#cba211] hover:shadow-2xl hover:text-white duration-300">
          Verify
        </button>
      </div>
    </div>
  );
}

export default Enroll;
