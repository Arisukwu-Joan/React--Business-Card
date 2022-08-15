import React from "react";
// import jane from "../image/jane.png";

function Info() {
  return (
    <>
      <div className="info">
        {/* <img src={jane} alt="img" className="info-img" /> */}
        <div>
          <h3>Michelle Williams </h3>
          <h4 className="dev">Frontend Developer</h4>
          <h5>Williams.website</h5>
        </div>
        <div className="button">
          <button type="Email" className="mail">
            <i class="fa-solid fa-envelope-open-text"></i> Email
          </button>
          <button type="linkedin" className="kedin">
            <i class="fa-brands fa-linkedin-in"></i>Linkedin
          </button>
        </div>
      </div>
    </>
  );
}

export default Info;
