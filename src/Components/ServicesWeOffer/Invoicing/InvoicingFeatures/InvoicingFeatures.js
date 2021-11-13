import React, { Component } from "react";
import "./InvoicingFeatures.css";
import invoiceFeature from "../../../../Assets/Images/invoiceFeature.png";

class InvoicingFeatures extends Component {
  render() {
    return (
      <section className="invoicing-features">
        <div className="container">
          <h1 className="col-12 services-feature-title text-center">
            More invoicing features
          </h1>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-12 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Integrates with time tracking
                  </span>
                  <p className="services-feature-para">
                    Track your time with AND.CO and have your invoices created
                    automatically. No need to manually input the hours you’re
                    billing for.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Invoice in your currency
                  </span>
                  <p className="services-feature-para">
                    Simply set your currency and our invoicing software will
                    create the appropriate invoice.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Integrates with time tracking
                  </span>
                  <p className="services-feature-para">
                    Connect your bank account and you’ll receive alerts when
                    your client pays your invoice.
                  </p>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center col-xl-4 col-lg-12 text-center">
              <img
                src={invoiceFeature}
                alt="invoiceFeature"
                className="feature-img"
              />
            </div>
            <div className="col-xl-4 col-lg-12 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Integrates with time tracking
                  </span>
                  <p className="services-feature-para">
                    Are there other documents your client needs from you along
                    with their bill? Go ahead and attach them to your invoice.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Customize your invoice
                  </span>
                  <p className="services-feature-para">
                    Present a professional image of your brand by adding your
                    own logo and color scheme to your invoices.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Turn proposals into invoice
                  </span>
                  <p className="services-feature-para">
                    Create professional proposals for your freelance work and
                    turn them straight into invoices once the contract has been
                    signed. Never double up on work.
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

export default InvoicingFeatures;
