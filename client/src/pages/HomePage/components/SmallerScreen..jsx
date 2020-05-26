import React from "react";
import "./SmallerScreen.scss";
import logoIcon from "../../../assets/images/snazzy-logo.svg";
import logoType from "../../../assets/images/snazzy-type.svg";
import { Button } from "react-bootstrap";
const SmallerScreen = ({ user, onLogOut }) => {
  const name = user.name.trim().split(/\s(\w+)$/)[0];

  return (
    <div className="smaller-screen">
      <div className="top-bar">
        <div className="sidebar__wrapper-logo">
          <div className="sidebar__wrapper-logo-bg">
            <img src={logoIcon} alt="" className="sidebar__logo" />
          </div>
          <img
            src={logoType}
            alt=""
            style={{ width: "70px" }}
            className="sidebar__logo-type"
          />
        </div>
      </div>
      <h1>
        Hello <span>{name}!</span>
      </h1>
      <p className="mt-4">
        Unfortunately, our app curently does't support previewing, editing or
        pulishing campaings from mobile or tablet devices.
      </p>
      <p>If you are on desktop, try to resize the window.</p>
      <Button onClick={onLogOut} className="log-out-smaller-screen">
        Log out
      </Button>
    </div>
  );
};

export default SmallerScreen;
