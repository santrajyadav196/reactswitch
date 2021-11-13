import React, { Component } from "react";
import "./PricingPlans.css";
import pricingPlan from "../../../Assets/Images/pricingPlan.png";

class PricingPlans extends Component {
  render() {
    return (
      <section className="pricing-plan">
        <div className="container">
          <h1 className="pricing-plan-title text-center">All plans include</h1>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 li-sm-pad">
              <ul className="u-reset-ul">
                <li className="li-p">
                  <h4 className="pricing-plan-head">Proposals & Contracts</h4>
                  <p className="pricing-plan-desc">
                    Win more business with beautiful, customized proposals. Make
                    sure you get paid with bulletproof contracts.
                  </p>
                </li>
                <li className="li-p">
                  <h4 className="pricing-plan-head">Invoicing & Payments</h4>
                  <p className="pricing-plan-desc">
                    Create custom invoices, accept payments online and receive
                    alerts when they’re viewed and paid.
                  </p>
                </li>
                <li className="li-p">
                  <h4 className="pricing-plan-head">Tasks</h4>
                  <p className="pricing-plan-desc">
                    Manage your tasks, organize your projects and stay on track.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 text-center plan-img">
              <img
                src={pricingPlan}
                className="pricingPlan-logo"
                alt="pricingPlan"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 li-sm-pad">
              <ul className="u-reset-ul">
                <li className="li-p">
                  <h4 className="pricing-plan-head">Expense Tracking</h4>
                  <p className="pricing-plan-desc">
                    Track expenses, get reports and bill them to your clients.
                    Snap receipts, forward them via email or connect your bank.
                  </p>
                </li>
                <li className="li-p">
                  <h4 className="pricing-plan-head">Time Tracking</h4>
                  <p className="pricing-plan-desc">
                    Track and invoice your time easily. Our apps make it easy to
                    track and get paid.
                  </p>
                </li>
                <li className="li-p">
                  <h4 className="pricing-plan-head">Reports</h4>
                  <p className="pricing-plan-desc">
                    Be prepared for tax time and know your business in and out.
                    Get reports on expenses, income, time and more.
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

export default PricingPlans;
