import React from "react";
import "./notes.css";
export default function notes() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="col">
            <span className="Contact-Lists ">Notes</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="box_notes">
            <form action="">
              <div class="form-group">
                <textarea
                  class="form-control txt-area-frm"
                  id="exampleFormControlTextarea1"
                  rows="18"
                  placeholder="Add a note…."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
