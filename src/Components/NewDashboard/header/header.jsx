import React from "react";
import {useHistory} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faBell, faPlus} from "@fortawesome/free-solid-svg-icons";
import PlayCircle from "../../../Assets/Images/play-circle-fill-3.svg";
import ProfileIcon from "../../../Assets/Images/profile.svg";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import invoices from "../../../Assets/assetsnew/invoiceblack.svg";
import proposal from "../../../Assets/assetsnew/proposalsm.svg";
import subscriptionsm from "../../../Assets/assetsnew/subscriptionsm.svg";
import task from "../../../Assets/assetsnew/task.svg";
import project from "../../../Assets/assetsnew/project.svg";
import xpense from "../../../Assets/assetsnew/xpense.svg";
import income from "../../../Assets/assetsnew/income.svg";
import searchBar from "../../../Assets/assetsnew/search-line-4.svg";
import notificationBar from "../../../Assets/assetsnew/notification-2-line-2.svg";
import addSymbol from "../../../Assets/assetsnew/add-line-1.svg";
import playSymbol from "../../../Assets/assetsnew/play-circle-fill-3.svg";
import profileSymbol from "../../../Assets/assetsnew/profile.svg";
import "./header.css";

export default function header({title}) {
  const history = useHistory();
  const clickHandlerSettingBtn = () => {
    history.push("/db/setting");
  };
  return (
    <div>
      <div className='container-fluid mt-4'>
        <div className='row  '>
          <div className='col-4 header-text-my-desk'>{title}</div>
          <div className='col-2  '>
            <div className='bellicon mx-3 '>
              <span>
                <FontAwesomeIcon icon={faSearch} className='faSearch' />
              </span>
              <span className='mx-4'>
                {" "}
                <FontAwesomeIcon
                  icon={faBell}
                  className=' faSearch faBell   mt-4'
                />
              </span>
            </div>
          </div>
          <div className='col-3 float-create '>
            <div className='create-box  mx-5 p-3 '>
              <span class='mx-3'>
                <FontAwesomeIcon icon={faPlus} className='faPlus ' />
              </span>
              <span className='font-create'> Create</span>
            </div>
            <div class='create_menu_float'>
              <ul className='float-menu_li mt-3'>
                <li className='ml-2'>
                  <span>
                    <img src={invoices} alt='invoices' />
                  </span>
                  <span className='mx-4'>Invoice</span>
                </li>
                <li className='ml-2 mt-4'>
                  <span>
                    <img src={proposal} alt='proposal' />
                  </span>
                  <span className='mx-4'>Proposal / Contract</span>
                </li>
                <li className='mx-2 mt-4'>
                  <span>
                    <img src={subscriptionsm} alt='subscriptionsm' />
                  </span>
                  <span className='mx-4'>Subscription</span>
                </li>
                <li className='mx-2 mt-4'>
                  <span>
                    <img src={task} alt='task' />
                  </span>
                  <span className='mx-4'>Task</span>
                </li>
                <li className='mx-2 mt-4'>
                  <span>
                    <img src={project} alt='project' />
                  </span>
                  <span className='mx-4'>Project</span>
                </li>
                <li className='mx-2 mt-4'>
                  <span>
                    <img src={xpense} alt='xpense' />
                  </span>
                  <span className='mx-4'>Expense</span>
                </li>
                <li className='mx-2 mt-4'>
                  <span>
                    <img src={income} alt='income' />
                  </span>
                  <span className='mx-4'>Income</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-3'>
            <span className='playCircle mx-3'>
              <img src={PlayCircle} alt='playcircle ' />
            </span>
            <span className='playCircle mx-3 dropdown'>
              <img src={ProfileIcon} alt='ProfileIcon' />

              <div class='dd_menu'>
                <div className='row '>
                  <div className='col-8'>
                    <div className='title_dd_title'>
                      <span className='John-Harrsion'>John Harrsion</span>
                    </div>
                    <div className='johnharrsiongmailc'>
                      <span>johnharrsion@gmail.com</span>
                    </div>
                  </div>
                  <div className='col-4  '>
                    <div style={{width: 50, height: 50}}>
                      <CircularProgressbar
                        value={50}
                        text={`${250}`}
                        styles={buildStyles({
                          rotation: 0.25,

                          strokeLinecap: "butt",

                          textSize: "16px",

                          pathTransitionDuration: 0.5,

                          pathColor: `#6d5ed3`,
                          textColor: "#000",
                          trailColor: "#d6d6d6",
                          backgroundColor: "#6d5ed3",
                        })}
                      />
                    </div>
                    <div className='Intermediate mt-2'>
                      <span>Intermediate</span>
                    </div>
                  </div>
                </div>

                <hr />

                <div className='row'>
                  <div className='col '>
                    <ul className=' list_text_db'>
                      <li
                        className='Header-Pointer mt-2'
                        onClick={clickHandlerSettingBtn}>
                        Settings
                      </li>

                      <li className=' mt-3'>Payments</li>
                      <li className=' mt-3'>Earn $20 Credit</li>

                      <li className=' mt-3'>Logout</li>
                    </ul>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <div className='upgradebtn'>
                      <span className='Upgrade-to-Pro '>Upgrade to Pro</span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      {/*  <div className="Navbar- mt-4">
            <div className="row">
              <div className="col-7">
                <div className="Navbar-Unity-Name">{title}</div>
              </div>
              <div className="col-1">
                <img src={searchBar} alt="" className="Navbar-Search" />
              </div>
              <div className="col-1">
                <img src={notificationBar}alt=""  className="Navbar-Notification" />
              </div>
              <div className="col-1">
                <div className="Navbar-Create-Rectangle">
                  <img src={addSymbol} alt="" className="Navbar-Add" />
                  <span className="Navbar-Create">Create</span>
                </div>
              </div>
              <div className="col-1">
                <img src={playSymbol} alt="" className="Navbar-Play-Icon" />
              </div>
              <div className="col-1">
                <img src={profileSymbol} alt=""  className="Navbar-Profile-Icon" />
              </div>
            </div>
          </div> */}
    </div>
  );
}
// eslint-disable-next-line no-lone-blocks
{
  /*
   */
}
