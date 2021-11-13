import React from "react";
import Header from "../header/header";

import SecondRow from "../dashboard/secondrow/secondrow";
import ThirdRow from "../dashboard/thirdrow/thirdrow";
import FourthRow from "../dashboard/fourthrow/fourthrow";

import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";

import "./dashboard.css";

function dashboard() {
  return (
    <>
      <div className="row">
        <SideNavDrawer />
        <div className="col-lg-9 col-md-10 col-sm-10  bg">
          <Header title=" My Desk" />
          <div className="row mt-5">
            <div className="col">
              <div className="Hello-James">
                <span>Hello James!</span>
              </div>
              <div className="Lets-get-you-set-up">
                Let’s get you set up with Unity.co
              </div>
            </div>
          </div>
          <SecondRow />
          <ThirdRow />
          <FourthRow />
        </div>
      </div>
    </>
  );
}

export default dashboard;
