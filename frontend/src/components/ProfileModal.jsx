import React, { useEffect } from 'react'
import "../styles/profileModal.css"
import ProfileImageModal from "./ProfileImageModal"
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const ProfileModal = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(2);


  const location = useLocation();
  const [empID, setEmpId] = useState(location.state.data._id);
  console.log(empID);
  const [empData, setEmpData] = useState();

  const getEmpData = async () => {
    const data = await axios.get(`http://localhost:3000/api/employee/v1/employee/${empID}`);

    console.log(data.data.data.employee_data);
    setEmpData(data.data.data.employee_data)
  }

  useEffect(() => {
    getEmpData();
  }, [])

  const [showModal, setShowModal] = useState(false);
  return (
    <>

      <div style={{ display: "flex", flexDirection: "column", margin: "0 auto", padding: "5rem 0" }}>

        <div className="wrapper" style={{ margin: "0 auto", marginBottom: "15px" ,position:"relative"}}>
          <div className="left">
            <img src={empData?.image} alt="user" width="100" />
            <h4 style={{ margin: "10px 0" }}>{empData?.first_name + " " + empData?.last_name}</h4>
          </div>
          <div className="right">
          <button onClick={()=>navigate("/report",{state:{emp_id:empData._id}})} style={{ backgroundColor: "#cba211", padding: "10px", display:"inline",float:"right",borderRadius: "20px", color: "white",position:"absolute",right:"10px" ,top:"5px"}}>Report</button>
            <div className="info">
              <h3 style={{ margin: "0" }}>Information</h3>
              
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>{empData?.email}</p>
                </div>
                <div className="data">
                  <h4>Phone</h4>
                  <p>{empData?.contact}</p>
                </div>
              </div>
            </div>



            <div className="projects">
              <div className="projects_data">
                <div className="data">
                  <h4>Average Rating</h4>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Rating
                     name="read-only"
                     value={value}
                     readOnly
                    />
                
                  </Box>
                </div>
                {/* <div className="data">
                <h4>Most Viewed</h4>
                <p>dolor sit amet.</p>
              </div> */}
              </div>
            </div>



            <button onClick={() => setShowModal(true)} type="button" style={{ backgroundColor: "#cba211", padding: "15px", borderRadius: "20px", color: "white" }}>Available Documents</button>


            {/* <profileImageModal/> */}
          </div>
        </div>


        <h2 className="text-2xl font-semibold leading-tight w-[60%] text-left mx-auto" style={{ fontSize: "30px", fontFamily: "Cambria", fontWeight: "600", margin: "10px auto" }} >Flags</h2>
        <table className="w-[60%] leading-normal" style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                HR
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Flag
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Rating
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Review
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Molly Sanders
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">000004</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                <p className="text-gray-600 whitespace-no-wrap">USD</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">Paid</span>
                </span>
              </td>
              <td
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  className="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Molly Sanders
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">000004</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                <p className="text-gray-600 whitespace-no-wrap">USD</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span className="relative">Paid</span>
                </span>
              </td>
              <td
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  className="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>






      </div>


      {showModal &&
        <ProfileImageModal
          setShowModal={setShowModal}
          images = {{aadhar:empData.aadhar,pan:empData.pancard,image:empData.image}}
        />

      }


    </>

  )
}

export default ProfileModal
