import React, { Component } from "react";
import CustomerRev from "./CustomerRev/CustomerRev";
import PricingDetails from "./PricingDetails/PricingDetails";
import PricingFaq from "./PricingFaq/PricingFaq";
import PricingPlans from "./PricingPlans/PricingPlans";
import PricingTitleHeader from "./PricingTitleHeader/PricingTitleHeader";
import ToolsHeader from "../HomePage/ToolsHeader/ToolsHeader";
import Footer from "../HomePage/Footer/Footer";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <PricingTitleHeader />
        <PricingDetails />
        <PricingPlans />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default Pricing;
