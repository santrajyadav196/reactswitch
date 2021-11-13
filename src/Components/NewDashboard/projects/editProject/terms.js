import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import ediy_svg from "../../../../Assets/assetsnew/eidt_blue.svg";
import calendarsvg from "../../../../Assets/assetsnew/calendar-line-4.svg";
import ColoredLine from "../../../../utils/ColredLine";
export default function terms() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <span className="terms_txt">Terms</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="box_w_s">
            <div className="row">
              <div className="col">
                <span className="trems_txt_f">Fashion App</span>
              </div>
              <div className="col d-flex flex-row-reverse">
                <span className="editbtn_terms d-flex justify-content-center align-items-center">
                  <img src={ediy_svg} alt="" />
                  <span className="edit_txt">Edit</span>
                </span>
              </div>
            </div>{" "}
            <ColoredLine color="#b2b6c5" />
            <div className="billingScedule mb-3">
              <div className="bling_sechdule">Billing schedule</div>
              <span className="billing_sechdule_sub">
                {" "}
                Set dates to get invoice reminders.
              </span>{" "}
            </div>
            <div className="flexbox_grid d-flex  flex-row">
              <div className="grey_box ">
                <div className="row">
                  <div className="col-8">
                    <div className="start_date_txt_trms">Start Date</div>
                    <div className="end_date_txt_trms">21 Aug 2021</div>
                  </div>
                  <div className="col">
                    <img src={calendarsvg} alt="" />
                  </div>
                </div>
              </div>
              <div className="grey_box  ml-3">
                <div className="row">
                  <div className="col-8">
                    <div className="start_date_txt_trms">End Date </div>
                    <div className="end_date_txt_trms">21 Aug 2021</div>
                  </div>
                  <div className="col">
                    <img src={calendarsvg} alt="" />
                  </div>
                </div>
              </div>
              <div className="grey_box  ml-3">
                <div className="row">
                  <div className="col-8">
                    <div className="start_date_txt_trms">1st Invoice Date</div>
                    <div className="end_date_txt_trms">21 Aug 2021</div>
                  </div>
                  <div className="col">
                    <img src={calendarsvg} alt="" />
                  </div>
                </div>
              </div>
              <div className="grey_box  ml-3">
                <div className="row">
                  <div className="col-8">
                    <div className="start_date_txt_trms">I will bill</div>
                    <div className="end_date_txt_trms">Weekly</div>
                  </div>
                  <div className="col">
                    <img src={calendarsvg} alt="" />
                  </div>
                </div>
              </div>
              {/* <div className="grey_box ml-3"></div>
              <div className="grey_box ml-3"></div>
              <div className="grey_box ml-3"></div> */}
            </div>
          </div>

          <div className="box_w_s mt-5 mb-5">
            <div className="p_service_header">
              <span className="project_ser_txt_trn">Project service</span>
            </div>
            <ColoredLine color="#b2b6c5" />
            <div className="mobileApp">
              <div className="row">
                {" "}
                <div className="col-6">
                  {" "}
                  <span className="mobile-App">Mobile App</span>
                </div>
                <div className="col-2 mobile-App">₹ 300.00</div>
                <div className="col-2 mobile-App ">60 hr/s</div>
                <div className="col-2 mobile-App ">₹ 18000.00</div>
              </div>
            </div>
            <ColoredLine color="#b2b6c5" />

            <div className="row">
              <div className="col">
                <span>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </span>
                <span className="ml-3 add-service">Add Service</span>
              </div>
              <div className="col d-flex flex-row-reverse">
                <span className="add-service_value">₹ 18000.00</span>
              </div>
            </div>
          </div>

          <div className="box_w_s mb-5">
            <div className="p_service_header">
              <span className="project_ser_txt_trn">Deposit</span>{" "}
              <div className="billing_sechdule_sub"> Deposit not required</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
