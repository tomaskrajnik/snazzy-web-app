import React, { useEffect } from "react";
import * as eva from "eva-icons";
import "./Dashboard.scss";
import Campaign from "./Campaign.jsx";
import AlertDismissible from "../../../components/common/AlertDismissible/AlertDismissible";

import dashboardPreview1 from "../../../assets/images/dashboard-preview-1.png";
import dashboardPreview2 from "../../../assets/images/dashboard-preview-2.png";
import dashboardPreview3 from "../../../assets/images/dashboard-preview-3.png";

const Dashboard = () => {
  useEffect(() => {
    eva.replace({
      width: "18px",
      height: "18px",
    });
  });

  return (
    <div className="dashboard">
      <AlertDismissible
        title="Note: "
        text={`This is just a static prototype of the Dashboard. You can preview more in the clickable prototype\u00A0`}
        linkName=" here."
        linkTo="https://xd.adobe.com/view/b32d6a62-8011-45cf-5dd3-d7aa9d4db470-c51c/"
      />
      <div className="dashboard__header">
        <h1>My campaigns</h1>
        <div className="dashboard__header__view dashboard__header__view-active">
          <i data-eva="list-outline" data-eva-fill="#A7B4CC"></i>
        </div>
        <div className="dashboard__header__view">
          <i data-eva="grid-outline" data-eva-fill="#A7B4CC"></i>
        </div>
        <button className="dashboard__header__btn">
          {" "}
          <i data-eva="plus-circle-outline" data-eva-fill="#fff"></i>Create new
          campaign
        </button>
      </div>
      <div className="dashboard__campaigns">
        <Campaign
          name="Subscribe to newsletter"
          imgPath={dashboardPreview1}
          created="05 May 2020"
          published="www.mymonii.dk"
          leads="18"
          views="150"
          conversion="15.7"
          triggers="User clicks element"
        />
        <Campaign
          name="Info Popup"
          imgPath={dashboardPreview2}
          created="04 May 2020"
          published="www.mymonii.dk"
          leads="8"
          views="50"
          conversion="6.25"
          triggers="View triggers"
        />
        <Campaign
          name="Some other popup"
          imgPath={dashboardPreview3}
          created="01 May 2020"
          published="www.mymonii.dk"
          leads="25"
          views="100"
          conversion="4"
          triggers="User leaves site"
        />
      </div>
    </div>
  );
};

export default Dashboard;
