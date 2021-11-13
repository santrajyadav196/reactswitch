import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import PaymentsFeature from "./PaymentsFeature/PaymentsFeature";
import PaymentsTitle from "./PaymentsTitle/PaymentsTitle";

class Payments extends Component {
  render() {
    return (
      <div className="service-payments">
        <PaymentsTitle />
        <CompanyPartners />
        <PaymentsFeature />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default Payments;
