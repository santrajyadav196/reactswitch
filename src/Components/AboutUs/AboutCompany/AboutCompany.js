import React, { Component } from "react";
import "./AboutCompany.css";
import userInterfaceImg from "../../../Assets/Images/userInterfaceImg.png";

class AboutCompany extends Component {
  render() {
    return (
      <section className="about-company">
        <div className="container">
          <div className="row justify-content-center">
            <div className="d-flex align-items-center col-xl-6 col-lg-6 col-md-10 p-5">
              <img
                src={userInterfaceImg}
                alt="userInterfaceImg"
                className="userInterfaceImg"
              />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-10 p-5">
              <h3 className="about-company-head">ABOUT DIGITOLOGY</h3>
              <span className="about-company-ques">
                Why the best choose to work with us?
              </span>
              <p className="about-company-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sodales dictum viverra. Nam gravida dignissim eros. Vivamus
                congue erat ante, volutpat dictum neque dignissim eget.
              </p>
              <ul className="about-company-ul">
                <li>Nullam placerat nunc id ornare convallis.</li>
                <li>
                  Mauris id dui aliquam, dapibus felis vel, iaculis risus.
                </li>
                <li>Integer dapibus lorem in nisl hendrerit dictum.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutCompany;
