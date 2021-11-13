import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import layer from "../../../../Assets/Images/layer.png";

class PaymentsTitle extends Component {
  render() {
    return (
      <div className="container-fluid back-service-img">
        <div className="row justify-content-center row-margin-t">
          <h1 className="col-xl-5 col-lg-5 col-md-6 px-5 pricing-title text-center">
            Accept Payments Online
          </h1>
        </div>
        <div className="row justify-content-center row-margin-b">
          <div className="col-xl-6 col-lg-6 col-md-8 px-5 text-center">
            <p className="pricing-desc">
              Accepting multiple forms of payments leads to faster payments.
              With AND.CO you’re able to accept all major credit cards.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-3 col-lg-3 col-md-4">
            <NavLink
              className="getStartedLink"
              style={{ textDecoration: "none" }}
              to="payments/getStarted"
            >
              <div className="getStarted-Btn text-center">
                Let’s Get Started
              </div>
            </NavLink>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-xl-5 col-lg-6 col-md-12 img-container text-center p-5">
            <img src={layer} alt="layer" className="paymentRem-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentsTitle;
