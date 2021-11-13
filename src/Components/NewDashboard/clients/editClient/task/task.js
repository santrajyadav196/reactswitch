import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import oval from "../../../../../Assets/assetsnew/oval.svg";
import play from "../../../../../Assets/assetsnew/play-fill-1.svg";
import time from "../../../../../Assets/assetsnew/time-line-3.svg";
import checkbox from "../../../../../Assets/assetsnew/checkboxcircleline.svg";
import edit from "../../../../../Assets/assetsnew/edit.svg";
import deletef from "../../../../../Assets/assetsnew/delete.svg";

import "./tasl.css";

export default function task() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="row">
        <div className="col">
          <span className="Contact-Lists ">Tasks List</span>
        </div>
        <div className="col d-flex flex-row-reverse ">
          <div
            className="Oval"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FontAwesomeIcon icon={faPlus} className="faPlus text-white " />
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content edit_modal_tsk">
                <div className="row">
                  <div className="col-9">
                    <img src={oval} alt="" className="mb-1" />

                    <span className="mx-2 mt-1 font_d_clnt_edt_tsk">
                      Create a mobile app design
                    </span>
                  </div>
                  <div className="col-3 d-flex flex-row-reverse">
                    <img src={deletef} alt="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <form action="">
                      <div className="row">
                        <div className="col">
                          <label htmlFor="" className="input_label_tsk">
                            Add Details…
                          </label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control input_label_tsk_frm"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <label htmlFor="" className="due_date_tsk_dlog_lbl">
                            Due Date
                          </label>
                          <DatePicker
                            className="form-control due_date_tsk_dlog_input"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                        <div className="col">
                          {" "}
                          <label htmlFor="" className="due_date_tsk_dlog_lbl">
                            Hide Until
                          </label>
                          <DatePicker
                            className="form-control due_date_tsk_dlog_input"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <label htmlFor="" className="due_date_tsk_dlog_lbl">
                            Lists
                          </label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control due_date_tsk_dlog_input"
                            placeholder="List"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <label htmlFor="" className="due_date_tsk_dlog_lbl">
                            Assign To
                          </label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control due_date_tsk_dlog_input"
                            placeholder="Project"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control due_date_tsk_dlog_input"
                            placeholder="Client"
                          />
                        </div>
                      </div>

                      <div className="row ml-2 mt-3">
                        <div className="col">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label repeat_tsk_tsk"
                            for="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col">
                          <div className="btn-cancel">Cancel</div>
                        </div>
                        <div className="col">
                          <div className="btn-save">Save</div>
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
      <div className="row mt-5">
        <div className="col  ">
          <div className="boxlist ">
            <div className="row">
              <div className="col text-center d-flex flex-row">
                <div className="todo to-do  selected_todo">
                  <div className="text-center ">To Do</div>
                  <div className="bottom_dash1"></div>
                </div>
                <div className="to-do">
                  Future
                  <div className="bottom_dash"></div>
                </div>
                <div className="to-do">
                  Done
                  <div className="bottom_dash"></div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <table class=" tablebor">
                  <thead className="tablegrey">
                    <tr className="mx-3">
                      <th scope="col" className=" col-6 title_due">
                        Title
                      </th>
                      <th scope="col" className="col-2 title_due">
                        Due
                      </th>
                      <th scope="col" className="col-1 "></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="trheight">
                      <td className="align-middle td_item_clinet">
                        <span>
                          <img src={oval} alt="" />
                        </span>
                        <span className="needtodesign">
                          Need to design client Screen
                        </span>
                      </td>
                      <td className="align-middle td_item_clinet2">Otto</td>
                      <td className="padding_right_td">
                        <div
                          className="rowflex d-flex justify-content-between
                           
                            flex-row "
                        >
                          <div>
                            <img src={play} alt="" />
                          </div>
                          <div>
                            <img src={edit} alt="" />
                          </div>
                          <div>
                            <img src={time} alt="" />
                          </div>
                          <div>
                            <img src={checkbox} alt="" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
