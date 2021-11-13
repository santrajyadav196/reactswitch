import React from "react";
import ProfileIcon from "../../../../Assets/Images/profile.svg";
import crossbtn from "../../../../Assets/Images/crossbtn.svg";

import "./item.css";
export default function item() {
  return (
    <div>
      <div className="reactanglebox">
        <div className="row">
          <div className="col">

            <div className="img_profile">
              <img src={ProfileIcon} alt="" className="src mt-5 mx-4 proicon" />
            </div>
          </div>
          <div className="col d-flex flex-row-reverse ">
            <img src={crossbtn} alt="crossbtn" className="cross_btn-i mt-4 mx-4" />

          </div>
        </div>
        <div className="row mt-4">
          <div className="col ">
            <span className="header_item_box_db  mx-4 ">Complete account setup</span>
          </div>
        </div>
        <div className="row mx-1 mt-2 ">
          <div className="col ">
            <span className="Set-up-your-business   ">Set up your business info, logo, brand color, and more.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
