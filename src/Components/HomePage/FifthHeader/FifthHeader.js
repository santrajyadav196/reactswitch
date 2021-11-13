import React, { Component } from "react";
import "./FifthHeader.css";
import pricingBar from "../../../Assets/Images/pricingBar.png";
import footerPlan from "../../../Assets/Images/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class FifthHeader extends Component {
  state = {
    monthly: true,
    yearly: false,
  };

  handlerMonthly = () => {
    this.setState((prevState) => ({
      monthly: !prevState.monthly,
      yearly: false,
    }));
  };

  handlerYearly = () => {
    this.setState((prevState) => ({
      yearly: !prevState.yearly,
      monthly: false,
    }));
  };

  render() {
    const monthlySpan = this.state.monthly
      ? "Pricing-switch-monthly is-active"
      : "Pricing-switch-monthly ";
    const yearlySpan = this.state.yearly
      ? "Pricing-switch-annually is-active"
      : "Pricing-switch-annually";

    return (
      <section className="membership app-container">
        <div className="costing-membership">
          <h2 className="spanHeading headerAlign">
            No Additional Costs. Pay For What You Use.
          </h2>
          <p className="paraDesc">
            Choose the most suitable service for your needs with reasonable
            price.
          </p>
          <div className="container-btn">
            <button className="Pricing-switch">
              <span className={monthlySpan} onClick={this.handlerMonthly}>
                Monthly
              </span>
              <span className={yearlySpan} onClick={this.handlerYearly}>
                Annually <div>Save 25%</div>
              </span>
            </button>
          </div>
        </div>
        <div className="tilesFeatures">
          <div className="monthlySub">
            <img
              src={pricingBar}
              alt="pricingBar"
              className="Rectangle-11-copy-2"
            />
            <div className="monthlyFree">FREE</div>
            <div className="monthlyFee">$0 /month</div>
            <div className="monthlyPlan">
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  size="2x"
                  color="#324168"
                />
                <span className="noHassleFont">1 Client</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  size="2x"
                  color="#324168"
                />
                <span className="noHassleFont">And.Co Branding</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  size="2x"
                  color="#324168"
                />
                <span className="noHassleFont">Standard Contracts</span>
              </div>
            </div>
            <img src={footerPlan} alt="footerPlan" className="footerPlan" />
            <NavLink
              className="startNowLink"
              style={{ textDecoration: "none" }}
              to="/startFree"
            >
              <div className="startNow-Btn">Start Now</div>
            </NavLink>
          </div>
          <div className="yearlySub">
            <img
              src={pricingBar}
              alt="pricingBar"
              className="Rectangle-11-copy-2"
            />
            <div className="monthlyFree">PRO</div>
            <div className="monthlyFee">
              {this.state.yearly ? "$20 /month" : "$24 /month"}
            </div>
            {this.state.yearly ? (
              <div className="paidAnually">Paid Anually</div>
            ) : null}
            <div className="yearlyPlan">
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  size="2x"
                  color="#324168"
                />
                <span className="noHassleFont">Unlimited Client</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  size="2x"
                  color="#324168"
                />
                <span className="noHassleFont">Remove And.Co Branding</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  size="2x"
                  color="#324168"
                />
                <span className="noHassleFont">Editable Contracts</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  size="2x"
                  color="#324168"
                />
                <span className="noHassleFont">
                  Award-winning priority support
                </span>
              </div>
            </div>
            <img
              src={footerPlan}
              alt="footerPlan"
              className="footerPlanYearly"
            />
            <NavLink
              className="startNowLink"
              style={{ textDecoration: "none" }}
              to="/startPro"
            >
              <div className="startNow-Btn">Start Now</div>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default FifthHeader;
