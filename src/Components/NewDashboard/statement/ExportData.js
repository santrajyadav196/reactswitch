import React from "react";
import closeCircle from "../../../Assets/assetsnew/close-circle-line-3.svg";
import radioactive from "../../../Assets/assetsnew/radio-active.svg";
import radio_button_in_active from "../../../Assets/assetsnew/radio_button_in_active.svg";
import checkbox from "../../../Assets/assetsnew/checkbox.svg";

export default function ExportData() {
  return (
    <div
      className="modal fade"
      id="exportData"
      tabindex="-1"
      aria-labelledby="exportDataLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row mt-3">
                  <div className="col">
                    <div className="Export-Data">Export Data</div>{" "}
                  </div>
                  <div className="col d-flex flex-row-reverse">
                    {" "}
                    <span className="" data-bs-dismiss="modal">
                      <img src={closeCircle} alt="close-mark" />
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="txt_d">
                      We’ll prepare your data and email it to
                      mehul@digitalogy.co when it’s ready. This can take several
                      minutes, depending on the size of the file.
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <span>
                      {" "}
                      <img src={radioactive} alt="" />
                    </span>
                    <span className="Export-as-PDF ml-3">Export as PDF</span>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <span>
                      {" "}
                      <img src={radio_button_in_active} alt="" />
                    </span>
                    {/* <span className="Export-as-PDF ml-3">Export as PDF</span> */}
                  </div>
                </div>

                <div className="Rectangle_gry mb-5">
                  <div className="row mb-2">
                    <div className="col">
                      <span>
                        {" "}
                        <img src={checkbox} alt="" />
                      </span>
                      <span className="Export-as-PDF ml-3">
                        Include receipts in export
                      </span>
                    </div>
                  </div>
                  <div className="A-larger-file-size">
                    (A larger file size will take longer to export.)
                  </div>
                </div>

                <div className="submit_ed mb-5">Export Data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
