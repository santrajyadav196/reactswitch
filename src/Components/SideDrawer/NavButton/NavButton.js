import React from "react";
import "./NavButton.css";
import {NavLink} from "react-router-dom";
import logo from "../../../Assets/Images/logo.svg";
import Auxillary from "../../../HOC/Auxillary/Auxillary";
import MainNavBar from "../MainNavBar/MainNavBar";

const NavButton = (props) => {
  let urlEle = props.urlElements[3];
  let dis = null;
  if (urlEle === "app-co") {
    dis = (
      <div className='Nav-top'>
        <NavLink to='/app-co' className='Nav-top-logo'>
          <img src={logo} alt='Logo' />
        </NavLink>

        <div className='Toggle' onClick={props.open}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else {
    dis = <MainNavBar open={props.open} />;
  }
  return <Auxillary>{dis}</Auxillary>;
};

export default NavButton;
