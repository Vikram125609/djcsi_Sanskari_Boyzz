import React from 'react'

import { useEffect,useState } from 'react';

const ProfileImageModal = (props) => {

    const [imgsrc,setImgSrc]=useState(props.images.aadhar);


    return (
        <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full " >
            {/* <div class="relative w-full h-full max-w-2xl md:h-auto" style={{position:"absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        margin:"auto"}}> */}
            <div  style={{
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
                margin: "auto",
                width:"70%",
                minHeight:"70%",
                maxHeight:"fit-content",
                background:"#dedede",
                borderRadius:"20px",
                boxShadow:"0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)"
            

            }} >

                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600" style={{flexDirection:"column"}}>
                         <button onClick={()=>props.setShowModal(false)} type="button" style={{position:"absolute",right:"10px",top:"10px"}}>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <h3 style={{ fontSize: "30px", fontFamily: "Cambria", fontWeight: "600", margin: "10px 0" }}>
                        Documents
                    </h3>

                    <div style={{display:"flex"}}>
                    <button onClick={()=>setImgSrc(props.images.aadhar)}  style={{ backgroundColor: "#cba211",width:"80px", padding: "10px", borderRadius: "20px", color: "white" ,marginRight:"10px"}}>
                       Aadhar
                       </button>
                    <button onClick={()=>setImgSrc(props.images.pan)} style={{ backgroundColor: "#cba211",width:"80px", padding: "10px", borderRadius: "20px", color: "white",marginRight:"10px" }} >
                       Pan
                    </button>
                    < button onClick={()=>setImgSrc(props.images.image)} style={{ backgroundColor: "#cba211",width:"80px", padding: "10px", borderRadius: "20px", color: "white",marginRight:"10px" }}>
                       Photo
                    </button>
                    </div>

             

                    
                </div>
                <div style={{padding:"15px",maxWidth:"100%",maxHeight:"100%"}} >
                        <img  style={{maxWidth:"60%", margin:"0 auto",}}src={imgsrc} alt="" />
                </div>


            </div>
            {/* </div> */}
        </div>

    )
}

export default ProfileImageModal
