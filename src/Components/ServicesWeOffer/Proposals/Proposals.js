import React, { Component } from "react";
import ProposalWork from "./ProposalWork/ProposalWork";
import ProposalTitle from "./ProposalTitle/ProposalTitle";
import ProposalFeatures from "./ProposalFeatures/ProposalFeatures";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import Footer from "../../HomePage/Footer/Footer";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";

class Proposals extends Component {
  render() {
    return (
      <div className="services-proposals">
        <ProposalTitle />
        <CompanyPartners />
        <ProposalWork />
        <ProposalFeatures />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default Proposals;
