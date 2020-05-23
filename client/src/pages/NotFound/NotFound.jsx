import React from "react";
import { Col } from "react-bootstrap";

import "./../Auth/Auth.scss";
import logoPrimaryCol from "./../../assets/images/snazzy_logo_auth.svg";
import logoSecondaryCol from "./../../assets/images/snazzy_logo_auth-secondary.svg";

const NotFound = () => {
  function changeToLogoColor({ target: logo }) {
    logo.src = logoSecondaryCol;
  }
  function changeToLogoSecondaryColor({ target: logo }) {
    logo.src = logoPrimaryCol;
  }
  return (
    <div className="auth d-flex flex-column pb-5">
      <div className="auth__background-image"></div>
      <Col className="text-center flex-grow-0 auth-snazzy-logo">
        <a href="#">
          <img
            onMouseEnter={changeToLogoColor}
            onMouseLeave={changeToLogoSecondaryColor}
            src={logoPrimaryCol}
            style={{ width: "130px", height: "48px" }}
            alt="logo"
          ></img>
        </a>
      </Col>
      <Col className="not-found-block" style={{ marginTop: "150px" }}>
        <div>
          <h1>
            404. <span>That's an error.</span>
          </h1>
          <p>The requested URL does not exist or has been moved.</p>
        </div>
      </Col>
      <Col className="backtoSnazzy text-center flex-grow-0 mt-auto mb-4">
        <a href="#">snazzy.com</a>
      </Col>
    </div>
  );
};

export default NotFound;
