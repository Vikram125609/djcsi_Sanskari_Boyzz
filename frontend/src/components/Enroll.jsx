import React from 'react'
import ImageUpload from './ImageUpload';

function Enroll() {
  return (
    <div className='flex content-center'>
        <div className="image_upload flex justify-center bg-black">
            <ImageUpload/>
        </div>
        <div className="aadhar_details_container flex">
            image upload
        </div>
        <div className="pan_details_container flex">
            image upload
        </div>
    </div>
  )
}

export default Enroll;