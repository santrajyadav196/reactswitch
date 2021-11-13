import React, { Component } from "react";
import "./AboutFeatures.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCrosshairs,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";

class AboutFeatures extends Component {
  render() {
    return (
      <section className="about-features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 px-5">
              <div className="about-feature-tile text-center">
                <FontAwesomeIcon
                  icon={faChartLine}
                  size="3x"
                  color="#5bb4f2"
                  className="fa-icon-p"
                />
                <h3 className="about-feature-head">Our Responsiblity</h3>
                <p className="about-feature-para">
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exer citation ullamco
                  laboris.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 px-5">
              <div className="about-feature-tile text-center">
                <FontAwesomeIcon
                  icon={faCrosshairs}
                  size="3x"
                  color="#5bb4f2"
                  className="fa-icon-p"
                />
                <h3 className="about-feature-head">Our Approach</h3>
                <p className="about-feature-para">
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exer citation ullamco
                  laboris.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 px-5">
              <div className="about-feature-tile text-center">
                <FontAwesomeIcon
                  icon={faFutbol}
                  size="3x"
                  color="#5bb4f2"
                  className="fa-icon-p"
                />
                <h3 className="about-feature-head">Our Mission & Vision</h3>
                <p className="about-feature-para">
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exer citation ullamco
                  laboris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutFeatures;
