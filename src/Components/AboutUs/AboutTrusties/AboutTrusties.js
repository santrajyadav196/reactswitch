import React, { Component } from "react";
import "./AboutTrusties.css";
import CompanyPartners from "./CompanyPartners/CompanyPartners";

class AboutTrusties extends Component {
  render() {
    return (
      <section className="about-us-trusties">
        <div className="container">
          <h2 className="trusted-partners text-center">
            Trusted by many companies
          </h2>
          <CompanyPartners />
        </div>
      </section>
    );
  }
}

export default AboutTrusties;
