import React, { useEffect } from "react";
import "./Sidebar.scss";
import * as eva from "eva-icons";
import logoIcon from "../../../assets/images/snazzy-logo.svg";
import logoType from "../../../assets/images/snazzy-type.svg";

const Sidebar = () => {
  useEffect(() => {
    eva.replace({
      width: "20px",
      height: "20px",
    });
  });
  const buttons = [
    { name: "Dashboard", icon: "home-outline", href: "", active: true },
    { name: "People", icon: "people-outline", href: "" },
    { name: "Pricing", icon: "layers-outline", href: "" },
    { name: "Settings", icon: "settings-outline", href: "" },
    { name: "Discover", icon: "bulb-outline", href: "" },
    { name: "FAQ", icon: "question-mark-circle-outline", href: "" },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper-logo">
        <div className="sidebar__wrapper-logo-bg">
          <img src={logoIcon} alt="" className="sidebar__logo" />
        </div>
        <img src={logoType} alt="" className="sidebar__logo-type" />
      </div>
      <button className="sidebar__button sidebar__button__campaign">
        <i data-eva="plus-circle-outline" data-eva-fill="#fff"></i>Create new
        campaign
      </button>
      <div className="sidebar__buttons-wrapper">
        {buttons.map((b) => (
          <button
            className={
              "sidebar__button " + (b.active ? "sidebar__button-active" : "")
            }
            key={b.name}
          >
            <i data-eva={b.icon} data-eva-fill="#fff"></i>
            <span>{b.name}</span>
          </button>
        ))}

        <button className="sidebar__button sidebar__button__bottom">
          <i data-eva="star-outline" data-eva-fill="#fff"></i>Rate us
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
