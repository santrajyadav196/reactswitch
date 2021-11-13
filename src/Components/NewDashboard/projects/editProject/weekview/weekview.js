import React from "react";
import "./weekview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faPlus } from "@fortawesome/free-solid-svg-icons";
export default function weekview() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <span className="title_week">Week View</span>
        </div>
        <div className="col d-flex flex-row-reverse mr-4 ">
          <span className="filter_ttl">Filter</span>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <div className="box_week">
            <div className="header_of_box mb-4">
              <div className="row">
                <div className="col-5 "></div>
                <div className="col-1 ele_font_ss">Mon</div>
                <div className="col-1 ele_font_ss">Tue</div>
                <div className="col-1 ele_font_ss">Wed</div>
                <div className="col-1 ele_font_ss">Thurs</div>
                <div className="col-1 ele_font_ss">Fri</div>
                <div className="col-1 ele_font_ss">Sat</div>
                <div className="col-1 ele_font_ss">Sun</div>
              </div>
            </div>

            <div className="row mb-3 ">
              <div className="col-5">
                <select
                  class="form-select form_select_d ml-3"
                  aria-label="Default select example"
                >
                  <option selected>Fashion Mobile App (Hudson Agency)</option>
                  <option value="1">Fashion Mobile App (Hudson Agency)</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="col-1 number_font">0</div>
              <div className="col-1 number_font">0</div>
              <div className="col-1 number_font">0</div>
              <div className="col-1 number_font">0</div>
              <div className="col-1 number_font">0</div>
              <div className="col-1 number_font">0</div>
              <div className="col-1 number_font">0</div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_weekd"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Scrum Meeting With Team"
                  />
                </div>
              </div>

              <div className="col-1 number_font text-center">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_weekd"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Product demo"
                  />
                </div>
              </div>

              <div className="col-1 number_font text-center">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input_weekd"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Ex. Research, meeting, demo…"
                  />
                </div>
              </div>

              <div className="col-1 number_font text-center">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
              <div className="col-1 number_font">
                <div className="box_iput_pro">0</div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col">
                <div className="btn_save  selected_head_item ml-4">
                  <span class="mx-3">
                    <FontAwesomeIcon icon={faPlus} className="faPlus " />
                  </span>
                  <span className="font-create"> New</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
