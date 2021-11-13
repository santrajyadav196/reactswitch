import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import TimeTrackingFeature from "./TimeTrackingFeature/TimeTrackingFeature";
import TimeTrackingTitle from "./TimeTrackingTitle/TimeTrackingTitle";
import TimeTrackingWork from "./TimeTrackingWork/TimeTrackingWork";

class TimeTracking extends Component {
  render() {
    return (
      <div className="time-tracking">
        <TimeTrackingTitle />
        <CompanyPartners />
        <TimeTrackingWork />
        <TimeTrackingFeature />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default TimeTracking;
