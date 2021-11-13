import React, {useState} from "react";
import closeCircle from "../../..//..//Assets/assetsnew/close-circle-line-3.svg";

import "./TransactionFilter.css";

const TransactionFilter = (props) => {
  return (
    <>
      <div
        class='modal fade'
        id='TransactionFilter'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog TransactionFilter-Rectangle TF-Modal-Position'>
          <div class='modal-content TF-Content-Modal'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <span className='TF-Filter'>Filter</span>
                </div>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <span data-bs-dismiss='modal'>
                      <img
                        className='TF-Cursor'
                        src={closeCircle}
                        alt='close-mark'
                      />
                    </span>
                  </div>
                </div>
              </div>
              <form>
                <div className='mb-3 mt-3'>
                  <label htmlFor='date-range' className='TF-Text'>
                    Date Range
                  </label>
                  <select
                    className='TF-Text TF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Time</option>
                    <option value='1'>Last One Week</option>
                    <option value='2'>Last Month</option>
                    <option value='3'>Last Three Month</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='client' className='TF-Text'>
                    Client
                  </label>
                  <select
                    className='TF-Text TF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Client</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='project' className='TF-Text'>
                    Project
                  </label>
                  <select
                    className='TF-Text TF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Project</option>
                  </select>
                </div>

                <div className='mb-3'>
                  <label htmlFor='transactions' className='TF-Text'>
                    Transactions
                  </label>
                  <select
                    className='TF-Text TF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Transactions</option>
                  </select>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <div className='Clear-Filters-Rectangle'>Clear Filters</div>
                  </div>
                  <div className='col-6'>
                    <div className='Apply-Filters-Rectangle'>Apply</div>
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

export default TransactionFilter;
