import React from "react";
import "./thirdrow.css";

export default function thirdrow() {
  return (
    <div className="row ml-1 ">
      <div className="col">
        <div className="thirdContainerRectangle ">
          <div className="row">
            <div className="col">
              <div className="set-a-goal-to-track">
                <span>Set a goal to track your progress</span>
              </div>
            </div>
          </div>

          <div className="row mt-5  ">
            <div className="col d-flex flex-row  align-items-center">
              <div className="i-want-invoice">I want to invoice</div>

              <div className="form_btn mx-3 d-flex flex-row  flex-wrap">
                <span className="dollar-inds ">$ </span>
                <span className="">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="0"
                    className="dollar-inds   input-d"
                  ></input>
                </span>
              </div>

              <span className="set-a-goal-to-track">
                <select
                  class="set-a-goal-to-track inpt_grp"
                  id="inlineFormCustomSelect"
                >
                  <option selected>in the next 30 days</option>
                  <option value="1">in one weeks </option>
                  <option value="2">in one year</option>
                  <option value="3">every day</option>
                </select>
              </span>

              <span className="set-a-goal-to-track d-flex flex-row  flex-wrap set_btn mx-3">
                Set Goal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
