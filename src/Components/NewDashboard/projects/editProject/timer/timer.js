import React from "react";

import "./timer.css";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayCircle from "../../../../../Assets/Images/play-circle-fill-3.svg";

export default function timer() {
  return (
    <div>
      <div className="timer_bx">
        <div className="row">
          <div className="col-1">
            <span className="playCircle mx-3">
              <img src={PlayCircle} alt="playcircle " />
            </span>
          </div>
          <div className="col-2">
            <div>00:00:00</div>
            <div>Reset</div>
          </div>
          <div className="col d-flex  align-items-center">
            <div className="box_file ">
              <span>
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
              <span class="">middle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
