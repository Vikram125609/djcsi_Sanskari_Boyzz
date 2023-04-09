import React from "react";
import "../styles/upload.css";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "", open: false };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    if(this.props.setImage){
      this.props?.setImage(e.target.files[0])
    }
    

    if(this.props.setEmpAadhar){
      this?.props?.setEmpAadhar(e.target.files[0]);
    }

    // this?.props?.setEmpImage(e.target.files[0]);
    // this?.props?.setEmpAadhar(e.target.files[0]);
   

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
     let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img className=" w-[94%]" src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input
            className="fileInput w-[95%] bg-white rounded-xl border-2"
            type="file"
            onChange={(e) => this._handleImageChange(e)}
          />
          {/* <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
        </form>
      </div>
    );
  }
}
