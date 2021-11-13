import React, {useState} from "react";
import receiptImage from "../../../../../Assets/assetsnew/receipt.svg";
import closeCircle from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import questionMark from "../../../../../Assets/assetsnew/question-line-1.svg";
import plusCircle from "../../../../../Assets/assetsnew/close-plus-circle-line.svg";
import dropDownArrow from "../../../../../Assets/assetsnew/arrow-down-s-line-copy.svg";
import autoCompleteChipsCircle from "../../../../../Assets/assetsnew/close-circle-fill-2.svg";
import imageAddIcon from "../../../../../Assets/assetsnew/image-add-line.svg";
import coloredEditSymbol from "../../../../../Assets/assetsnew/coloredEdit.svg";
import coloredDeleteSymbol from "../../../../../Assets/assetsnew/coloredDelete.svg";
import greenArrow from "../../../../../Assets/assetsnew/green-arrow-path.svg";

import "./AddBulkIncome.css";

const AddBulkIncome = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing1, setIsEditing1] = useState(true);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const BulkExpensesList = () => {
    return (
      <>
        <div>
          <div className='BulkExpensesList-Rectangle'>
            <div className='row'>
              <div className='col-10'>
                <span className='BulkExpensesList-Name'>James Harrison</span>
              </div>
              <div className='col-1'>
                <span>
                  <img
                    src={coloredEditSymbol}
                    className='BulkExpensesList-Edit'
                  />
                </span>
              </div>
              <div className='col-1'>
                <span>
                  <img
                    src={coloredDeleteSymbol}
                    className='BulkExpensesList-Delete'
                  />
                </span>
              </div>
            </div>
            <div className='BulkExpensesList-Spent-Date'>
              Spent 09 July 2021
            </div>
            <div className='row'>
              <div className='col-9'>
                <span className='BulkExpensesList-Purpose'>
                  Business Development
                </span>
              </div>
              <div className='col-3'>
                <span>
                  <img src={greenArrow} className='BulkExpenses-downArrow' />
                </span>
                <span className='BulkExpensesList-Total'>₹500.00</span>
              </div>
            </div>
          </div>

          <div className='BulkExpensesList-Rectangle'>
            <div className='row'>
              <div className='col-10'>
                <span className='BulkExpensesList-Name'>
                  Mabel Fleming..........
                </span>
              </div>
              <div className='col-1'>
                <span>
                  <img
                    src={coloredEditSymbol}
                    className='BulkExpensesList-Edit'
                  />
                </span>
              </div>
              <div className='col-1'>
                <span>
                  <img
                    src={coloredDeleteSymbol}
                    className='BulkExpensesList-Delete'
                  />
                </span>
              </div>
            </div>
            <div className='BulkExpensesList-Spent-Date'>
              Spent 09 July 2021
            </div>
            <div className='row'>
              <div className='col-9'>
                <span className='BulkExpensesList-Purpose'>
                  Dinner with client
                </span>
              </div>
              <div className='col-3'>
                <span>
                  <img src={greenArrow} className='BulkExpenses-downArrow' />
                </span>
                <span className='BulkExpensesList-Total'>₹500.00</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const BulkIncomeAdvance = () => {
    return (
      <>
        <div className='mt-3'>
          <div className='row TBEA-BillToProject'>
            <div className='col col-md-6 col-sm-12'>
              <div className=''>
                <label htmlFor='billToProject' className='Form-Text'>
                  File To (Project)
                </label>
                <input
                  type='text'
                  className='Form-Text FormTwo-Rectangle'
                  id='billToProject'
                  name='billToProject'
                />
                <div className='TBEA-AutoComplete-Chips-Rectangle'>
                  <span className='Form-Text-Color'>Medical App</span>
                  <img
                    src={autoCompleteChipsCircle}
                    className='close-circle-fill-2'
                  />
                </div>
              </div>
            </div>
            <div className='col col-md-6 col-sm-12'>
              <div className=''>
                <label htmlFor='spent' className='Form-Text'>
                  Received On
                </label>
                <input
                  type='date'
                  className='Form-Text FormTwo-Rectangle'
                  id='spent'
                  name='spent'
                />
              </div>
            </div>
          </div>

          <div className='Receipt-Rectangle mt-5'>
            <img src={imageAddIcon} className='image-add-line' />
            <div className='BulkExpenses-Add-Receipt'>Add Receipt</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        class='modal fade'
        id='AddBulkIncome'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen Whole-Rectangle modal-dialog-cust'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col d-flex flex-row'>
                  <div className=''>
                    <div className='row'>
                      <div className='col-6'>
                        {isEditing1 ? (
                          <>
                            <BulkExpensesList />
                          </>
                        ) : (
                          <>
                            <div className='TBE-LeftSide-Rectangle'>
                              <div>
                                <img
                                  className='Img-receipt'
                                  src={receiptImage}
                                  alt='reciept image'
                                />
                              </div>
                              <div className='Attach-a-receipt'>
                                <span>No Incomes Yet</span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className='col-6'>
                        <div>
                          <span className='New-Expense'>Create Income</span>
                          <span
                            className='AddBulkIncome-ClosedMark'
                            data-bs-dismiss='modal'>
                            <img src={closeCircle} alt='close-mark' />
                          </span>
                        </div>
                        <form>
                          <div className=''>
                            <label htmlFor='merchant' className='Form-Text'>
                              Source
                            </label>
                            <input
                              type='text'
                              className='Form-Text Form-Rectangle'
                              id='merchant'
                              name='merchant'
                            />
                          </div>
                          <div className=''>
                            <label htmlFor='category' className='Form-Text'>
                              Category
                              <img
                                src={questionMark}
                                className='question-line-1'
                              />
                            </label>
                            <select
                              className='Form-Text Form-Rectangle'
                              aria-label='Default select example'>
                              <option selected>Business Insurance</option>
                              <option value='1'>One</option>
                              <option value='2'>Two</option>
                              <option value='3'>Three</option>
                            </select>
                          </div>
                          <div className=''>
                            <label htmlFor='purpose' className='Form-Text'>
                              Purpose
                            </label>
                            <input
                              type='text'
                              className='Form-text Form-Rectangle'
                              id='purpose'
                              name='purpose'
                              placeholder='Employee Insurance Deal'
                            />
                          </div>
                          <div className=''>
                            <label htmlFor='total' className='Form-Text'>
                              Total
                            </label>
                            <input
                              type='text'
                              id='total'
                              className='Form-Text Form-Rectangle'
                              placeholder='Rs0.00'
                            />
                            <div className='INR-Bulk-Rectangle'>
                              <span className='Form-Text-Color'>INR</span>
                              <img
                                src={dropDownArrow}
                                className='Total-Arrow-down-Key'
                              />
                            </div>
                          </div>
                          {isEditing ? (
                            <>
                              <BulkIncomeAdvance />
                            </>
                          ) : (
                            <>
                              <div className='row'>
                                <div className='col-9'></div>
                                <div className='col-3'>
                                  <div className='d-flex flex-row'>
                                    <img
                                      onClick={startEditingHandler}
                                      src={plusCircle}
                                      className='TBE-close-plus-circle'
                                    />
                                    <span className='BulkExpenses-Advance'>
                                      Advance
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          <div className='mt-5'>
                            <div className='row'>
                              <div className='col-6'>
                                <div className='Cancel-Rectangle'>
                                  <div className='Cancel'>Cancel</div>
                                </div>
                              </div>
                              <div className='col-6'>
                                <div className='Create-Rectangle'>
                                  <div className='Create'>Create</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBulkIncome;
