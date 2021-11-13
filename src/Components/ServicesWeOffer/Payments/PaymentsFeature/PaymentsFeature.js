import React, { Component } from "react";
import "./PaymentsFeature.css";
import paymentFeature from "../../../../Assets/Images/paymentFeature.png";

class PaymentsFeature extends Component {
  render() {
    return (
      <section className="payments-features">
        <div className="container">
          <h1 className="col-12 services-feature-title text-center">
            More payment features
          </h1>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-12 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Offer multiple options
                  </span>
                  <p className="services-feature-para">
                    Clients can easily select which payment method works best
                    for them.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">Payment alerts</span>
                  <p className="services-feature-para">
                    Get alerts whenever you get paid through AND.CO.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">Track payments</span>
                  <p className="services-feature-para">
                    By connecting your bank account, you can automatically track
                    all incoming payments. No matter if they were paid via
                    AND.CO or not.
                  </p>
                </li>
              </ul>
            </div>
            <div className="align-items-center col-xl-4 col-lg-12 text-center">
              <img
                src={paymentFeature}
                alt="paymentFeature"
                className="feature-img"
              />
            </div>
            <div className="col-xl-4 col-lg-12 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">Standard Fees</span>
                  <p className="services-feature-para">
                    Only pay the standard 2.9% fee for credit card payments.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Accept All Major Credit Cards
                  </span>
                  <p className="services-feature-para">
                    You can easily accept all major credit cards.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">Secure payments</span>
                  <p className="services-feature-para">
                    AND.CO and our technology partners use bank-grade security
                    measures to make sure you and your payments are secure.
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

export default PaymentsFeature;
