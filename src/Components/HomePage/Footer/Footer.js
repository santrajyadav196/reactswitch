import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <section className="col-xl-5 col-lg-6 col-md-12 Footer-content px-5 px-md-0 px-sm-0">
              <form
                action="app/signup"
                className="Header-form SignupForm"
                id="headerSignUpForm"
              >
                <input
                  className="Header-form-input"
                  name="username"
                  placeholder="Your Email"
                  required
                  type="email"
                />
                <button className="Header-form-button" type="submit">
                  Sign Up for Free!
                </button>
              </form>
              <p className="NoHassle">
                <span>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="#53c570" />
                  <span className="noHassleFont">No credit card</span>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="#53c570" />
                  <span className="noHassleFont">No spam</span>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="#53c570" />
                  <span className="noHassleFont">No hassle</span>
                </span>
              </p>
            </section>
            <div className="col-xl-7 col-lg-6 col-md-12 px-lg-0 px-md-5 px-sm-5 row">
              <div className="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-6 py-3">
                <h3 className="Footer-list-title">Info</h3>
                <ul className="Footer-list u-reset-ul">
                  <li className="Footer-item">
                    <NavLink
                      to="/about-us"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/pricing"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Pricing
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-6 py-3">
                <h3 className="Footer-list-title">Features</h3>
                <ul className="Footer-list u-reset-ul">
                  <li className="Footer-item">
                    <NavLink
                      to="/all-features"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      All Features
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/app-co/services/payments"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Payments
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/app-co/services/reccuring-payments"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Recurring
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/app-co/services/contract"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Contracts
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/app-co/services/proposals"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Proposals
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/app-co/services/expense-tracking"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Expense tracking
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/app-co/services/time-tracking"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Time Tracking
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/app-co/services/reports"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Reports
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/desktopApp"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Desktop App
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-6 py-3">
                <h3 className="Footer-list-title">Members</h3>
                <ul className="Footer-list u-reset-ul">
                  <li className="Footer-item">
                    <NavLink
                      to="/Login"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/Download-Apps"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Download Apps
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/Freelancer-Blog"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Freelancer Blog
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/support"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Support
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/faq"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-3 col-sm-6 col-6 py-3">
                <h3 className="Footer-list-title">Company</h3>
                <ul className="Footer-list u-reset-ul">
                  <li className="Footer-item">
                    <NavLink
                      to="/aboutFiverr"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      About Fiverr
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/jobs"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Jobs
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/terms-&-privacy"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Terms & Privacy
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/Affiliate-Program"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Affiliate Program
                    </NavLink>
                  </li>
                  <li className="Footer-item">
                    <NavLink
                      to="/partnerships"
                      style={{ textDecoration: "none" }}
                      className="Footer-link"
                    >
                      Partnerships
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
