import React, { Component } from "react";
import "./ReccuringPaymentsFeature.css";
import reccuringFeature from "../../../../Assets/Images/reccuringFeature.png";

class ReccuringPaymentsFeature extends Component {
  render() {
    return (
      <section className="reccuring-payments-features">
        <div className="container">
          <h1 className="col-12 services-feature-title text-center">
            More reccuring payments features
          </h1>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-10 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Get Paid Automatically
                  </span>
                  <p className="services-feature-para">
                    Collect your client's credit card upfront and automatically
                    charge them, based on your billing schedule and project
                    scope. No more late payments. No more chasing down clients.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Define your time-frame
                  </span>
                  <p className="services-feature-para">
                    You’re in full control over your service subscription. Just
                    set how often it should recur and when it should stop.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Automatically Filed For Tax Time
                  </span>
                  <p className="services-feature-para">
                    Your payments won’t be the only thing that’s automated. We
                    file all your transactions automatically as income.
                  </p>
                </li>
              </ul>
            </div>
            <div className="align-items-center col-xl-6 col-lg-6 col-md-10 text-xl-right text-lg-right text-center">
              <img
                src={reccuringFeature}
                alt="reccuringFeature"
                className="pro-feature-in"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReccuringPaymentsFeature;
