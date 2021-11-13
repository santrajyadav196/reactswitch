import React, { Component } from "react";
import "./ContractFeature.css";
import businessmanMeditating from "../../../../Assets/Images/businessmanMeditating.png";

class ContractFeature extends Component {
  render() {
    return (
      <section className="contract-features">
        <div className="container">
          <h1 className="col-12 services-feature-title text-center">
            More contracts features
          </h1>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Eliminating The Back and Forth
                  </span>
                  <p className="services-feature-para">
                    Using a standardized contract vetted by a third party
                    eliminates back and forth, establishes trust, and speeds up
                    the signing process. Starting a secure work relationship
                    becomes faster and simpler.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Compliant With The Freelance Isn't Free Act
                  </span>
                  <p className="services-feature-para">
                    The Freelancers Union helped establish The Freelance Isn’t
                    Free Act in New York City, a law that helps freelancers have
                    more secure work relationships.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-4 text-center">
              <img
                src={businessmanMeditating}
                alt="businessmanMeditating"
                className="pro-feature-in"
              />
            </div>
            <div className="col-xl-4 col-lg-4 p-xl-0 p-lg-0 p-5">
              <ul className="u-reset-ul">
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    Fair for Both Sides
                  </span>
                  <p className="services-feature-para">
                    Using a standardized contract vetted by a third party
                    eliminates back and forth, establishes trust, and speeds up
                    the signing process. Starting a secure work relationship
                    becomes faster and simpler.
                  </p>
                </li>
                <li className="services-feature-list">
                  <span className="services-feature-head">
                    A Common Standard
                  </span>
                  <p className="services-feature-para">
                    Fair and secure work relationships need a contract. Not
                    having one is dangerous for both parties and can lead to
                    misunderstandings, false expectations and ultimately lost
                    time and money.
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

export default ContractFeature;
