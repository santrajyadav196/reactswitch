import React, { useContext, useState } from "react";
import crossbtn from "../../../../Assets/Images/crossbtn.svg";

import { MDBCreateContext } from "../../MDBContext/MBDContext";
import ReviewEdit from "./ReviewEditContract";
import Setup from "./Setup";

export default function CreateContracts() {
  const [global, setGlobal] = useContext(MDBCreateContext);
  const [startDate, setStartDate] = useState(new Date());

  const closebtn = () => {
    setGlobal({ closeContracts: !global.closeContracts });
  };

  const ConditionForUi = () => {
    if (global.createContractsIsSetup) {
      return <>Review</>;
    } else {
      return <Setup />;
    }
  };

  return (
    <div>
      <div className="showdddd">
        <div className="head_cdb ">
          <div className="row ">
            <div className="col ">
              <div className="icons_side ">
                <span className="closebtn " onClick={closebtn}>
                  <img src={crossbtn} alt="crossbtn" />
                </span>

                <span className="close_text mx-3 pt-3">Close</span>
              </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center ">
              <div className="Create-Client ">Create Contracts</div>
            </div>
            <div className="col"></div>{" "}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col steps active-steps">Setup</div>
          <div className="col steps active-steps ml1_">Review</div>
          <div className="col steps ml1_">Send</div>
        </div>
        {false ? (
          <Setup />
        ) : (
          <>
            <ReviewEdit />
          </>
        )}{" "}
      </div>
    </div>
  );
}
