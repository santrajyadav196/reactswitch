import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import InvoicingFeatures from "./InvoicingFeatures/InvoicingFeatures";
import InvoicingTitle from "./InvoicingTitle/InvoicingTitle";
import InvoicingWork from "./InvoicingWork/InvoicingWork";

class Invoicing extends Component {
  render() {
    return (
      <div className="services-invoicing">
        <InvoicingTitle />
        <CompanyPartners />
        <InvoicingWork />
        <InvoicingFeatures />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default Invoicing;
