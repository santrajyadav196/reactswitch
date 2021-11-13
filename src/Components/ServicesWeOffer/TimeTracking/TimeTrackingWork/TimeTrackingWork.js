import React, { Component } from "react";
import "./TimeTrackingWork.css";
import dekstopApp from "../../../../Assets/Images/dekstopApp.png";
import timetrack from "../../../../Assets/Images/timetrack.png";
import billTime from "../../../../Assets/Images/billTime.png";
import sectionDividerLeft from "../../../../Assets/Images/sectionDividerLeft.png";
import sectionDividerRight from "../../../../Assets/Images/sectionDividerRight.png";

class TimeTrackingWork extends Component {
  render() {
    return (
      <section className="time-tracking-work">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="d-flex align-items-center col-xl-6 col-lg-6 p-5">
              <div>
                <span className="work-header">Bill your time</span>
                <p className="work-para">
                  AND.CO creates your invoices automatically based on your
                  tracked time. If you want to edit anything, select specific
                  time-frames or activities or even invoice a complete custom
                  amount of time, you can always do so via our super fast flow.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 p-5 text-center">
              <img src={billTime} alt="billTime" className="paymentRem" />
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-xl-7 col-lg-7 col-md-10 px-5">
              <img
                src={sectionDividerLeft}
                alt="sectionDividerLeft"
                className="video-img"
              />
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="col-xl-6 col-lg-6 p-5 text-center img-place">
              <img src={timetrack} alt="timetrack" className="video-img" />
            </div>
            <div className="d-flex align-items-center col-xl-6 col-lg-6 p-5">
              <div>
                <span className="work-header">
                  Catch up easily on your time sheets
                </span>
                <p className="work-para">
                  Time Sheets, bah. At least we made it easy! Always easily
                  catch up on your time sheets with our Time Tracking app. Your
                  activities are automatically saved, so you just have to select
                  them, tab your time and be done with it.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-10 px-5">
              <img
                src={sectionDividerRight}
                alt="sectionDividerRight"
                className="video-img"
              />
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="d-flex align-items-center col-xl-6 col-lg-6 p-5">
              <div>
                <span className="work-header">Desktop App</span>
                <p className="work-para">
                  Track time right from your Desktop, with AND.CO’s desktop app
                  for Mac. Or via any modern browser on the Web App.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 p-5 text-center">
              <img src={dekstopApp} alt="dekstopApp" className="video-img" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TimeTrackingWork;
