import React, { Component } from "react";
import "./ExpenseTrackingFeature.css";
import expenseFeature from "../../../../Assets/Images/expenseFeature.png";

class ExpenseTrackingFeature extends Component {
  render() {
    return (
      <section className="expense-tracking-features">
        <div className="container">
          <h1 className="col-12 services-feature-title text-center">
            More expense tracking features
          </h1>
          <div className="row justify-content-center">
            <div className="d-flex align-items-center col-xl-4 col-lg-3 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">Snap receipts</span>
                  <p className="services-feature-para">
                    Just use the mobile app to snap any receipt you get on the
                    go.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Overview on all expenses
                  </span>
                  <p className="services-feature-para">
                    A simple list of all your expenses that you can filter by
                    time and clients.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-5 text-center">
              <img
                src={expenseFeature}
                alt="expenseFeature"
                className="pro-feature-in"
              />
            </div>
            <div className="d-flex align-items-center col-xl-4 col-lg-4 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Be prepared for tax time
                  </span>
                  <p className="services-feature-para">
                    Get all the reports and spreadsheets you need to be prepared
                    for tax time.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Simple, powerful stats
                  </span>
                  <p className="services-feature-para">
                    Yeah. Know what’s up in your business with stats you can
                    actually understand.
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

export default ExpenseTrackingFeature;
