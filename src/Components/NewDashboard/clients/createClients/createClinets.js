import React, { useState, useEffect, useContext } from "react";
import crossbtn from "../../../../Assets/Images/crossbtn.svg";

import { MDBCreateContext } from "../../MDBContext/MBDContext";

import "./createClinets.css";

export default function createClinets() {
  const [global, setGlobal] = useContext(MDBCreateContext);
  const closebtn = () => {
    setGlobal({ closeDialog: !global.closeDialog });
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
              <div className="Create-Client ">Create Client</div>
            </div>
            <div className="col"></div>{" "}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col"></div>
          <div className="col s d-flex justify-content-center align-items-center">
            <span className="Whos-your-client ">Who’s your client?</span>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center align-items-center"></div>
          <div className="col d-flex justify-content-center align-items-center">
            <form action="">
              <div className="row text-center ">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className=" form-e form-e-font"
                      placeholder="Digi Studio Agency"
                    />
                  </div>
                </div>
              </div>
              <div className="row  mt-3 ">
                <div className="col ">
                  <div className=" ml-r">
                    <label
                      for="exampleInputEmail1"
                      className="form-labe frm-labl "
                    >
                      Contact Name
                    </label>
                  </div>
                </div>
              </div>
              <div className="row text-center ">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="text"
                      className=" form-e form-e-font"
                      placeholder="James Andrison"
                    />
                  </div>
                </div>
              </div>
              <div className="row  mt-3 ">
                <div className="col ">
                  <div className=" ml-r">
                    <label
                      for="exampleInputEmail1"
                      className="form-labe frm-labl "
                    >
                      Contact Email
                    </label>
                  </div>
                </div>
              </div>{" "}
              <div className="row text-center ">
                <div className="col">
                  <div className="mb-3">
                    <input
                      type="email"
                      className=" form-e form-e-font"
                      placeholder="jmandreson@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row  mt-3 ">
                    <div className="col ">
                      <div className=" ml-r">
                        <label
                          for="exampleInputEmail1"
                          className="form-labe frm-labl "
                        >
                          City
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row  mt-3 ">
                    <div className="col ">
                      <div className=" ml-r">
                        <label
                          for="exampleInputEmail1"
                          className="form-labe frm-labl "
                        >
                          Zip Code
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row text-center ">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          type="txt"
                          className=" form-e-hl form-e-font"
                          placeholder="New York"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-center ">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          type="Number"
                          className=" form-e-hl form-e-font"
                          placeholder="129921"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="row">
                <div className="col">
                  <div className="row  mt-3 ">
                    <div className="col ">
                      <div className=" ml-r">
                        <label
                          for="exampleInputEmail1"
                          className="form-labe frm-labl "
                        >
                          Country
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row  mt-3 ">
                    <div className="col ">
                      <div className=" ml-r">
                        <label
                          for="exampleInputEmail1"
                          className="form-labe frm-labl "
                        >
                          State
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="row">
                <div className="col">
                  {" "}
                  <div className="row text-center ">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          type="txt"
                          className=" form-e-hl form-e-font"
                          placeholder="United States"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-center ">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          type="txt"
                          className=" form-e-hl form-e-font"
                          placeholder="New York"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="row mt-2">
                <div className="col text-center">
                  <button type="button" class=" btn_cc">
                    Create Client
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col d-flex justify-content-center align-items-center"></div>
        </div>
      </div>
    </div>
  );
}
