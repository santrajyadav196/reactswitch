import React, { Component } from "react";
import CompanyPartners from "../../AboutUs/AboutTrusties/CompanyPartners/CompanyPartners";
import Footer from "../../HomePage/Footer/Footer";
import ToolsHeader from "../../HomePage/ToolsHeader/ToolsHeader";
import CustomerRev from "../../Pricing/CustomerRev/CustomerRev";
import PricingFaq from "../../Pricing/PricingFaq/PricingFaq";
import TaskManagerTitle from "./TaskManagerTitle/TaskManagerTitle";
import TaskManagerWork from "./TaskManagerWork/TaskManagerWork";

class TaskManager extends Component {
  render() {
    return (
      <div className="services-taskManager">
        <TaskManagerTitle />
        <CompanyPartners />
        <TaskManagerWork />
        <PricingFaq />
        <CustomerRev />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default TaskManager;
