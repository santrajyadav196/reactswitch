import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./MainNavBar.css";
import digitalogyLogo from "../../../Assets/Images/digitalogyLogo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default class MainNavBar extends Component {
  state = {
    search: false,
  };

  handleSearch = () => {
    this.setState((prevState) => {
      return {search: !prevState.search};
    });
  };
  render() {
    return (
      <div className='Nav-top justify-content-between'>
        <NavLink to='/app-co' className='Nav-top-logo'>
          <img src={digitalogyLogo} alt='Logo' />
        </NavLink>
        <div className='d-flex'>
          {this.state.search ? (
            <div className='searchNav w3-animate-top'>
              <input
                type='text'
                className='inputDashSearch'
                placeholder='Search..'
              />
              <div className='input-group-append'>
                <button
                  className='btn pl-4'
                  type='button'
                  onClick={this.handleSearch}>
                  <FontAwesomeIcon icon={faSearch} size='2x' color='#dedede' />
                </button>
              </div>
            </div>
          ) : (
            <button
              className='btn px-3 pt-2'
              type='button'
              onClick={this.handleSearch}>
              <FontAwesomeIcon icon={faSearch} size='2x' color='#dedede' />
            </button>
          )}
          <button className='btn px-3' type='button'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
              <path
                fill='#666'
                fillRule='evenodd'
                d='M19.216 17.551H13.52C13.252 18.894 11.723 20 9.985 20c-1.738 0-3.268-1.106-3.535-2.449H.753c-.283 0-.513-.183-.513-.408 0-.226.23-.409.513-.409 2.493 0 2.836-2.43 2.836-5.055V6.781c0-2.387 2.158-4.373 5-4.805-.088-.154-.142-.322-.142-.502C8.447.799 9.136.25 9.985.25c.848 0 1.539.549 1.539 1.224 0 .218-.091.412-.217.589 2.634.555 4.59 2.45 4.59 4.718v4.898c0 1.52.324 5.055 3.319 5.055.284 0 .513.183.513.409 0 .225-.229.408-.513.408zm-9.231 1.632c1.262 0 2.249-.796 2.502-1.632H7.483c.252.836 1.24 1.632 2.502 1.632zm0-18.117c-.283 0-.513.183-.513.408 0 .226.23.409.513.409.283 0 .513-.183.513-.409 0-.225-.23-.408-.513-.408zm4.886 10.613V6.781c0-2.251-2.3-4.082-5.128-4.082-2.827 0-5.128 1.831-5.128 4.082v4.898c0 1.366 0 3.792-1.423 5.055h13.506c-1.183-.943-1.827-2.675-1.827-5.055z'
              />
            </svg>
          </button>
          <div className='ToggleMain mx-3' onClick={this.props.open}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
