import React, { Component } from "react";
import "./TimeTrackingFeature.css";
import timeFeature from "../../../../Assets/Images/timeFeature.png";

class TimeTrackingFeature extends Component {
  render() {
    return (
      <section className="time-tracking-features">
        <div className="container">
          <h1 className="col-12 services-feature-title text-center">
            More time tracking features
          </h1>
          <div className="row justify-content-center">
            <div className="d-flex align-items-center col-xl-4 col-lg-3 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">Auto-Invoicing</span>
                  <p className="services-feature-para">
                    Your invoices are created automatically based on your time
                    sheets. Automatically. Yes. No need to manually create them.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Share Time Sheets
                  </span>
                  <p className="services-feature-para">
                    Easily share time sheets with client and keep them up to
                    date in real-time.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Invoice in your currency
                  </span>
                  <p className="services-feature-para">
                    Easily track your time by project and activity.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-5 text-center pt-5">
              <img
                src={timeFeature}
                alt="timeFeature"
                className="pro-feature-in"
              />
            </div>
            <div className="d-flex align-items-center col-xl-4 col-lg-4 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Multi-Device Tracking
                  </span>
                  <p className="services-feature-para">
                    Start tracking on your mobile phone, continue on your
                    desktop.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Group activities by anything
                  </span>
                  <p className="services-feature-para">
                    When you invoice, group your activities by day, activity or
                    don’t show them at all. You’re in control.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">Time Stats</span>
                  <p className="services-feature-para">
                    Get deeper insights into how you spend your time. (coming
                    soon)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TimeTrackingFeature;
