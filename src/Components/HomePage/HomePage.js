import React, { Component } from "react";
import "./HomePage.css";
import FirstHeader from "./FirstHeader/FirstHeader";
import SecondHeader from "./SecondHeader/SecondHeader";
import ThirdHeader from "./ThirdHeader/ThirdHeader";
import FourthHeader from "./FourthHeader/FourthHeader";
import FifthHeader from "./FifthHeader/FifthHeader";
import SixthHeader from "./SixthHeader/SixthHeader";
import ToolsHeader from "./ToolsHeader/ToolsHeader";
import Footer from "./Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <FirstHeader />
        <SecondHeader />
        <ThirdHeader />
        <FourthHeader />
        <FifthHeader />
        <SixthHeader />
        <ToolsHeader />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
