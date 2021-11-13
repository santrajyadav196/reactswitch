import React, { Component } from "react";
import CustomerTestimonial from "./CustomerTestimonial/CustomerTestimonial";
import ReviewsTitleHeader from "./ReviewsTitleHeader/ReviewsTitleHeader";
import ToolsHeader from "../HomePage/ToolsHeader/ToolsHeader";
import Footer from "../HomePage/Footer/Footer";

class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        <ReviewsTitleHeader />
        <CustomerTestimonial />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default Reviews;
