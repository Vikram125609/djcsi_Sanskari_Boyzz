import React from "react";
import "../styles/report.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import report from "../assets/report.png"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"



function Report() {
  const location = useLocation();

  
  const[empid,setEmpId]=useState(location.state.emp_id)
  const [flag,setFlag] = useState(0);
  const [rating, setRating] = useState(2);
  const [hrId,setHrId]=useState(()=>{ 
    let data = JSON.parse(sessionStorage.getItem("HR-DATA"));
    console.log(data)
    return data._id;
  })
  const[review,setReview]=useState("");


  const submiHandler = async (e)=>{

    e.preventDefault();
    alert("hii");
    let data = await axios.post("http://localhost:3000/api/hr/v1/feedback",{employee_id:empid,flag:flag,hr_id:hrId,rating:rating,review:review});

    console.log(data);

  }






  return (
    <div className="report_container pt-20 pb-20">
      <div className="report_background w-[40%] mx-auto bg-slate-300 rounded-xl shadow-xl p-16">
        <div className="select_flag_container py-4">
          <p className="font-bold mb-3 text-lg">Please select the Flag:</p>
          <div className="flag_container flex ">
            <input type="radio" id="html" name="fav_language" value={0} onClick={(e)=>setFlag(0)} />{" "}
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
              value={1}
              onClick={(e)=>setFlag(1)}
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
            <input type="radio" id="css" name="fav_language" value={2} onClick={(e)=>setFlag(2)}/>{" "}
            <label for="css">
              <img
                src="https://img.icons8.com/ios-filled/100/D3E603/flag--v1.png"
                className="ml-3 w-8"
              />

            </label>
            <p className="pl-2">Lazy</p>
          </div>
        </div>

        <div className="select_flag_container py-4">
        <p className="font-bold mb-1 text-lg">Rating:</p>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>

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
              placeholder="Write a Feedback"
              required
              onChange={(e)=>setReview(e.target.value)}
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              onClick={submiHandler}
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
