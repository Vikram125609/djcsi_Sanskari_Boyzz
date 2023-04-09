import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import { useNavigate } from "react-router";
import "../styles/upload.css";
import ImageModal from "./ImageModal";
import axios from "axios"
import Swal from 'sweetalert2'
import Loader from "./Loader";
import background from "../assets/background.jpg"
import "../styles/enroll.css"


function Enroll() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [mounting, setMounting] = useState(true);

  const [emp_name, setEmpName] = useState('');
  const [gender, setGender] = useState('');
  const [emp_aadhar, setEmpAadhar] = useState();
  const [emp_pan, setEmpPan] = useState();
  const [emp_Image, setEmpImage] = useState();


  const [img_name, setImageName] = useState('');
  const [img, setImage] = useState();

  const [loading, setLoading] = useState(false);


  const handleVerify = async (e) => {
    e.preventDefault();

    let formdata = new FormData();

    formdata.append("aadhar", emp_aadhar);
    formdata.append("pancard", emp_pan);
    formdata.append("person", emp_Image);
    formdata.append("first_name", "Bhavesh");
    formdata.append("last_name", "Mali");
    formdata.append("address", "mumbai");
    formdata.append("working_status", "Yes");

    setLoading(true);
    try {
      const data = await axios.post('http://192.168.110.96:3000/api/employee/v1/verify', formdata);
      console.log(data);

      if (data.data.code === 200) {
        setLoading(false);
        Swal.fire({
          title: 'Verified Successfully! ',
          text: `${data.data.message}`,
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          // navigate("/login")
        })
      } else {
        setLoading(false);
        Swal.fire({
          title: 'Something went wrong! ',
          text: `${data.data.message}`,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    } catch (e) {

    }


  }








  return (
    <div style={{padding:"5rem 0"}}> 
    <div className="enroll_container bg-[#f8f8fb]  p-[30px] rounded-lg  drop-shadow-lg h-fit w-[40%] mx-auto">
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
          <div class="container h-[65%] flex align-middle justify-center content-center m-0">
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
          <div class=" h-fit">
            <p className="flex my-[10px] font-bold mt-[10px] mb-[5px]">Pan card image :</p>
            <div className=" image_upload items-center flex h-fit ">
              <input style={{ padding: "10px 0" }} type="file" onChange={(e) => setEmpPan(e.target.files[0])} />
              <i onClick={() => {
                setImage(emp_pan)
                setShowModal(true)
                setImageName("Pan Card")
              }} class="fa-solid fa-eye"></i>
            </div>

          </div>

          <div class="flex mb-4 h-fit ">
            <div class=" ">
              <p className="flex my-[10px] font-bold mt-[10px] mb-[5px]">Person's Facial Image :</p>
              <div className=" image_upload items-center flex  h-fit ">
                <input style={{ padding: "10px 0" }} type="file" onChange={(e) => setEmpImage(e.target.files[0])} />
                <i onClick={() => {
                  setImage(emp_Image)
                  setShowModal(true)
                  setImageName("Image")

                }} class="fa-solid fa-eye"></i>
              </div>

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
    </div>

  );
}

export default Enroll;
