import React, { useEffect } from 'react'
import image from "../assets/example.jpg"
import "../styles/profileCard.css"
import { useNavigate } from 'react-router'
import ProfileModal from './ProfileModal'
import { useState } from 'react'
import axios from "axios"


const Explore = () => {

    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [profileData, setProfileData] = useState(null)

    const [allEmp, setAllEmp] = useState();

    const [Recommended, setRecommended] = useState();


    const getCurrentEmployees = async () => {
        const data = await axios.get("http://localhost:3000/api/employee/v1/allEmployee");

        if (data) {
            console.log(data.data.data);
            setAllEmp(data?.data?.data?.employee)
        }
        console.log(allEmp);
    }

    const getRecommendedEmployess = async () => {
        const data = await axios.get("http://localhost:3000/api/employee/v1/recommendedEmployee");

        if (data) {
            console.log(data.data);
            setRecommended(data?.data?.data?.recommendedEmployee)
        }

    }

    useEffect(() => {
        console.log(allEmp)
        console.log(Recommended)
    }, [allEmp])

    useEffect(() => {
        getCurrentEmployees();

        getRecommendedEmployess();


    }, [])

    const navigate = useNavigate();

    return (
        <div style={{ padding: "5rem 0", width: "80%", margin: "0 auto" }}>
            <div style={{ width: "100%" }}>

                <h2 className='Explore_Title' style={{ fontSize: "30px", fontFamily: "Cambria", fontWeight: "600", margin: "10px 0" }}>Current Employees</h2>

                <div className='' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr ", gap: "2rem" }}>

                    {allEmp?.map((emp, index) => {
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
                                        <button className="btn btn-primary" onClick={() => navigate("/explore/profile",{ state: { data:emp} })} >Know More</button>
                                    </div>
                                </div>
                            }
                        </>

                    })}


                </div>
                <h3 className='viewAll_Text' style={{ textAlign: "right", width: "100%", fontSize: "20px", margin: "10px 0", paddingRight: "2.5rem", fontWeight: "600", fontFamily: "Cambria", textDecoration: "underline" }} onClick={() => navigate('/explore/all-employees', { state: { id: 1, name: 'Current' } })}> View all</h3>



            
                    <h2 className='Explore_Title' style={{ fontSize: "30px", fontFamily: "Cambria", fontWeight: "600", margin: "10px 0" }}>Recommended Employees</h2>
                    <div className='' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr ", gap: "2rem" }}>
                        {Recommended?.map((emp, index) => {
                            return <div className='profilecard'>
                                    <div className='profileCard_ImageContainer'>
                                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src={emp.employee_id.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "18px" }}>{emp.employee_id.first_name +" " +emp.employee_id.last_name}</h5>
                                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                                        <button href="#" className="btn btn-primary" onClick={() => navigate("/explore/profile",{ state: { data:emp} })}>Know More</button>
                                    </div>
                                </div>
                        })}
                    </div>


                    <h3 className='viewAll_Text' style={{ textAlign: "right", width: "100%", fontSize: "20px", margin: "10px 0", paddingRight: "2.5rem", fontWeight: "600", fontFamily: "Cambria", textDecoration: "underline" }} onClick={() => navigate('/explore/all-employees', { state: { id: 1, name: 'Recommended' } })}> View all</h3>

                    {openProfileModal &&
                        <ProfileModal
                            data={profileData}
                            setOpenProfileModal={setOpenProfileModal}
                        />
                    }


            </div>
        </div>

    )
}

export default Explore
