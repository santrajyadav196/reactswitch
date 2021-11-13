import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import vector_smart from "../../../Assets/Images/vector-smart-object.png";
import "./FirstHeader.css";

class FirstHeader extends Component {
  render() {
    return (
      <section className="Header">
        <header className="app-container">
          <div className="Header-content">
            <h1 className="Header-title">
              <div>Smart Apps</div>
              For Smart Life!
            </h1>
            <p className="Header-copy">
              From proposal to payment, LOGO takes the headache out of
              freelancing, so you can get back to the work that drives you.
            </p>
            <div className="Header-form-wrapper">
              <form
                action="app/signup"
                className="Header-form SignupForm"
                id="headerSignUpForm"
              >
                <input
                  className="Header-form-input"
                  name="username"
                  placeholder="Your Email"
                  required
                  type="email"
                />
                <button className="Header-form-button" type="submit">
                  Sign Up for Free!
                </button>
              </form>
              <p className="NoHassle">
                <span>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="#53c570" />
                  <span className="noHassleFont">No credit card</span>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="#53c570" />
                  <span className="noHassleFont">No spam</span>
                  <FontAwesomeIcon icon={faCheck} size="1x" color="#53c570" />
                  <span className="noHassleFont">No hassle</span>
                </span>
              </p>
            </div>
          </div>
          <div className="Header-image">
            <img
              className="img-mobile-view"
              src={vector_smart}
              alt="vector_smart"
            />
          </div>
        </header>
      </section>
    );
  }
}

export default FirstHeader;
