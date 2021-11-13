import React, { useState } from "react";
import { faSearch, faBell, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./fourth.css";
export default function fourthrow() {
  const [state, setstate] = useState("");
  return (
    <div>
      <div className="row mx-3">
        <div className="col ">
          <div className="ss">
            <div className="switch d-flex justify-content-between align-items-center">
              <div className="task font-switch switch-selected">Task</div>
              <div className="remainder font-switch">Reminder</div>
            </div>
          </div>
        </div>
        <div className="col  d-flex flex-row-reverse align-items-center">
          <div className="one">
            <div className="create-box text-center mx-5 p-3 ">
              <span class="mx-3">
                <FontAwesomeIcon icon={faPlus} className="faPlus " />
              </span>
              <span className="font-create2"> New Task</span>
            </div>
          </div>
          <div className="tow">
            <span className="set-a-goal-to-track">
              <select class="sort_bg" id="inlineFormCustomSelect">
                <option selected>Sort</option>
                <option value="1">Sort1 </option>
                <option value="2">Sort2</option>
                <option value="3">Sort3</option>
              </select>
            </span>
          </div>
          <div className="dash span6 mx-2"> </div>
          <div className="Filter">
            <span className="sort_bg">Filter</span>
          </div>
        </div>
      </div>

      <div className="row mx-5">
        <div className="col">
          <div className="radio_box d-flex align-items-center justify ">
            <div className="row mx-4">
              <div className="col-lg-3 col-md-3 col-sm-3  ">
                <div className="round">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox"></label>
                </div>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 writetodo">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Write a to-do and hit enter…"
                  classname="form-control "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
    </div>
  );
}
