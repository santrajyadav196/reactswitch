import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import expenseTitle from "../../../../Assets/Images/expenseTitle.png";

class ExpenseTrackingTitle extends Component {
  render() {
    return (
      <div className="container-fluid back-service-img">
        <div className="row justify-content-center row-margin-t">
          <h1 className="col-xl-6 col-lg-7 col-md-8 px-5 pricing-title text-center">
            Automate Your Expense Tracking
          </h1>
        </div>
        <div className="row justify-content-center row-margin-b">
          <div className="col-xl-6 col-lg-6 col-md-8 px-5 text-center">
            <p className="pricing-desc">
              Face it. Love tracking expenses. Sound sarcastic? Not at all.
              AND.CO automates keeping track of your expenses, files them and
              get the reports you need for tax time.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-3 col-lg-3 col-md-4">
            <NavLink
              className="getStartedLink"
              style={{ textDecoration: "none" }}
              to="expense-tracking/getStarted"
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
              src={expenseTitle}
              alt="expenseTitle"
              className="paymentRem-img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseTrackingTitle;
