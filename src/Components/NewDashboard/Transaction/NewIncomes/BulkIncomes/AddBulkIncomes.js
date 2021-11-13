import React, {useState} from "react";

import closeCircle from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import AddBulkIncomesInvoice from "./AddBulkIncomesInvoice";
import AddBulkIncome from "./AddBulkIncome";

import "./AddBulkIncomes.css";

const AddBulkIncomes = (props) => {
  return (
    <>
      <div
        className='modal fade'
        id='AddBulkIncomes'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen modal-dialog-AddBulkIncomes'>
          <div className='modal-content'>
            <div>
              <div className='AddBulkIncome-ClosedBtn'>
                <span data-bs-dismiss='modal'>
                  <img src={closeCircle} alt='close-mark' />
                </span>
                <span
                  className='AddBulkIncome-Close AddBulkIncome-Text'
                  data-bs-dismiss='modal'>
                  close
                </span>
              </div>
              <div className='justify-content-center align-items-center'>
                <div className='AddBulkIncome-Create-Income'>Create Income</div>
              </div>
            </div>

            <hr className='AddBulkIncome-HorizontalLine-Rectangle'></hr>
            <div className='container-fluid'>
              <div className='AddBulkIncome-Payment-Ways'>
                What's this payment for?
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <span
                  className='AddBulkIncome-Payment-Ways-Rectangle mr-3'
                  data-bs-toggle='modal'
                  data-bs-target='#AddBulkIncomesInvoice'>
                  <p className='AddBulkIncome-Text'>An invoice I've sent</p>
                </span>
                <span
                  className='AddBulkIncome-Payment-Ways-Rectangle'
                  data-bs-toggle='modal'
                  data-bs-target='#AddBulkIncome'>
                  <p className='AddBulkIncome-Text ml-4'>Something Else</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <AddBulkIncomesInvoice />
        <AddBulkIncome />
      </div>
    </>
  );
};

export default AddBulkIncomes;
