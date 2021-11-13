import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronDown,
  faDownload,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import "./transaction.css";

import edit from "../../../../../Assets/assetsnew/edit.svg";
import attachment from "../../../../../Assets/assetsnew/attachment-line.svg";
import more from "../../../../../Assets/assetsnew/more.svg";

import closen from "../../../../../Assets/assetsnew/close-circle-line-3.svg";

import NeWExpenseModal from "./new_expnse_txn";

export default function transaction() {
  const [startDate, setStartDate] = useState(new Date());

  let list = [
    {
      desc: "description",
      sm: "ssnasjdfajsd",
      category: "category",
      date: "21/12/1996",
      amount: "499",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="header_txn">
            <div className="row">
              <div className="col-8 d-flex flex-row">
                <div
                  className="new_expnse_txn text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#new_expnse_txn"
                >
                  <span class="mx-3">
                    <FontAwesomeIcon icon={faPlus} className="faPlus " />
                  </span>
                  <span className=""> New Expense </span>
                </div>
                <NeWExpenseModal />
                {/* <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">asdjfasdjhfasjdh</div>
                  </div>
                </div>
                */}
                <div className="dropdown_txn">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="faChevronDown"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul
                    class="dropdown-menu"
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
                </div>
                <div
                  className="bulk_edit_txn"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Bulk Edit</span>
                  <FontAwesomeIcon icon={faChevronDown} className="ml-3" />
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
              </div>
              <div className="col-4">
                <div className="col  d-flex flex-row-reverse align-items-center">
                  <div className="ml-4 download_txn d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faDownload} className=" " />
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
                                  <div className="btn-cancel">
                                    Clear Filters
                                  </div>
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
            <div className="row mt-5">
              <div className="col">
                <table className="table tble table-borderless">
                  <thead className="table_head ">
                    <th scope="col" className="thead-txt">
                      Description
                    </th>
                    <th scope="col" className="thead-txt">
                      Source/Merchant
                    </th>

                    <th scope="col" className="thead-txt">
                      Category
                    </th>
                    <th scope="col" className="thead-txt">
                      Date{" "}
                    </th>

                    <th scope="col" className="thead-txt">
                      Amount{" "}
                    </th>
                    <th scope="col" className="thead-txt"></th>
                  </thead>

                  <tbody>
                    {list.map((item, index) => {
                      return (
                        <>
                          <tr className="tbdy-cell  ">
                            <td className="td_txt ">
                              <span style={{ color: "#6d5ed3" }}>
                                {" "}
                                <FontAwesomeIcon icon={faArrowUp} />{" "}
                              </span>
                              {item.desc}
                            </td>
                            <td className="td_txt">{item.sm}</td>
                            <td className="td_txt">{item.category}</td>
                            <td className="td_txt">{item.date}</td>
                            <td className="td_txt">
                              <div>{item.amount}</div>
                            </td>
                            <td className="td_txt">
                              <span
                                className="mx-2"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <img src={edit} alt="edit" />
                              </span>
                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content edit_pymnt_txn">
                                    <div className="row">
                                      <div className="col-9">
                                        <span className=" mt-1 font_d_clnt_edt_tsk">
                                          Edit Payment{" "}
                                        </span>
                                      </div>
                                      <div className="col-3 d-flex flex-row-reverse">
                                        <img src={closen} alt="" />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <span className="subttle_txn_edt">
                                          Payment created 30 Jul, 2021
                                        </span>
                                      </div>
                                    </div>
                                    <div className="row mt-3">
                                      <div className="col">
                                        <form action="">
                                          <div className="row">
                                            <div className="col">
                                              <label
                                                htmlFor=""
                                                className="input_label_tsk_frm"
                                              >
                                                Amount
                                              </label>
                                              <div className="form-control due_date_tsk_dlog_inputtxn">
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  placeholder=""
                                                />
                                                <span
                                                  className="left_dropdwn"
                                                  id="dropdownMenuButton1"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                >
                                                  <span>INR</span>
                                                  <span className="ml-3">
                                                    <FontAwesomeIcon
                                                      icon={faChevronDown}
                                                    />
                                                  </span>
                                                </span>

                                                <ul
                                                  className="dropdown-menu"
                                                  aria-labelledby="dropdownMenuButton1"
                                                >
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      href="#"
                                                    >
                                                      Action
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      href="#"
                                                    >
                                                      Another action
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      className="dropdown-item"
                                                      href="#"
                                                    >
                                                      Something else here
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="row mt-4">
                                            <div className="col">
                                              <label
                                                htmlFor=""
                                                className="input_label_tsk_frm"
                                              >
                                                Date
                                              </label>
                                              <DatePicker
                                                className="form-control due_date_tsk_dlog_inputtxn"
                                                selected={startDate}
                                                onChange={(date) =>
                                                  setStartDate(date)
                                                }
                                              />
                                              {/* <span className="left_dropdwn">
                                                <FontAwesomeIcon
                                                  icon={faCalendar}
                                                />
                                              </span> */}
                                            </div>
                                          </div>
                                          <div className="row mt-4">
                                            <div className="col">
                                              <div className="btn-cancel">
                                                Cancel
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="btn-save">
                                                Save
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span className="mx-2">
                                {" "}
                                <img src={attachment} alt="delete2" />
                              </span>
                              <span className="mx-2 img_more">
                                {" "}
                                <img src={more} alt="more" className="" />
                                <div className="more">
                                  <div className="jj Archive-Clients mt-3">
                                    Archive Clients
                                  </div>
                                  <div className="jj Archive-Clients my-3">
                                    Delete Client
                                  </div>
                                </div>
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
