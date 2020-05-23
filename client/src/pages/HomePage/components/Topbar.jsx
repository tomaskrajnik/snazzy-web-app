import React, { useEffect } from "react";
import * as eva from "eva-icons";
import "./Topbar.scss";
import notificationSVG from "../../../assets/images/notification.svg";
import accountIcon from "../../../assets/images/account.svg";
import logOutIcon from "../../../assets/images/log-out.svg";
import { Dropdown } from "react-bootstrap";

const Topbar = ({ onLogOut, user }) => {
  useEffect(() => {
    eva.replace({
      width: "10px",
    });
  });

  const initials = user.name
    .trim()
    .split(/\s(\w+)$/)
    .map((ch) => ch[0])
    .join("")
    .toUpperCase();

  return (
    <div className="topbar">
      <div className="topbar__workspaces">
        <div className="topbar__workspaces-main">
          MyMonii website campaigns{" "}
          <i data-eva="chevron-right-outline" data-eva-fill="#A7B4CC"></i>
        </div>
        <div className="topbar__workspaces-secondary">
          Premium Advertisement{" "}
          <i data-eva="chevron-down-outline" data-eva-fill="#A7B4CC"></i>
        </div>
      </div>
      <fieldset className="topbar__search-fieldset">
        <input
          type="text"
          className="topbar__search"
          placeholder="Search.."
        ></input>
        <span className="topbar__search-icon"></span>
      </fieldset>
      <div className="topbar__notification">
        <img src={notificationSVG} alt="" />
      </div>

      <Dropdown className="topbar__profile-btn">
        <Dropdown.Toggle id="dropdown-basic">
          <div style={{ width: "30px", height: "30px" }} className="avatar">
            {initials}
          </div>
          {user.name}
          <i data-eva="chevron-down-outline" data-eva-fill="#A7B4CC"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu className="topbar__profile-dropdown">
          <Dropdown.Item href="#/action-1">
            <img className="mr-2" src={accountIcon} alt="" /> Account Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3" onClick={onLogOut}>
            <img className="mr-2" src={logOutIcon} alt="" />
            Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Topbar;
