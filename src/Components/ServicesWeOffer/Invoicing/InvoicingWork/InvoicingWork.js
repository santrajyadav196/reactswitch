import React, { Component } from "react";
import "./InvoicingWork.css";
import { NavLink } from "react-router-dom";
import paymentInvoicing from "../../../../Assets/Images/paymentInvoicing.png";
import onlinePayment from "../../../../Assets/Images/onlinePayment.png";
import paymentRem from "../../../../Assets/Images/paymentRem.png";
import sectionDividerLeft from "../../../../Assets/Images/sectionDividerLeft.png";
import sectionDividerRight from "../../../../Assets/Images/sectionDividerRight.png";

class InvoicingWork extends Component {
  render() {
    return (
      <section className="invoicing-work">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-xl-6 col-lg-6 p-5">
              <span className="work-header">
                Accept payments directly on your invoice
              </span>
              <p className="work-para">
                Easy and secure payments directly embedded into your invoicing.
                Start accepting Credit Cards and ACH payments online right from
                your invoices.
              </p>
              <span className="work-footer">
                <NavLink
                  to="/app-co/payments"
                  className="getStartedLink"
                  style={{ textDecoration: "none" }}
                >
                  Start accepting payments &#62;
                </NavLink>
              </span>
            </div>
            <div className="align-items-center col-xl-6 col-lg-6 p-5 text-center">
              <img
                src={paymentInvoicing}
                alt="paymentInvoicing"
                className="paymentRem"
              />
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-xl-7 col-lg-7 col-md-10 px-5">
              <img
                src={sectionDividerLeft}
                alt="sectionDividerLeft"
                className="video-img"
              />
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="col-xl-6 col-lg-6 p-5 text-center img-place">
              <img
                src={paymentRem}
                alt="paymentRem"
                className="paymentRem-img"
              />
            </div>
            <div className="col-xl-6 col-lg-6 p-5">
              <span className="work-header">Receive payment reminders</span>
              <p className="work-para">
                We tells you if a client is late in paying their bill and
                reminds them of their duty of payment. Receive invoice payment
                alerts on your desktop, mobile phone or even Slack.
              </p>
              <span className="work-footer">
                <NavLink
                  to="/app-co/payments"
                  className="getStartedLink"
                  style={{ textDecoration: "none" }}
                >
                  Get payment alerts &#62;
                </NavLink>
              </span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-10 px-5">
              <img
                src={sectionDividerRight}
                alt="sectionDividerRight"
                className="video-img"
              />
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="d-flex align-items-center col-xl-6 col-lg-6 p-5">
              <div>
                <span className="work-header">
                  Send online invoices from anywhere
                </span>
                <p className="work-para">
                  Invoicing on-the-go is simple and everything is synced across
                  all your devices. So you can stay on top of your billing and
                  cash flow, no matter where you are.
                </p>
                <span className="work-footer">
                  <NavLink
                    to="/app-co/payments"
                    className="getStartedLink"
                    style={{ textDecoration: "none" }}
                  >
                    Send your first invoice &#62;
                  </NavLink>
                </span>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 p-5 text-center">
              <img
                src={onlinePayment}
                alt="onlinePayment"
                className="video-img"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InvoicingWork;
