import React, { useState } from "react";
import ReactTags from "react-tag-autocomplete";
import DatePicker from "react-datepicker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "react-datepicker/dist/react-datepicker.css";
import reciptpng from "../../../../../Assets/assetsnew/receipt.svg";
import closen from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import radio_unactive from "../../../../../Assets/assetsnew/radio_button_in_active.svg";
import radio_active from "../../../../../Assets/assetsnew/radio-active.svg";
import question_circle from "../../../../../Assets/assetsnew/question_circle.svg";
import pencil_square from "../../../../../Assets/assetsnew/pencil_square.svg";
import percentline from "../../../../../Assets/assetsnew/percent-line.svg";
import repeatline from "../../../../../Assets/assetsnew/repeat-line.svg";

export default function new_expnse_txn() {
  const [tags, setTags] = useState([{ name: "tag1" }, { name: "tag2" }]);
  const [startDate, setStartDate] = useState(new Date());

  const handleAddition = (tag) => {
    console.log("add");
    setTags([...tags, tag]);
    //    const tags = [].concat(this.state.tags, tag)
    // this.setState({ tags });
  };

  const handleDelete = (tag) => {
    const ntags = tags.slice(0);
    ntags.splice(tag, 1);
    setTags(ntags);
    // this.setState({ tags });
  };
  const reactTags = [
    {
      name: "amit",
    },
    {
      name: "bharat",
    },
    {
      name: "third",
    },
    {
      name: "nose",
    },
    {
      name: "dear",
    },
  ];
  return (
    <div>
      <div
        className="modal fade"
        id="new_expnse_txn"
        tabindex="-1"
        role="dialog"
        aria-labelledby="new_expnse_txn"
      >
        <div className=" modal-dialog modal-xl ">
          <div className="modal-content">
            <div className="compelte_m">
              <div className="row">
                <div className="col ">
                  <div className="recipt d-flex justify-content-center align-items-center">
                    <div>
                      <img src={reciptpng} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <form action="">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col-9">
                            <span className=" mt-1 font_d_clnt_edt_tsk">
                              New Expense
                            </span>
                          </div>
                          <div className="col-3 d-flex flex-row-reverse">
                            <img src={closen} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col">
                        <label htmlFor="" className="due_date_tsk_dlog_lbl">
                          Assign To
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control due_date_tsk_dlog_input"
                          placeholder="All Time"
                        />
                        {/* <ReactTags
                          className="form-control due_date_tsk_dlog_input"
                          tags={tags}
                          ref={reactTags}
                          onDelete={(e) => handleDelete(e)}
                          //onAddition={handleAddition}
                          onAddition={(e) => handleAddition(e)}
                        /> */}
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <span>
                          <img src={radio_active} alt="" />
                          <label htmlFor="" className="selected_rad_in ml-2">
                            Tax deducitble
                          </label>
                        </span>
                        <span className="ml-5">
                          <img src={radio_unactive} alt="" />
                          <label
                            htmlFor=""
                            className="not_selected_rad_in ml-2"
                          >
                            Billable to client
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-6">
                        <label htmlFor="" className="due_date_tsk_dlog_lbl">
                          Total
                        </label>
                        <div className="form-control due_date_tsk_dlog_inputtxn d-flex flex-row flex-wrap">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder=""
                            className=""
                            style={{ width: "150px" }}
                          />
                          <span
                            className="left_dropdwn"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span>INR</span>
                            <span className="ml-3">
                              <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                          </span>

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
                        </div>
                      </div>
                      <div className="col">
                        {" "}
                        <label htmlFor="" className="due_date_tsk_dlog_lbl">
                          Date
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
                          Merchant
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control due_date_tsk_dlog_input"
                          placeholder="Microsoft Co."
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="" className="due_date_tsk_dlog_lbl">
                          Purpose
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control due_date_tsk_dlog_input"
                          placeholder="Dinner with Client"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="" className="due_date_tsk_dlog_lbl">
                          Tax Category
                          <img src={question_circle} alt="" className="ml-2" />
                        </label>
                        <div
                          className="form-control due_date_tsk_dlog_input"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="text_cost_o">
                            Cost of goods and Sold
                          </span>
                          <span className="ml-3">
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="right_checvron"
                            />
                          </span>
                        </div>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li className="dropdown-item">item</li>
                          <li className="dropdown-item">item</li>
                          <li className="dropdown-item">item</li>
                        </ul>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col d-flex flex-row flex-wrap">
                        <div className="chips_in d-flex justify-content-center align-items-center">
                          <span>
                            <img src={percentline} alt="" />
                          </span>
                          <span className="in_txes_chips ml-2">
                            {" "}
                            Include Taxes
                          </span>
                        </div>
                        <div className="chips_in d-flex justify-content-center align-items-center ml-2">
                          <span>
                            <img src={repeatline} alt="" />
                          </span>
                          <span className="in_txes_chips ml-2">
                            {" "}
                            Make Repeating
                          </span>
                        </div>
                        <div className="chips_in d-flex justify-content-center align-items-center">
                          <span>
                            <img src={pencil_square} alt="" />
                          </span>
                          <span className="in_txes_chips ml-2"> Add Note</span>
                        </div>
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
  );
}
