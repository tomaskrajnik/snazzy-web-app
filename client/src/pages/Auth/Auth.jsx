import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import { Col } from "react-bootstrap";
import { PropTypes } from "prop-types";

import "./Auth.scss";
import logoPrimaryCol from "./../../assets/images/snazzy_logo_auth.svg";
import logoSecondaryCol from "./../../assets/images/snazzy_logo_auth-secondary.svg";

const Auth = ({ token, saveToken }) => {
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
        <a href="https://snazzy-17dd09.webflow.io/">
          <img
            onMouseEnter={changeToLogoColor}
            onMouseLeave={changeToLogoSecondaryColor}
            src={logoPrimaryCol}
            style={{ width: "130px", height: "48px" }}
            alt="logo"
          ></img>
        </a>
      </Col>
      <Switch>
        <Route path="/auth/register">
          <Register token={token} saveToken={saveToken} />
        </Route>
        <Route path="/auth/log-in">
          <LogIn token={token} saveToken={saveToken} />
        </Route>
        <Route path="/auth/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/auth/reset/:token">
          <ResetPassword />
        </Route>
      </Switch>
      <Col className="backtoSnazzy text-center flex-grow-0 mt-auto mb-4">
        <a href="https://snazzy-17dd09.webflow.io/">snazzy.com</a>
      </Col>
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  saveToken: PropTypes.func,
};

export default Auth;
