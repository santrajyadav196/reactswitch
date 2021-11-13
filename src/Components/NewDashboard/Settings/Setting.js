import React, {useState} from "react";
import verticalThreeDot from "../../../Assets/assetsnew/three-dot-vertical.svg";

import Header from "../header/header";
import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";

import Business from "./Business/Business";
import Payment from "./Payments/Payment";
import Integration from "./Integrations/Integration";
import Notification from "./Notifications/Notification";
import Template from "./Templates/Template";
import AccountAndSecurity from "./AccountAndSecurity/AccountAndSecurity";

import "./Setting.css";

const Setting = () => {
  const [selector, setSelector] = useState("Business");

  const updateSelector = (value) => {
    setSelector(value);
  };

  const UiRender = () => {
    switch (selector) {
      case "Business":
        return (
          <>
            <Business />
          </>
        );
      case "Payments":
        return (
          <>
            <Payment />
          </>
        );
      case "Integrations":
        return (
          <>
            <Integration />
          </>
        );
      case "Notifications":
        return (
          <>
            <Notification />
          </>
        );
      case "Templates":
        return (
          <>
            <Template />
          </>
        );
      case "Account % Security":
        return (
          <>
            <AccountAndSecurity />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  return (
    <div>
      <div className='row'>
        <SideNavDrawer />
        <div className='col-lg-9 col-md-9 col-sm-9  bg'>
          <Header title={"Settings"}></Header>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='Setting-Slider-Rectangle'>
                  <div className='d-flex flex-row'>
                    <div
                      className={
                        selector === "Business"
                          ? "Setting-Bg-BColor-Selected"
                          : "Setting-Bg-BColor-Not-Selected"
                      }
                      onClick={() => {
                        updateSelector("Business");
                      }}>
                      Business
                    </div>
                    <div
                      className={
                        selector === "Payments"
                          ? "Setting-Bg-BColor-Selected"
                          : "Setting-Bg-BColor-Not-Selected"
                      }
                      onClick={() => {
                        updateSelector("Payments");
                      }}>
                      Payments
                    </div>
                    <div
                      className={
                        selector === "Integrations"
                          ? "Setting-Bg-BColor-Selected"
                          : "Setting-Bg-BColor-Not-Selected"
                      }
                      onClick={() => {
                        updateSelector("Integrations");
                      }}>
                      Integrations
                    </div>
                    <div
                      className={
                        selector === "Notifications"
                          ? "Setting-Bg-BColor-Selected"
                          : "Setting-Bg-BColor-Not-Selected"
                      }
                      onClick={() => {
                        updateSelector("Notifications");
                      }}>
                      Notifications
                    </div>
                    <div
                      className={
                        selector === "Templates"
                          ? "Setting-Bg-BColor-Selected"
                          : "Setting-Bg-BColor-Not-Selected"
                      }
                      onClick={() => {
                        updateSelector("Templates");
                      }}>
                      Templates
                    </div>
                    <div
                      className={
                        selector === "Account % Security"
                          ? "Setting-Bg-BColor-Selected"
                          : "Setting-Bg-BColor-Not-Selected"
                      }
                      onClick={() => {
                        updateSelector("Account % Security");
                      }}>
                      Account % Security
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='d-flex flex-row-reverse align-items-center Setting-ThreeDot'>
                  <img src={verticalThreeDot} alt='' />
                </div>
              </div>
            </div>
          </div>
          <UiRender />
        </div>
      </div>
    </div>
  );
};

export default Setting;
