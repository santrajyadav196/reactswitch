import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import oval from "../../../../../Assets/assetsnew/oval.svg";
import deletef from "../../../../../Assets/assetsnew/delete.svg";
import edit from "../../../../../Assets/assetsnew/edit.svg";
import delete2 from "../../../../../Assets/assetsnew/delete.svg";
import more from "../../../../../Assets/assetsnew/more.svg";
export default function file() {
  const [startDate, setStartDate] = useState(new Date());

  let list = [
    {
      name: "amit",
      type: "ddd",
      date: "new Date()",
      size: "1mb",
    },
  ];

  return (
    <div>
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
        <div className="col">
          <table className="table tble table-borderless">
            <thead className="table_head ">
              <th scope="col-6" className="thead-txt col-5">
                Name{" "}
              </th>
              <th scope="col-1" className="thead-txt col-2">
                Type
              </th>

              <th scope="col-1" className="thead-txt col-2">
                Date
              </th>
              <th scope="col-1" className="thead-txt col-1">
                Size
              </th>

              <th scope="col-3" className="thead-txt col-2"></th>
            </thead>

            <tbody>
              {list.map((item, index) => {
                return (
                  <>
                    <tr className="tbdy-cell">
                      <td className="td_txt ">{item.name}</td>
                      <td className="td_txt">{item.type}</td>
                      <td className="td_txt">{item.date}</td>
                      <td className="td_txt">{item.size}</td>

                      <td className="td_txt">
                        <span className="mx-2 ">
                          {" "}
                          <i class="fa fa-eye" style={{ fontSize: "24px" }}></i>
                        </span>
                        <span className="mx-2">
                          <img src={edit} alt="edit" />
                        </span>
                        <span className="mx-2">
                          {" "}
                          <img src={delete2} alt="delete2" />
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
  );
}
