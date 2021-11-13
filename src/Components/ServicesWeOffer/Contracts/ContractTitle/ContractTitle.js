import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import proposalVid from "../../../../Assets/Images/proposalVid.png";

class ContractTitle extends Component {
  render() {
    return (
      <div className="container-fluid back-service-img">
        <div className="row justify-content-center row-margin-t">
          <h1 className="col-xl-6 col-lg-7 col-md-8 px-5 pricing-title text-center">
            The Freelance Contract for our customers
          </h1>
        </div>
        <div className="row justify-content-center row-margin-b">
          <div className="col-xl-5 col-lg-6 col-md-8 px-5 text-center">
            <p className="pricing-desc">
              We’ve partnered with the Freelancers Union to create an advanced
              contract that builds secure, mutual, fair relationships. And yeah,
              we also built a bunch of smart technology around it.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-3 col-lg-3 col-md-4">
            <NavLink
              className="getStartedLink"
              style={{ textDecoration: "none" }}
              to="contracts/getStarted"
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
              src={proposalVid}
              alt="proposalVid"
              className="paymentRem-img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContractTitle;
