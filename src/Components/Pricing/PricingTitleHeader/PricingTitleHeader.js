import React, { Component } from "react";
import "./PricingTitleHeader.css";

class PricingTitleHeader extends Component {
  render() {
    return (
      <div className="container-fluid back-img">
        <div className="row justify-content-center row-margin-t">
          <h1 className="col-xl-5 col-lg-7 col-md-8 px-5 pricing-title text-center">
            Pricing
          </h1>
        </div>
        <div className="row justify-content-center row-padding-b">
          <div className="col-xl-4 col-lg-6 col-md-7 col-sm-9 col-xs-10 px-5 text-center">
            <p className="pricing-desc">
              Semper lacus cursus porta, feugiat primis ultrice ligula and
              auctor rhoncus purus ipsum primis in vitae
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingTitleHeader;
