import React, { Component } from "react";
import "./ProposalFeatures.css";
import proposalFeature from "../../../../Assets/Images/proposalFeature.png";

class ProposalFeatures extends Component {
  render() {
    return (
      <section className="proposals-features">
        <div className="container">
          <h1 className="col-12 services-feature-title text-center">
            More proposals features
          </h1>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-3 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">E-Signing</span>
                  <p className="services-feature-para">
                    Sign and approve proposals and contracts online.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Define Milestones
                  </span>
                  <p className="services-feature-para">
                    Easily set multiple milestones, phases, deposits and other
                    project terms.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Automatic Invoices
                  </span>
                  <p className="services-feature-para">
                    Your invoices automatically created based on your proposal’s
                    terms.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-5 text-center">
              <img
                src={proposalFeature}
                alt="proposalFeature"
                className="pro-feature-in"
              />
            </div>
            <div className="col-xl-4 col-lg-4 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">Smart Alerts</span>
                  <p className="services-feature-para">
                    Receive alerts that keep you updated on everything from when
                    the proposal was viewed to when it’s signed.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Automatic Reminders
                  </span>
                  <p className="services-feature-para">
                    The app automatically sends reminders to your clients to
                    remind them to approve your proposals.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">Attach Files</span>
                  <p className="services-feature-para">
                    Got another document the client needs to see? Just attach it
                    to the proposal.
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

export default ProposalFeatures;
