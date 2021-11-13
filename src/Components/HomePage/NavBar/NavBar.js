import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/logo.svg";
import chevron from "../../../Assets/Images/chevron-down.svg";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    isHovered: false,
    isTop: false,
  };
  handleHover = () => {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  };

  handleScroll = (isTop) => {
    this.setState({ isTop });
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > this.props.scroll;
      if (isTop !== this.state.isTop) {
        this.handleScroll(isTop);
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const scroll = this.state.isTop ? "Nav Nav--sticky" : "Nav";
    const btnClass = this.state.isHovered
      ? "Nav-link Nav-link--suite u-reset-button is-active"
      : "Nav-link Nav-link--suite u-reset-button";

    return (
      <nav className={scroll} onScroll={this.handleScroll}>
        <div className="Nav-to">
          <NavLink to="/app-co/" className="Nav-top-logo">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <ul className="Nav-mainMenu u-reset-ul">
          <li className="Nav-Submenu">
            <button
              className={btnClass}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
            >
              <span>
                Services We Offer <img src={chevron} alt="chevron" />
              </span>
            </button>
            <ul className="Nav-featuresMenu u-reset-ul">
              <li>
                <NavLink
                  to="/app-co/services/invoicing"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Invoicing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/task-management"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Task Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/proposals"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Proposals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/payments"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Payments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/contract"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Contract
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/reccuring-payments"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Reccuring Payments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/expense-tracking"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Expense Tracking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/reports"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Reports
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app-co/services/time-tracking"
                  activeClassName="is-active"
                  style={{ textDecoration: "none" }}
                  className="Nav-link"
                >
                  Time Tracking
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="Nav-link Nav-link--bordered"
              activeClassName="is-active"
              style={{ textDecoration: "none" }}
              to="/app-co/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Nav-link Nav-link--bordered"
              activeClassName="is-active"
              style={{ textDecoration: "none" }}
              to="/app-co/reviews"
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Nav-link Nav-link--bordered"
              activeClassName="is-active"
              style={{ textDecoration: "none" }}
              to="/app-co/aboutUs"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Nav-link Nav-link--bordered"
              activeClassName="is-active"
              style={{ textDecoration: "none" }}
              to="/app-co/gopro"
            >
              Go PRO
            </NavLink>
          </li>
        </ul>
        <ul className="Nav-webApp u-reset-ul">
          <li>
            <NavLink
              className="Nav-webApp-link Nav-webApp-link--signUp Nav-signUpButton signupLink"
              style={{ textDecoration: "none" }}
              to="/signup"
            >
              {this.state.isTop ? (
                <span>Sign up for free</span>
              ) : (
                <span>Have an account? </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Nav-webApp-link Nav-webApp-link--signIn Nav-signInButton"
              style={{ textDecoration: "none" }}
              // to="/main/dashboard"
              to="/db/home"
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
