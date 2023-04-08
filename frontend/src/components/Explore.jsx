import React from 'react'
import image from "../assets/example.jpg"
import "../styles/profileCard.css"
import { useNavigate } from 'react-router'
import ProfileModal from './ProfileModal'
import { useState } from 'react'


const Explore = () => {

    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [profileData, setProfileData] = useState(null)

    const navigate = useNavigate();

    return (
        <div style={{ padding: "5rem 0", width: "80%", margin: "0 auto" }}>

            <h2 className='Explore_Title' style={{ fontSize: "30px", fontFamily: "Cambria", fontWeight: "600", margin: "10px 0" }}>Current Employees</h2>

            <div className='' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr ", gap: "2rem" }}>
                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <p  className="btn btn-primary" onClick={() => navigate("/explore/profile")} >Know More</p>
                    </div>
                </div>

                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <p className="btn btn-primary" >Know More </p>
                    </div>
                </div>

                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <p className="btn btn-primary">Know More</p>
                    </div>
                </div>
                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <p className="btn btn-primary">Know More</p>
                    </div>
                </div>
            </div>

            <h3 className='viewAll_Text' style={{ textAlign: "right", width: "100%", fontSize: "20px", margin: "10px 0", paddingRight: "2.5rem", fontWeight: "600", fontFamily: "Cambria", textDecoration: "underline" }} onClick={() => navigate('/explore/all-employees', { state: { id: 1, name: 'Current' } })}> View all</h3>


            <h2 className='Explore_Title' style={{ fontSize: "30px", fontFamily: "Cambria", fontWeight: "600", margin: "10px 0" }}>Recommended Employees</h2>

            <div className='' style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr ", gap: "2rem" }}>
                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>

                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>

                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>
                <div className='profilecard'>
                    <div className='profileCard_ImageContainer'>
                        {/* <div className='profileCard_ImgDiv'> */}
                        <img style={{ borderRadius: "50%", height: "150px", width: "150px" }} src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Coding Yaar</h5>
                        <p className="card-text" style={{ fontSize: "16px", fontWeight: "500", fontFamily: "Cambria", margin: "5px 0" }}>Working At</p>
                        <p className="card-text" style={{ margin: "5px 0" }}>Branch Name</p>
                        <p className="card-text"><i className="fa fa-flag" aria-hidden="true"></i></p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>
            </div>

            <h3 className='viewAll_Text' style={{ textAlign: "right", width: "100%", fontSize: "20px", margin: "10px 0", paddingRight: "2.5rem", fontWeight: "600", fontFamily: "Cambria", textDecoration: "underline" }} onClick={() => navigate('/explore/all-employees', { state: { id: 1, name: 'Recommended' } })}> View all</h3>

            {openProfileModal &&
                <ProfileModal
                    data={profileData}
                    setOpenProfileModal={setOpenProfileModal}
                />
            }


        </div>

    )
}

export default Explore
