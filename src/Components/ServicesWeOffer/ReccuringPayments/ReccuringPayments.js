import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import ReccuringPaymentsFeature from "./ReccuringPaymentsFeature/ReccuringPaymentsFeature";
import ReccuringPaymentsTitle from "./ReccuringPaymentsTitle/ReccuringPaymentsTitle";

class ReccuringPayments extends Component {
  render() {
    return (
      <div className="services-reccuring-payments">
        <ReccuringPaymentsTitle />
        <CompanyPartners />
        <ReccuringPaymentsFeature />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default ReccuringPayments;
