import React from "react";
import closeCircle from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import dropDownArrow from "../../../../../Assets/assetsnew/arrow-down-s-line-copy.svg";
import "./EditPayment.css";

const EditPayment = (props) => {
  return (
    <>
      <div
        class='modal fade'
        id='EditPayment'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen EditBulkIncome-Payment-Rectangle modal-dialog-EditBulkIncome'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='mb-2'>
                <div className='EditBulkIncome-Edit-Payment'>Edit Payment</div>
                <img
                  data-bs-dismiss='modal'
                  src={closeCircle}
                  className='EditBulkIncome-ClosedMark'
                />
              </div>
              <div className=''>
                <span className='EditBulkIncome-Payment-created-At'>
                  Payment created 30 Jul, 2021
                </span>
              </div>
              <form>
                <div className='row'>
                  <div className='mb-2'>
                    <label htmlFor='amount' className='Form-Text'>
                      Amount
                    </label>
                    <input
                      type='text'
                      id='amount'
                      className='Form-Text EditBulkIncome-Rectangle'
                      placeholder='Rs0.00'
                    />
                    <div className='INR-EditPayment-Rectangle'>
                      <span className='INR-EditPayment'>INR</span>
                      <img
                        src={dropDownArrow}
                        className='arrow-down-s-line-copy'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label htmlFor='date' className='Form-Text'>
                      Date
                    </label>
                    <input
                      type='date'
                      id='date'
                      className='Form-Text EditBulkIncome-Rectangle'
                    />
                  </div>
                  <div className='row mt-5'>
                    <div className='col-6'>
                      <div
                        className='EditBulkIncome-Cancel-Rectangle'
                        data-bs-dismiss='modal'>
                        <div className='EditBulkIncome-Cancel'>Cancel</div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='EditBulkIncome-Save-Rectangle'>
                        <div className='EditBulkIncome-Save'>Save</div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPayment;
