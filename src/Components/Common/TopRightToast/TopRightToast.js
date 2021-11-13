import React from "react";
import { Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "./TopRightToast.css";

const TopRightToast = (props) => {
  return (
    <Toast
      animation={false}
      className={`${props.classes} rounded mr-3 mt-3`}
      onClose={props.onToastClosed}
      show={props.show}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <FontAwesomeIcon className="infoIcon mr-2" icon={faInfoCircle} />
        <strong className="mr-auto toastTitle">{props.title}</strong>
        <small className="toastTime">{props.time}</small>
      </Toast.Header>
      <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  );
};

export default TopRightToast;
