import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import toolsImg from "../../../Assets/Images/toolsImg.jpg";
import "./ToolsHeader.css";

class ToolsHeader extends Component {
  render() {
    return (
      <section className="Tools">
        <div className="container">
          <h1 className="Tools-title">Boost up your business</h1>
          <p className="Tools-description">
            Tools are built to help you reach new heights.{" "}
            <span role="img" aria-label="phone">
              🚀
            </span>
          </p>

          <div className="row">
            <div className="Tools-lists col-xl-7 col-lg-7 col-md-12 mrl-4">
              <div className="d-flex justify-content-between justify-content-lg-start mx-3 w-100">
                <div className="mr-lg-5">
                  <ul className="Tools-list  u-reset-ul d-inline-block">
                    <li className="Tools-item">
                      <NavLink
                        to="/taxCalculator"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Quarterly Tax Calculator
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/invoiceTemplate"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Free Invoice Templates
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/proposalTemplate"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Free Proposal Templates
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/invoiceGenerator"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Free Invoice Generator
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/howToFreelance"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        How to Freelance
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/freelanceJobs"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Freelance Jobs
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/freelanceBenefits"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Freelance Benefits
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/1099Form"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        1099 Form
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/slackApp"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Slack App
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="ml-lg-5">
                  <ul className="Tools-list  u-reset-ul d-inline-block">
                    <li className="Tools-item">
                      <NavLink
                        to="/freelancerAudio"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Six Figure Freelancer Audio Course
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/selfEmpTaxCalci"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Self Employment Tax Calculator
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/businessNamegenerator"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Business Name Generator
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/william-harricks"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Williams&Harricks
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/fiverrElevate"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Fiverr Elevate
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/anywhereWorkers"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Anywhere Workers
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/designDB"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Design DB
                      </NavLink>
                    </li>

                    <li className="Tools-item">
                      <NavLink
                        to="/brutalismFreebie"
                        style={{ textDecoration: "none" }}
                        className="Tools-link"
                      >
                        Brutalism Freebie
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 text-center">
              <img src={toolsImg} alt="toolsImg" className="Tools-img zio" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ToolsHeader;
