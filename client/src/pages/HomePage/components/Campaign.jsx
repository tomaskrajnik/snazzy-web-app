import React from "react";
import "./Campaign.scss";

const Campaign = (props) => {
  return (
    <div className="campaign">
      <img
        src={props.imgPath}
        className="campaign__image"
        alt="campaign image"
      ></img>
      <div className="campaign__content">
        <div className="campaign__icons">
          <i data-eva="eye-outline" data-eva-fill="#A7B4CC"></i>
          <i data-eva="code-outline" data-eva-fill="#A7B4CC"></i>
          <i data-eva="more-horizontal-outline" data-eva-fill="#A7B4CC"></i>
        </div>
        <h3>{props.name}</h3>
        <div className="campaign__data">
          <div className="campaign__chunk">
            <p className="campaign__chunk__label">CREATED</p>
            <p className="campaign__chunk__data">{props.created}</p>
          </div>
          <div className="campaign__chunk">
            <p className="campaign__chunk__label">PUBLISHED ON</p>
            <p className="campaign__chunk__data">{props.published}</p>
          </div>
          <div className="campaign__chunk">
            <p className="campaign__chunk__label">LEADS</p>
            <p className="campaign__chunk__data">{props.leads}</p>
          </div>
          <div className="campaign__chunk">
            <p className="campaign__chunk__label">VIEWS</p>
            <p className="campaign__chunk__data">{props.views}</p>
          </div>
          <div className="campaign__chunk">
            <p className="campaign__chunk__label">CONVERSION</p>
            <p className="campaign__chunk__data">{props.conversion}</p>
          </div>
          <div className="campaign__chunk">
            <p className="campaign__chunk__label">TRIGGERS</p>
            <p className="campaign__chunk__data">{props.triggers}</p>
          </div>
        </div>
      </div>
      <button className="campaign__btn">
        <i data-eva="edit-2-outline" data-eva-fill="#af3d70"></i>Edit campaign
      </button>
    </div>
  );
};

export default Campaign;
