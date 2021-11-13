import React, {useState} from "react";

import verticalThreeDot from "../../../Assets/assetsnew/three-dot-vertical.svg";

import "./TimeTrackingTimer.css";

import TimeTrackingTimerOne from "./TimeTrackingTimerOne";
import TimeTrackingWeeklyView from "./WeeklyView/TimeTrackingWeeklyView";
import TimeTrackingReports from "./Reports/TimeTrackingReports";

import Header from "../header/header";

import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";

const TimeTrackingTimer = () => {
  const [postionTopSelector, setPostionTopSelector] = useState("Timer");

  const UiRender = () => {
    switch (postionTopSelector) {
      case "Timer":
        return <TimeTrackingTimerOne />;
      case "Week View":
        return <TimeTrackingWeeklyView />;
      case "Reports":
        return (
          <>
            <TimeTrackingReports />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  const updateTopSelector = (value) => {
    setPostionTopSelector(value);
  };

  return (
    <div>
      <div className='row'>
        <SideNavDrawer />
        <div className='col-lg-9 col-md-9 col-sm-9  bg'>
          <Header title={"Time Tracking"}></Header>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <div className='TimeTrackingTimer-Rectangle'>
                  <div className='d-flex flex-row'>
                    <div
                      className={
                        postionTopSelector === "Timer"
                          ? "TimeTrackingTimer-Bg-BrandColor"
                          : "TimeTrackingTimer-Bg-Not-Selected"
                      }
                      onClick={() => {
                        updateTopSelector("Timer");
                      }}>
                      Timer
                    </div>
                    <div
                      className={
                        postionTopSelector === "Week View"
                          ? "TimeTrackingTimer-Bg-BrandColor"
                          : "TimeTrackingTimer-Bg-Not-Selected"
                      }
                      onClick={() => {
                        updateTopSelector("Week View");
                      }}>
                      Week View
                    </div>
                    <div
                      className={
                        postionTopSelector === "Reports"
                          ? "TimeTrackingTimer-Bg-BrandColor"
                          : "TimeTrackingTimer-Bg-Not-Selected"
                      }
                      onClick={() => {
                        updateTopSelector("Reports");
                      }}>
                      Reports
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='d-flex flex-row-reverse TimeTrackingTimer-ThreeDot'>
                  <img src={verticalThreeDot} alt='' />
                </div>
              </div>
            </div>
            <UiRender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackingTimer;
