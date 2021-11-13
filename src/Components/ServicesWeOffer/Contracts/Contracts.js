import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import ContractFeature from "./ContractFeature/ContractFeature";
import ContractTitle from "./ContractTitle/ContractTitle";
import ContractWork from "./ContractWork/ContractWork";

class Contracts extends Component {
  render() {
    return (
      <div className="services-contracts">
        <ContractTitle />
        <CompanyPartners />
        <ContractWork />
        <ContractFeature />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default Contracts;
