import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import reccuringTitle from "../../../../Assets/Images/reccuringTitle.png";

class ReccuringPaymentsTitle extends Component {
  render() {
    return (
      <div className="container-fluid back-service-img">
        <div className="row justify-content-center row-margin-t">
          <h1 className="col-xl-5 col-lg-5 col-md-8 px-5 pricing-title text-center">
            Recurring Payments from clients
          </h1>
        </div>
        <div className="row justify-content-center row-margin-b">
          <div className="col-xl-5 col-lg-5 col-md-8 px-5 text-center">
            <p className="pricing-desc">
              Automatically charge your clients for your services. This is the
              easiest way to set up recurring payments.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-3 col-lg-3 col-md-4">
            <NavLink
              className="getStartedLink"
              style={{ textDecoration: "none" }}
              to="reccuring-payments/getStarted"
            >
              <div className="getStarted-Btn text-center">
                Let’s Get Started
              </div>
            </NavLink>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-xl-5 col-lg-6 col-md-12 img-container text-center p-5">
            <img
              src={reccuringTitle}
              alt="reccuringTitle"
              className="paymentRem-img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReccuringPaymentsTitle;
