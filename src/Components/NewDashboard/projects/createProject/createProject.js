import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import crossbtn from "../../../../Assets/Images/crossbtn.svg";
import servicesvg from "../../../../Assets/assetsnew/service.svg";
import calendarsvg from "../../../../Assets/assetsnew/calendar.svg";

import SuccsesModal from "./successDialog";

export default function createProject() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div
        class="modal fade"
        id="create_project"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-custom">
          <div class="modal-content modal_width_create">
            <div className="head_cdb ">
              <div className="row ">
                <div className="col ">
                  <div className="icons_side " data-bs-dismiss="modal">
                    <span className="closebtn ">
                      <img src={crossbtn} alt="crossbtn" />
                    </span>

                    <span className="close_text mx-3 pt-3">Close</span>
                  </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center ">
                  <div className="Create-Client ">Create Project</div>
                </div>
                <div className="col"></div>{" "}
              </div>
            </div>

            <div className="row">
              <div className=" col d-flex justify-content-center align-items-center">
                <div>
                  <div className="row mt-4 mb-3">
                    <div className="col">
                      <div className="span_head_txt_prp d-flex justify-content-center">
                        Create your project
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col">
                      <form action="">
                        <div className="fst_box  mb-4">
                          <div className="mb-3">
                            <label htmlFor="" class="form-label p_frm_lbl">
                              Project Name
                            </label>
                            <input
                              type="text"
                              class="form-control p_frm_inpt"
                              placeholder="Medical Health Care"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="" class="form-label p_frm_lbl">
                              Client
                            </label>
                            <select
                              class="form-control p_frm_inpt"
                              aria-label="Default select example"
                            >
                              <option selected disabled>
                                Choose Client
                              </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <span class="input-group-btn">
                              <i class="glyphicon glyphicon-menu-down"></i>
                            </span>
                          </div>

                          <div className="mb-3">
                            <div className="row">
                              <div className="col">
                                <label htmlFor="" class="form-label p_frm_lbl">
                                  Start
                                </label>
                                <DatePicker
                                  className="form-control due_date_tsk_dlog_input"
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                              </div>
                              <div className="col">
                                <label htmlFor="" class="form-label p_frm_lbl">
                                  End
                                </label>
                                <DatePicker
                                  className="form-control due_date_tsk_dlog_input"
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="fst_box mb-4">
                          <div class="accordion-item aac_item">
                            <h2
                              class="accordion-header"
                              id="panelsStayOpen-headingTwo"
                            >
                              <button
                                class="accordion-button collapsed btn_aa"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo"
                              >
                                <div className="row">
                                  <div className="col-2">
                                    <img src={servicesvg} alt="" />
                                  </div>
                                  <div className="col-10">
                                    <div className="row">
                                      <div className="col">
                                        <span className="service_txt">
                                          Services
                                        </span>
                                        <div>
                                          <span className="service_txt_sub">
                                            Describe and price the services
                                            you’ll be delivering.
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseTwo"
                              class="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingTwo"
                            >
                              <div class="accordion-body">
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="fst_box mb-4">
                          <div class="accordion-item aac_item">
                            <h2
                              class="accordion-header"
                              id="panelsStayOpen-headingTwo"
                            >
                              <button
                                class="accordion-button collapsed btn_aa"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo"
                                aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo"
                              >
                                <div className="row">
                                  <div className="col-2">
                                    <img src={calendarsvg} alt="" />
                                  </div>
                                  <div className="col-10">
                                    <div className="row">
                                      <div className="col">
                                        <span className="service_txt">
                                          Billing Schedule
                                        </span>
                                        <div>
                                          <span className="service_txt_sub">
                                            Set deposit amount, invoice dates,
                                            and reminders.
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseTwo"
                              class="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingTwo"
                            >
                              <div class="accordion-body">
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="submit_btn"
                          data-toggle="modal"
                          data-target="#successModal"
                        >
                          Create Proposal
                        </div>
                        <SuccsesModal />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
