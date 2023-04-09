import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/profileCard.css"
import { useLocation } from 'react-router-dom';
import axios from "axios"
const AllEmp = () => {
    const navigate = useNavigate();
    const location = useLocation();
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

    console.log(location.state)


    return (
        <div style={{ padding: "5rem 0", width: "80%", margin: "0 auto" }}>


            <h2 className='Explore_Title' style={{ fontSize: "30px", fontFamily: "Cambria", fontWeight: "600", margin: "10px 0" }}>{location?.state?.name == "Current" ? "Current Employees" : "Recommended Employees"}</h2>

            <div className='' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr ", gap: "2rem" }}>
                {location?.state?.name == "Current" ? (
                    allEmp?.map((emp, index) => {
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
                    })
                ) : (
                    Recommended?.map((emp, index) => {
                        return <div className='profilecard'>
                            <div className='profileCard_ImageContainer'>
                                <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src={emp.employee_id.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: "18px" }}>{emp.employee_id.first_name + " " + emp.employee_id.last_name}</h5>
                                <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                                <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                                <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                                <button href="#" className="btn btn-primary" onClick={() => navigate("/explore/profile", { state: { data: emp } })} >Know More</button>
                            </div>
                        </div>

                    })
                )
                }
            </div>
        </div>
    )
}

export default AllEmp
