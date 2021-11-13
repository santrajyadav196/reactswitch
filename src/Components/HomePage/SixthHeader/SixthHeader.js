import React, { Component } from "react";
import aerolandImg from "../../../Assets/Images/aeroland-software-image-05.png";
import Award from "../../../Assets/Images/AwardSmartObject.jpg";
import Calender from "../../../Assets/Images/CalendarSmartObject.jpg";
import Security from "../../../Assets/Images/SecuritySmartObject.png";
import "./SixthHeader.css";

class SixthHeader extends Component {
  render() {
    return (
      <section className="feature-sixth">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="Features-title title">
                Discover all the ways we can help
              </h2>
              <p className="Features-sub">
                We offers tons of tools to help you grow and manage your
                business.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 text-center">
              <img src={aerolandImg} alt="aerolandImg" className="img-align" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 text-center">
              <ul className="p-0 mb-0 d-inline-block">
                <li className="weProvideLi p-4">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img src={Award} alt="Award" className="weProvide-img" />
                    </div>
                    <div className="col-9">
                      <h3 className="head-details-provide">
                        Award Winning Support
                      </h3>
                      <p className="sub-details-provide">
                        And we mean "award-winning." Thank you, 2019 Stevie
                        Awards for Customer Service!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="weProvideLi p-4">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src={Calender}
                        alt="Calender"
                        className="weProvide-img"
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="head-details-provide">
                        30-Day, Money-Back Guarantee
                      </h3>
                      <p className="sub-details-provide">
                        Cancel your membership within 30 days for a full refund
                        of your PRO subscription.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="weProvideLi p-4">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src={Security}
                        alt="Security"
                        className="weProvide-img"
                      />
                    </div>
                    <div className="col-9">
                      <h3 className="head-details-provide">Total Security</h3>
                      <p className="sub-details-provide">
                        We encrypt all transactions and never store your credit
                        card data.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SixthHeader;
