import React, {useState} from "react";

import closeCircle from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import questionMark from "../../../../../Assets/assetsnew/question-line-1.svg";
import dropDownArrow from "../../../../../Assets/assetsnew/arrow-down-s-line-copy.svg";
import autoCompleteChipsCircle from "../../../../../Assets/assetsnew/close-circle-fill-2.svg";

import "./EditBulkExpenses.css";

const EditBulkExpenses = (props) => {
  return (
    <>
      <div
        className='modal fade'
        id='EditBulkExpenses'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen  EditBulkExpenses_Rectangle modal-dialog_EditBulkExpenses'>
          <div className='modal-content'>
            <div className='container-fluid'>
              <div>
                <span className='New-Expense'>
                  Bulk Edit Expenses ( 4 items)
                </span>
                <span
                  className='EditBulkExpenses_ClosedBtn'
                  data-bs-dismiss='modal'>
                  <img src={closeCircle} alt='close-mark' />
                </span>
              </div>
              <form action=''>
                <div className='mb-3'>
                  <label htmlFor='assignTo' className='Form-Text'>
                    Assign To
                  </label>
                  <input
                    type='text'
                    className=' Form-Text Form-Rectangle'
                    id='assignTo'
                    name='assignTo'
                  />
                  <div>
                    <div className='AutoComplete-Chips-Rectangle'>
                      <span className='Form-Text-Color'>Medical App</span>
                      <img
                        src={autoCompleteChipsCircle}
                        className='close-circle-fill-2'
                      />
                    </div>
                  </div>
                </div>
                <div className='EditBulkExpenses_Merchant'>
                  <label htmlFor='Merchant' className='Form-Text'>
                    Merchant
                  </label>
                  <input
                    type='text'
                    className='Form-Text Form-Rectangle'
                    id='Merchant'
                    name='Merchant'
                    placeholder='Microsoft Co.'
                  />
                </div>
                <div>
                  <label htmlFor='purpose' className='Form-Text'>
                    Purpose
                  </label>
                  <input
                    type='text'
                    className='Form-Text Form-Rectangle'
                    id='purpose'
                    name='purpose'
                    placeholder='Dinner with client'
                  />
                </div>
                <div>
                  <label htmlFor='purpose' className='Form-Text'>
                    Tax Category
                    <img src={questionMark} className='question-line-1' />
                  </label>
                  <select
                    className='Form-Text Form-Rectangle'
                    aria-label='Default select example'>
                    <option selected>Cost of goods and sold</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                    <label htmlFor='total' className='Form-Text'>
                      Total
                    </label>
                    <input
                      type='text'
                      id='total'
                      className='Form-Text FormTwo-Rectangle'
                      placeholder='Rs0.00'
                    />
                    <div>
                      <div className='INR-Rectangle'>
                        <span className='Form-Text-Color'>INR</span>
                        <img
                          src={dropDownArrow}
                          className='Total-Arrow-down-Key'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 col-sm-12'>
                    <label htmlFor='date' className='Form-Text'>
                      Date
                    </label>
                    <input
                      type='date'
                      id='date'
                      className='Form-Text FormTwo-Rectangle'
                    />
                  </div>
                </div>
                <div className=''>
                  <span>
                    <label htmlFor='taxIncluded' className='Form-Text'>
                      Tax Included
                    </label>
                  </span>
                  <div className='row'>
                    <div className='col-3'>
                      <div className='Tax-Included-Rectangle'>
                        <span className='Percentage-Rectangle'>
                          <span className='Percentage-Color'>
                            <h3>
                              <i className='bi bi-percent'></i>
                            </h3>
                          </span>
                        </span>
                        <span>
                          <span className='RS-Color'>RS</span>
                        </span>
                      </div>
                    </div>
                    <div className='col-5'>
                      <input
                        type='text'
                        id=''
                        className='Form-Text Tax-Label-Rectangle'
                        placeholder='Tax-Label'
                      />
                    </div>
                    <div className='col-4'>
                      <input
                        type='text'
                        id=''
                        className='Form-Text Tax-Rate-Rectangle'
                        placeholder='Tax Rate'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='time' className='Form-Text'>
                    Time
                  </label>
                  <select
                    className='Form-Text Form-Rectangle'
                    aria-label='Default select example'>
                    <option value='1'>Daily</option>
                    <option value='2' selected>
                      Weekly
                    </option>
                    <option value='3'>Monthly</option>
                    <option value='4'>Yearly</option>
                  </select>
                </div>
                <div className='mt-5'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='Cancel-Rectangle'>
                        <div className='Cancel'>Cancel</div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='Create-Rectangle'>
                        <div className='Create'>Save</div>
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

export default EditBulkExpenses;
