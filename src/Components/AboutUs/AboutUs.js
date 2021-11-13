import React, { Component } from "react";
import Footer from "../HomePage/Footer/Footer";
import ToolsHeader from "../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../Pricing/CustomerRev/CustomerRev";
import AboutCompany from "./AboutCompany/AboutCompany";
import AboutFeatures from "./AboutFeatures/AboutFeatures";
import AboutTrusties from "./AboutTrusties/AboutTrusties";
import AboutUsTitle from "./AboutUsTitle/AboutUsTitle";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <AboutUsTitle />
        <AboutCompany />
        <AboutFeatures />
        <AboutTrusties />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
