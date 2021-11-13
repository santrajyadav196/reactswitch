import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import LineTo from "react-lineto";
import "react-datepicker/dist/react-datepicker.css";
import { MDBCreateContext } from "../../MDBContext/MBDContext";

// import crossbtn from "../../../../Assets/Images/crossbtn.svg";
import servicesvg from "../../../../Assets/assetsnew/service.svg";
import calendarsvg from "../../../../Assets/assetsnew/calendar.svg";
import ColoredLine from "../../../../utils/ColredLine";

//setup file include
export default function Setup() {
  const [startDate, setStartDate] = useState(new Date());

  const [global, setGlobal] = useContext(MDBCreateContext);

  const goToReview = () => {
    setGlobal((global.createContractsIsSetup = true));
    // alert("called");
  };

  return (
    <div className="row ">
      <div className="col"></div>
      <div className="col ">
        <div className="create_your_proposal d-flex justify-content-center items-align-center mb-4">
          <span className="create_your_propodal">Create your contracts</span>
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

                <div className="mb-3">
                  <span className="iwant_create_span">I want to create a</span>
                </div>
                <div className="box_conainer_proposal_want d-flex flex-row flex-wrap  justify-content-between">
                  <div className="shadow_d_09 mb-2 selected_shadow_d_09">
                    Proposal and contract
                  </div>
                  <div className="shadow_d_09 mb-2">Proposal and contract</div>
                  <div className="shadow_d_09 mb-2">Proposal and contract</div>
                </div>
              </div>

              <div className="fst_box mb-4">
                <div class="accordion-item aac_item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
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
                              <span className="service_txt">Services</span>
                              <div>
                                <span className="service_txt_sub">
                                  Describe and price the services you’ll be
                                  delivering.
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
                      <div className="mb-3">
                        <label htmlFor="" class="form-label p_frm_lbl">
                          Service Name
                        </label>
                        <input
                          type="text"
                          class="form-control p_frm_inpt"
                          placeholder="Mobile App Design"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row">
                        <span>
                          <label htmlFor="" class="form-label p_frm_lbl">
                            Rate
                          </label>
                          <input
                            type="text"
                            class="form-control p_frm_inpt with_rate"
                            placeholder="$500"
                          />
                        </span>
                        <span className="ml-3">
                          <label htmlFor="" class="form-label p_frm_lbl">
                            Flat Fee
                          </label>
                          <select
                            class="form-control p_frm_inpt with_flat_f"
                            name=""
                            id=""
                          >
                            <option selected disabled>
                              Per Hour
                            </option>
                            <option>two</option>
                            <option>three</option>
                          </select>
                        </span>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" class="form-label p_frm_lbl">
                          Description
                        </label>
                        <input
                          type="text"
                          class="form-control p_frm_inpt"
                          placeholder="Sample text"
                        />
                      </div>

                      <div className="servicetext mb-2">
                        <div className="row">
                          <div className="col">
                            <span className="Service-Total">Service Total</span>
                          </div>
                          <div className="col d-flex flex-row-reverse">
                            <span className="Service-Total text_colr">
                              $2700.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <ColoredLine color="#b2b6c5" />
                      <div className="lastsection mt-3">
                        <div className="row">
                          <div className="col"></div>
                          <div className="col ">
                            <div className="Add-another-Address d-flex  align-items-center flex-row-reverse">
                              <span className="ml-2">Add another Address</span>
                              <span>
                                <i class="bi bi-plus-circle"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fst_box mb-4">
                <div class="accordion-item aac_item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed btn_aa"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
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
                                  Set deposit amount, invoice dates, and
                                  reminders.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col">
                          <div className="row ml-3">
                            <div className="col">
                              <div>
                                <span>
                                  <i class="bi bi-square"></i>
                                </span>
                                <span className="ml-3">
                                  I require a deposit
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="clline ml-4">
                            <ColoredLine color="#b2b6c5" />
                          </div>
                          <div className="invoice_txt ml-4 mb-4">
                            <span>I will invoice</span>
                          </div>
                          <div className="flex_box_invoce d-flex   flex-wrap  ml-4">
                            <div className="shadow_d_09 mb-2 mr-3">Once</div>
                            <div className="shadow_d_09 mb-2 selected_shadow_d_09 mr-3">
                              Weekly
                            </div>
                            <div className="shadow_d_09 mb-2  mr-3">
                              Monthly
                            </div>
                            <div className="shadow_d_09 mb-2  mr-3">Custom</div>
                            <div className="shadow_d_09 mb-2  mr-3">
                              On Milestones
                            </div>
                          </div>
                          <div className="row ml-3  ">
                            <div className="col">
                              <span>
                                <label htmlFor="" class="form-label p_frm_lbl">
                                  Start Invoice
                                </label>
                                <input
                                  type="text"
                                  class="form-control p_frm_inpt "
                                  placeholder="15 Aug 2021"
                                />
                              </span>
                            </div>
                            <div className="col">
                              <span className="ml-3">
                                <label htmlFor="" class="form-label p_frm_lbl">
                                  End Invoice
                                </label>
                                <select
                                  class="form-control p_frm_inpt "
                                  name=""
                                  id=""
                                >
                                  <option selected disabled>
                                    Never
                                  </option>
                                  <option>two</option>
                                  <option>three</option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <div className="clock_info ml-4 mt-5 d-flex flex-row Youll-be-reminded-t  ">
                            <div>
                              <i class="bi bi-clock"></i>
                            </div>
                            <div className="ml-2">
                              You'll be reminded to invoice the deposit after
                              you create this project
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="submit_btn" onClick={goToReview}>
                Create Contracts
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}
