import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import ExpenseTrackingFeature from "./ExpenseTrackingFeature/ExpenseTrackingFeature";
import ExpenseTrackingTitle from "./ExpenseTrackingTitle/ExpenseTrackingTitle";
import ExpenseTrackingWork from "./ExpenseTrackingWork/ExpenseTrackingWork";

class ExpenseTracking extends Component {
  render() {
    return (
      <div className="services-expenseTracking">
        <ExpenseTrackingTitle />
        <CompanyPartners />
        <ExpenseTrackingWork />
        <ExpenseTrackingFeature />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default ExpenseTracking;
