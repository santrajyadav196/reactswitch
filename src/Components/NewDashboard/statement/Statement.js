/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SideNavDrawer from "../sidedrawer/SideNavDrawer";
import Header from "../header/header";

import "./Statements.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import closen from "../../../Assets/assetsnew/close-circle-line-3.svg";
import IncomeStatement from "./IncomeStatement";
import ExportData from "./ExportData";

export default function Statement() {
  const [postionTopSelector, setPostionTopSelector] =
    useState("Income Statement");
  const updateTopSelector = (value) => {
    setPostionTopSelector(value);
  };
  const Uirender = () => {
    switch (postionTopSelector) {
      case "Income Statement":
        return (
          <>
            <IncomeStatement />
          </>
        );

      default:
        return <> position</>;
    }
  };

  return (
    <div>
      <div className="row">
        <SideNavDrawer />
        <div className="col-lg-9 col-md-9 col-sm-9  bg">
          <Header title={"Statements"}></Header>
          <div className="row">
            <div className="col-8">
              <div className="statement_bc_m d-flex justify-content-between align-items-center tasks">
                <div
                  className={
                    postionTopSelector === "Income Statement"
                      ? "selected_head_item"
                      : "not_selected_first"
                  }
                  onClick={() => {
                    updateTopSelector("Income Statement");
                  }}
                >
                  Income Statement
                </div>
                <div
                  className={
                    postionTopSelector === "Expense Report"
                      ? "selected_head_item"
                      : ""
                  }
                  onClick={() => {
                    updateTopSelector("Expense Report");
                  }}
                >
                  Expense Report
                </div>
                <div
                  className={
                    postionTopSelector === "Tax Report"
                      ? "selected_head_item"
                      : "not_selected_last"
                  }
                  onClick={() => {
                    updateTopSelector("Tax Report");
                  }}
                >
                  Tax Report
                </div>
              </div>
            </div>
            <div className="col-4 ">
              <div className="  d-flex flex-row-reverse align-items-center flex_bx">
                <div
                  className="ml-4 download_txn d-flex justify-content-center align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#exportData"
                >
                  <FontAwesomeIcon icon={faDownload} className=" " />
                </div>
                <ExportData />
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
                <div
                  className="Filter"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                >
                  <span className="sort_bg">Filter</span>
                </div>
                <div
                  className="modal fade"
                  id="filterModal"
                  tabindex="-1"
                  aria-labelledby="filterModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg rModal_pos">
                    <div className="modal-content height_modal">
                      <div className="row mt-4">
                        <div className="col-9">
                          <span className=" mt-1 font_d_clnt_edt_tsk">
                            Filter
                          </span>
                        </div>
                        <div className="col-3 d-flex flex-row-reverse">
                          <img src={closen} alt="" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <form action="">
                            <div className="row mt-5">
                              <div className="col">
                                <label
                                  htmlFor=""
                                  className="due_date_tsk_dlog_lbl"
                                >
                                  Date Range
                                </label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  className="form-control due_date_tsk_dlog_input"
                                  placeholder="All Time"
                                />
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col">
                                <label
                                  htmlFor=""
                                  className="due_date_tsk_dlog_lbl"
                                >
                                  Project
                                </label>

                                {/* <div
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder="All Project"
                                      className="form-control due_date_tsk_dlog_input"
                                    />
                                  </div> */}

                                <div
                                  class="input-group due_date_tsk_dlog_input"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <input
                                    type="text"
                                    class="form-control mt-2"
                                    name=""
                                    id=""
                                    placeholder="All Project"
                                    style={{ border: "none" }}
                                  />
                                  <span
                                    class="input-group-text left_icon_dd"
                                    id="basic-addon2"
                                  >
                                    <FontAwesomeIcon
                                      icon={faChevronDown}
                                      className="faChevronDown "
                                    />
                                  </span>
                                </div>

                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </li>
                                </ul>

                                {/* <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="form-control due_date_tsk_dlog_input"
                                    placeholder="All Time"
                                    value="All Time"
                                  /> */}
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col">
                                <label
                                  htmlFor=""
                                  className="due_date_tsk_dlog_lbl"
                                >
                                  Status
                                </label>

                                {/* <div
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder="All Project"
                                      className="form-control due_date_tsk_dlog_input"
                                    />
                                  </div> */}

                                <div
                                  class="input-group due_date_tsk_dlog_input"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <input
                                    type="text"
                                    class="form-control mt-2"
                                    name=""
                                    id=""
                                    placeholder="All Transaction"
                                    style={{ border: "none" }}
                                  />
                                  <span
                                    class="input-group-text left_icon_dd"
                                    id="basic-addon2"
                                  >
                                    <FontAwesomeIcon
                                      icon={faChevronDown}
                                      className="faChevronDown "
                                    />
                                  </span>
                                </div>

                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </li>
                                </ul>

                                {/* <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="form-control due_date_tsk_dlog_input"
                                    placeholder="All Time"
                                    value="All Time"
                                  /> */}
                              </div>
                            </div>

                            <div className="row mt-4">
                              <div className="col">
                                <div className="btn-cancel">Clear Filters</div>
                              </div>
                              <div className="col">
                                <div className="btn-save">Apply</div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Uirender />
        </div>
      </div>
    </div>
  );
}
