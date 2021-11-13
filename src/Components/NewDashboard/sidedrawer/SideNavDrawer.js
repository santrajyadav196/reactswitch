import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";

import "./SideNavDrawer.css";
import logo from "../../../Assets/Images/logo.svg";
import home from "../../../Assets/Images/home.svg";
import clients from "../../../Assets/Images/clients.svg";

import Transactions from "../../../Assets/Images/transaction.svg";
import projectsnew from "../../../Assets/Images/projectsnew.svg";
import contractsnew from "../../../Assets/Images/contractsnew.svg";
import proposal from "../../../Assets/Images/proposalsnew.svg";
import subscriptionsimg from "../../../Assets/Images/subscriptionsimg.svg";
import statementimg from "../../../Assets/Images/statementimg.svg";
import shoeboximg from "../../../Assets/Images/shoeboximg.svg";
import invoicesimg from "../../../Assets/Images/invoicesimg.svg";
import timeimg from "../../../Assets/Images/timeimg.svg";

export default function SideNavDrawer(porps) {
  const homeRoute = useRouteMatch("/db/home");
  const clientRoute = useRouteMatch("/db/clients");
  const projectsRoute = useRouteMatch("/db/projects");
  const proposalRoute = useRouteMatch("/db/proposal");
  const contractsRoute = useRouteMatch("/db/contract");
  // const transactionRoute = useRouteMatch("/db/transaction");

  const transRoute = useRouteMatch("/db/transaction");
  const timerRoute = useRouteMatch("/db/timetracking");

  const subscriptionRoute = useRouteMatch("/db/subscription");
  const statementRoute = useRouteMatch("/db/statements");

  return (
    <div className="col-lg-3 col-md-3 col-sm-3 ">
      <div className="Rectangle">
        <div className="row">
          <div className="col">
            <div className="Bitmap">
              <a href="/app-co">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="navbarleft">
            <ul className="list-group">
              <li
                className={
                  homeRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color  menu-li homeimg "
                }
              >
                <a href="/db/home">
                  {" "}
                  <div className="item-text ">
                    <span class="mx-4">
                      <img src={home} alt="home" />
                    </span>
                    My Desk
                  </div>{" "}
                </a>
              </li>
              <li
                className={
                  clientRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                <a href="/db/clients">
                  <div className="item-text ">
                    <span class="mx-4">
                      <img src={clients} alt="clients" />
                    </span>
                    clients
                  </div>{" "}
                </a>
              </li>
              <li
                className={
                  projectsRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                <a href="/db/projects">
                  <div className="item-text">
                    <span class="mx-4">
                      {" "}
                      <img src={projectsnew} alt="projectsnew" />
                    </span>
                    Projects
                  </div>
                </a>
              </li>
              <li
                // className="list-group-item item-notselected font-color mt-1 menu-li"
                className={
                  transRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                <a href="/db/transaction">
                  <div className="item-text">
                    <span class="mx-4">
                      {" "}
                      <img src={Transactions} alt="Transactions" />
                    </span>
                    Transactions
                  </div>
                </a>
              </li>
              <li
                className={
                  proposalRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                <a href="/db/proposal">
                  <div className="item-text">
                    <span class="mx-4">
                      {" "}
                      <img src={proposal} alt="proposal" />
                    </span>
                    Proposals
                  </div>
                </a>
              </li>
              {/* //contractsRoute */}
              <li
                className={
                  contractsRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                <a href="/db/contract">
                  <div className="item-text">
                    <span class="mx-4">
                      {" "}
                      <img src={contractsnew} alt="contractsnew" />
                    </span>
                    Contracts
                  </div>
                </a>
              </li>
              <li className="list-group-item item-notselected font-color mt-1 menu-li">
                <div className="item-text">
                  <span class="mx-4">
                    {" "}
                    <img src={invoicesimg} alt="invoicesimg" />
                  </span>
                  Invoices
                </div>
              </li>
              <li
                // className="list-group-item item-notselected font-color mt-1 menu-li"
                className={
                  timerRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                <a href="/db/timetracking">
                  <div className="item-text">
                    <span class="mx-4">
                      <img src={timeimg} alt="timeimg" />
                    </span>
                    Time Tracking
                  </div>
                </a>
              </li>
              {/* <li className='list-group-item item-notselected font-color mt-1 menu-li'>
                <div className='item-text'>
                  <span class='mx-4'>
                    <img src={timeimg} alt='timeimg' />
                  </span>
                  Time Tracking
                </div>
              </li> */}
              <li className="list-group-item item-notselected font-color mt-1 menu-li">
                <div className="item-text">
                  <span class="mx-4">
                    {" "}
                    <img src={shoeboximg} alt="shoeboximg" />
                  </span>
                  Shoebox
                </div>
              </li>{" "}
              <li
                className={
                  statementRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                {" "}
                <a href="/db/statements">
                  <div className="item-text">
                    <span class="mx-4">
                      {" "}
                      <img src={statementimg} alt="statementimg" />
                    </span>
                    Statements
                  </div>
                </a>
              </li>{" "}
              <li
                className={
                  subscriptionRoute
                    ? "list-group-item item-selected  menu-li"
                    : "list-group-item item-notselected font-color mt-1 menu-li "
                }
              >
                {" "}
                <a href="/db/subscription">
                  <div className="item-text">
                    <span class="mx-4">
                      {" "}
                      <img src={subscriptionsimg} alt="subscriptionsimg" />
                    </span>
                    Subscriptions
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
