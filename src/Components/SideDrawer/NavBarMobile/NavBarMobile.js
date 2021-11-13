import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./NavBarMobile.css";
import logo from "../../../Assets/Images/logo.svg";
import Auxillary from "../../../HOC/Auxillary/Auxillary";

class NavBarMobile extends Component {
  render() {
    return (
      <Auxillary>
        <div className='Nav-top' onClick={this.props.close}>
          <NavLink to='/app-co/' className='Nav-top-logo'>
            <img src={logo} alt='Logo' />
          </NavLink>
        </div>
        <ul className='Nav-mainMenu-mobile ul-reset-mobile'>
          <li className='Nav-Submenu-mobile link-mobile-t'>
            <span className='suite-we-offer'>Services We Offer</span>
            <ul className='mobile-view'>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/invoicing'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Invoicing
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/proposals'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Proposals
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/contract'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Contract
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/expense-tracking'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Expense Tracking
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/time-tracking'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Time Tracking
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/task-management'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Task Management
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/payments'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Payments
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/reccuring-payments'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Reccuring Payments
                </NavLink>
              </li>
              <li onClick={this.props.close}>
                <NavLink
                  to='/app-co/services/reports'
                  activeClassName='is-active'
                  style={{textDecoration: "none"}}
                  className='Nav-link-ul'>
                  Reports
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={"link-mobile"} onClick={this.props.close}>
            <NavLink
              className='Nav-link-mobile'
              activeClassName='is-active'
              style={{textDecoration: "none"}}
              to='/app-co/pricing'>
              Pricing
            </NavLink>
          </li>
          <li className='link-mobile' onClick={this.props.close}>
            <NavLink
              className='Nav-link-mobile'
              activeClassName='is-active'
              style={{textDecoration: "none"}}
              to='/app-co/reviews'>
              Reviews
            </NavLink>
          </li>
          <li className='link-mobile' onClick={this.props.close}>
            <NavLink
              className='Nav-link-mobile'
              activeClassName='is-active'
              style={{textDecoration: "none"}}
              to='/app-co/aboutUs'>
              About
            </NavLink>
          </li>
          <li className='link-mobile'>
            <NavLink
              className='Nav-link-mobile'
              activeClassName='is-active'
              style={{textDecoration: "none"}}
              to='/app-co/gopro'>
              Go PRO
            </NavLink>
          </li>
        </ul>
        <ul className='Nav-webApp u-reset-ul'>
          <li className='Nav-signUp-mobile'>
            <NavLink
              className='Nav-webApp-link-mobile Nav-webApp-link Nav-webApp-link--signUp Nav-signUpButton signupNavLink Nav-link-mobile'
              style={{textDecoration: "none"}}
              to='/signup'>
              <span>Sign up for free</span>
            </NavLink>
          </li>
          <li className='Nav-logIn-mobile' onClick={this.props.close}>
            <NavLink
              className='Nav-webApp-link Nav-webApp-link--signIn Nav-signInButton Nav-link-mobile'
              style={{textDecoration: "none"}}
              to='/main/dashboard'>
              Log In
            </NavLink>
          </li>
        </ul>
      </Auxillary>
    );
  }
}

export default NavBarMobile;
