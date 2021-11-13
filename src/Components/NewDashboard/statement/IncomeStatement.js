import React from "react";
import ColoredLine from "../../../utils/ColredLine";

export default function IncomeStatement() {
  return (
    <div>
      <div className="box_clrd">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="Income-Statement"> Income Statement</div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="Startup-Arena"> Startup Arena</div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="From-9th-Jan-2021-to">
              {" "}
              From 9th Jan 2021 to 30th Jan 2021
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Income">Income</div>
          </div>
          <div className="col"></div>
        </div>
        <ColoredLine color="#b2b6c5" />
        <div className="row">
          <div className="col">
            <div className="Revenue">Revenue</div>
          </div>
          <div className="col d-flex flex-row-reverse">
            {" "}
            <div className="Revenue">₹0.00</div>
          </div>
        </div>
        <ColoredLine color="#b2b6c5" />
        <div className="row">
          <div className="col">
            <div className="Revenue">Total Income</div>
          </div>
          <div className="col d-flex flex-row-reverse">
            {" "}
            <div className="Revenue">₹0.00</div>
          </div>
        </div>
        <ColoredLine color="#b2b6c5" />{" "}
        <div className="row mt-4">
          <div className="col">
            <div className="Income">Less expenses</div>
          </div>
          <div className="col"></div>
        </div>
        <ColoredLine color="#b2b6c5" />
        <div className="row">
          <div className="col">
            <div className="Revenue">Total expense</div>
          </div>
          <div className="col d-flex flex-row-reverse">
            {" "}
            <div className="Revenue">₹0.00</div>
          </div>
        </div>{" "}
        <ColoredLine color="#b2b6c5" />{" "}
        <div className="row mt-5">
          <div className="col">
            <div className="Income">Profit before taxes</div>
          </div>
          <div className="col d-flex flex-row-reverse">
            {" "}
            <div className="Income">₹0.00</div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
