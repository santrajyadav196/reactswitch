import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import ReportsFeature from "./ReportsFeature/ReportsFeature";
import ReportsTitle from "./ReportsTitle/ReportsTitle";

class Reports extends Component {
  render() {
    return (
      <div className="services-reports">
        <ReportsTitle />
        <CompanyPartners />
        <ReportsFeature />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default Reports;
