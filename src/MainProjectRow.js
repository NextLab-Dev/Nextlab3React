import React from 'react'
const projectVideo = require("./img/landingVideo.mp4");

const MainProjectRow = () => {
    return (
        <div className="container-fluid g-0 codeRowContainer">
            <div className="row justify-content-center">
                <div className="col-9 col-sm-7 col-md-5 col-lg-4 mainProjectStyle">
                    <h2 className="mb-3">Our Main Project:</h2>
                    <p className="mb-2"><i className="bi bi-check2-circle"></i> A Platform-as-a-Service (PaaS)</p>
                    <p className="mb-2"><i className="bi bi-check2-circle"></i> Code name "User Village"</p>
                    <p className="mb-2"><i className="bi bi-check2-circle"></i> For incentivize the collective power</p>
                    <p className="mb-2"><i className="bi bi-check2-circle"></i> It will offer tools to engage customers, employees and communities</p>
                </div>
                <div className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 mainProjectImgContainer">
                    <video src={projectVideo} autoPlay loop playsInline muted></video>    
                </div>
            </div>
        </div>
    )
}

export default MainProjectRow;
