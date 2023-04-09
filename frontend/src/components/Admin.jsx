import React, { useEffect } from "react";
import image from "../assets/example.jpg";
import "../styles/profileCard.css";
import { useNavigate } from "react-router";
import UnverifiedUserProfile from "./UnverifiedUserProfile";
import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [unvEmp, setUnvEmp] = useState();
  const navigate = useNavigate();


  const getUnvEmp = async () => {
    let data = await axios.get("http://192.168.110.96:3000/api/admin/v1/unverifiedUser");
    console.log(data.data.data.data);
    setUnvEmp(data.data.data.data)
  }


  useEffect(() => {
    getUnvEmp();
  }, [])

  return (
    <div style={{ margin: "1rem auto", width: "80%" }}>
      <h2
        className="Explore_Title"
        style={{
          fontSize: "35px",
          fontFamily: "Cambria",
          letterSpacing: "2px",
          textAlign: "center",
          fontWeight: "600",
          textDecoration: "underline"
        }}
      >
        Unverified Users
      </h2>
      <p className=" mb-5 text-center text-[18px] ">Verify User by visiting their profile</p>
      <div
        className="rounded-lg"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr ",
          gap: "2rem",
        }}
      >
        {unvEmp?.map((emp, index) => {
          return <>
          {index < 4 &&
              <div className='profilecard'>
                  <div className='profileCard_ImageContainer'>
                      {/* <div className='profileCard_ImgDiv'> */}
                      <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src={emp?.image} alt="" />
                      {/* </div> */}
                  </div>
                  <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: "18px" }}>{emp.first_name + " "+emp.last_name}</h5>
                      <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                      <p className="card-text" style={{ margin: "5px 0" }}>{emp?.workinAt}</p>
                      <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                      <button className="btn btn-primary" onClick={() => navigate("/admin/profile",{ state: { data:emp} })} >Know More</button>
                  </div>
              </div>
          }
      </>


        })}

      </div>
      <h3
        className="viewAll_Text"
        style={{
          textAlign: "right",
          width: "100%",
          fontSize: "20px",
          margin: "10px 0",
          paddingRight: "2.5rem",
          fontWeight: "600",
          fontFamily: "Cambria",
          textDecoration: "underline",
        }}
        onClick={() =>
          navigate("/admin/all-unverified", {
            state: { id: 1, name: "Current" },
          })
        }
      >
        {" "}
        View all
      </h3>
    </div>


  );
};

export default Admin;
