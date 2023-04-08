import React from "react";
import "../styles/report.css";

function Report() {
  return (
    <div className="report_container pt-20">
      <div className="report_background w-[40%] mx-auto bg-slate-300 rounded-xl shadow-xl p-16">
        <div className="aadhar_details flex flex-col justify-center p-4">
          <label className="font-bold">
            Enter Aaddhar Number of Your Employee :
          </label>
          <input
            type="number"
            class="shadow-sm border-gray-300 rounded-lg m-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 w-[90%]"
            placeholder="Enter Aaddhar number"
            className="h-9 rounded-lg my-3"
          ></input>
        </div>
        <div className="select_flag_container p-5">
          <p className="font-bold mb-5 text-lg">Please select the Flag:</p>
          <div className="flag_container flex ">
            <input type="radio" id="html" name="fav_language" value="red" />{" "}
            <label for="html">
              <img
                src="https://img.icons8.com/ios-filled/100/F30303/flag--v1.png"
                className="ml-3 w-8"
              />
            </label>
            <p className="pl-2">
              Criminal Activities , Criminal Background , Theft
            </p>
          </div>
          <br />
          <div className="flag_container flex">
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="orange"
            />
            <label for="javascript">
              <img
                src="https://img.icons8.com/ios-filled/100/FF6200/flag--v1.png"
                className="ml-3 w-8"
              />
            </label>
            <p className="pl-2">Improper Behavioural Issues</p>
          </div>
          <br />
          <div className="flag_container flex">
            <input type="radio" id="css" name="fav_language" value="yellow" />{" "}
            <label for="css">
              <img
                src="https://img.icons8.com/ios-filled/100/D3E603/flag--v1.png"
                className="ml-3 w-8"
              />
              
            </label>
            <p className="pl-2">Lazy</p>
          </div>
        </div>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a Feedback Note in detail..."
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post Feedback report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
