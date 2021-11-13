import React, { Component } from "react";
import client01 from "../../../../Assets/Images/client01.png";
import client02 from "../../../../Assets/Images/client02.png";
import client03 from "../../../../Assets/Images/client03.png";
import client04 from "../../../../Assets/Images/client04.png";
import client05 from "../../../../Assets/Images/client05.png";
import client06 from "../../../../Assets/Images/client06.png";

class CompanyPartners extends Component {
  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col partner-col  text-center">
            <img src={client01} alt="client01" />
          </div>
          <div className="col partner-col text-center">
            <img src={client02} alt="client02" />
          </div>
          <div className="col partner-col text-center">
            <img src={client03} alt="client03" />
          </div>
          <div className="col partner-col text-center">
            <img src={client04} alt="client04" />
          </div>
          <div className="col partner-col text-center">
            <img src={client05} alt="client05" />
          </div>
          <div className="col partner-col text-center">
            <img src={client06} alt="client06" />
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyPartners;
