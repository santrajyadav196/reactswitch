import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./PricingFaq.css";
import { zoomIn } from "react-animations";
import businessLooking from "../../../Assets/Images/businessLooking.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ZoomIn = styled.div`
  animation: 2s ${keyframes`${zoomIn}`};
`;

class PricingFaq extends Component {
  state = { faqAns1: false, faqAns2: false, faqAns3: false, faqAns4: false };

  dropAnswerHandler(num) {
    switch (num) {
      case "faqAns1":
        return this.setState((prevState) => ({
          faqAns1: !prevState.faqAns1,
        }));
      case "faqAns2":
        return this.setState((prevState) => ({
          faqAns2: !prevState.faqAns2,
        }));
      case "faqAns3":
        return this.setState((prevState) => ({
          faqAns3: !prevState.faqAns3,
        }));
      case "faqAns4":
        return this.setState((prevState) => ({
          faqAns4: !prevState.faqAns4,
        }));
      default:
        return null;
    }
  }

  render() {
    return (
      <section className="pricing-faq">
        <div className="container">
          <h1 className="col-12 pricing-faq-title text-center">
            Frequently asked questions
          </h1>
          <div className="row">
            <div className="col-xl-5 col-lg-12 text-center">
              <img
                src={businessLooking}
                alt="pricing-faq"
                className="pricing-faq-img"
              />
            </div>
            <div className="col-2"></div>
            <div className="d-flex align-items-center col-xl-4 col-lg-12 px-xl-0 px-5">
              <ul className="u-reset-ul">
                <li
                  className="li-faq"
                  onClick={() => this.dropAnswerHandler("faqAns1")}
                >
                  {this.state.faqAns1 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="minusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="plusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  )}
                  <span className="faq-q">
                    Can I try out your invoicing software?
                  </span>
                  {this.state.faqAns1 ? (
                    <ZoomIn>
                      <p className="faq-para">
                        Sure! Simply create an account and you’ll be able to
                        send invoices to your first client. If you’d like to
                        invoice more than one active client, you can choose to
                        upgrade to a Pro account.
                      </p>
                    </ZoomIn>
                  ) : null}
                </li>
                <li
                  className="li-faq"
                  onClick={() => this.dropAnswerHandler("faqAns2")}
                >
                  {this.state.faqAns2 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="minusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="plusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  )}
                  <span className="faq-q">
                    What’s included on this invoice?
                  </span>
                  {this.state.faqAns2 ? (
                    <ZoomIn>
                      <p className="faq-para">
                        Sure! Simply create an account and you’ll be able to
                        send invoices to your first client. If you’d like to
                        invoice more than one active client, you can choose to
                        upgrade to a Pro account.
                      </p>
                    </ZoomIn>
                  ) : null}
                </li>
                <li
                  className="li-faq"
                  onClick={() => this.dropAnswerHandler("faqAns3")}
                >
                  {this.state.faqAns3 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="minusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="plusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  )}
                  <span className="faq-q">
                    How do I accept payments online for my invoices?
                  </span>
                  {this.state.faqAns3 ? (
                    <ZoomIn>
                      <p className="faq-para">
                        Sure! Simply create an account and you’ll be able to
                        send invoices to your first client. If you’d like to
                        invoice more than one active client, you can choose to
                        upgrade to a Pro account.
                      </p>
                    </ZoomIn>
                  ) : null}
                </li>
                <li
                  className="li-faq"
                  onClick={() => this.dropAnswerHandler("faqAns4")}
                >
                  {this.state.faqAns4 ? (
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="minusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="plusIcon"
                      size="2x"
                      color="#73b0f9"
                    />
                  )}
                  <span className="faq-q">
                    How will I know if my invoice has been viewed?
                  </span>
                  {this.state.faqAns4 ? (
                    <ZoomIn>
                      <p className="faq-para">
                        Sure! Simply create an account and you’ll be able to
                        send invoices to your first client. If you’d like to
                        invoice more than one active client, you can choose to
                        upgrade to a Pro account.
                      </p>
                    </ZoomIn>
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingFaq;
