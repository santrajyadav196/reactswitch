import React from "react";
import closen from "../../../../Assets/assetsnew/close-circle-line-3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function fiter() {
  return (
    <div
      className="modal fade"
      id="project_filter"
      tabindex="-1"
      aria-labelledby="filterModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg rModal_pos">
        <div className="modal-content height_modal">
          <div className="row mt-4">
            <div className="col-9">
              <span className=" mt-1 font_d_clnt_edt_tsk">Filter</span>
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
                    <label htmlFor="" className="due_date_tsk_dlog_lbl">
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
                    <label htmlFor="" className="due_date_tsk_dlog_lbl">
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
                    <label htmlFor="" className="due_date_tsk_dlog_lbl">
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
  );
}
