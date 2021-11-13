import React, { Component } from "react";
import "./CustomerRev.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class CustomerRev extends Component {
  render() {
    return (
      <section className="customer-reviews customer-back-img">
        <div className="app-container">
          <div className="row justify-content-center">
            <div className="d-flex align-items-center col-lg-4 col-md-12 p-5">
              <div>
                {" "}
                <div className="cust-rev">CUSTOMERS REVIEWS</div>
                <div className="cust-rev-head">10K+ Customers Love Us</div>
                <p className="cust-rev-desc">
                  Semper lacus cursus porta, feugiat primis in ultrice ligula
                  tempus auctor ipsum and mauris lectus enim ipsum. At sagittis
                  congue augue egestas
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 tiles-cust-rev px-5">
              <div className="tile-rev">
                <div className="tile-cust-rev-head">
                  <div className="tile-rev-img"></div>
                  <div className="tile-rev-name">
                    <div className="cust-name">Nazzareno Giannelli</div>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                  </div>
                </div>
                <div className="tile-cust-rev-p">
                  <p>
                    Switching completely to @andco leaving behind all at once
                    the invoicing software, the time tracking one and the task
                    manager one I used to deal with. Hopefully it pays off .
                    Really looking forward to it! #Productivity
                  </p>
                </div>
                <div className="tile-cust-rev-footer">
                  <p>12:01 AM - 25 May 2020</p>
                </div>
              </div>
              <div className="tile-rev">
                <div className="tile-cust-rev-head">
                  <div className="tile-rev-img"></div>
                  <div className="tile-rev-name">
                    <div className="cust-name">Nazzareno Giannelli</div>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                  </div>
                </div>
                <div className="tile-cust-rev-p">
                  <p>
                    Switching completely to @andco leaving behind all at once
                    the invoicing software, the time tracking one and the task
                    manager one I used to deal with. Hopefully it pays off .
                    Really looking forward to it! #Productivity
                  </p>
                </div>
                <div className="tile-cust-rev-footer">
                  <p>12:01 AM - 25 May 2020</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 tiles-cust-rev2 px-5">
              <div className="tile-rev">
                <div className="tile-cust-rev-head">
                  <div className="tile-rev-img"></div>
                  <div className="tile-rev-name">
                    <div className="cust-name">Nazzareno Giannelli</div>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                  </div>
                </div>
                <div className="tile-cust-rev-p">
                  <p>
                    Switching completely to @andco leaving behind all at once
                    the invoicing software, the time tracking one and the task
                    manager one I used to deal with. Hopefully it pays off .
                    Really looking forward to it! #Productivity
                  </p>
                </div>
                <div className="tile-cust-rev-footer">
                  <p>12:01 AM - 25 May 2020</p>
                </div>
              </div>
              <div className="tile-rev">
                <div className="tile-cust-rev-head">
                  <div className="tile-rev-img"></div>
                  <div className="tile-rev-name">
                    <div className="cust-name">Nazzareno Giannelli</div>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="xs"
                      className="star-margin"
                      color="#fad852"
                    />
                  </div>
                </div>
                <div className="tile-cust-rev-p">
                  <p>
                    Switching completely to @andco leaving behind all at once
                    the invoicing software, the time tracking one and the task
                    manager one I used to deal with. Hopefully it pays off .
                    Really looking forward to it! #Productivity
                  </p>
                </div>
                <div className="tile-cust-rev-footer">
                  <p>12:01 AM - 25 May 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CustomerRev;
