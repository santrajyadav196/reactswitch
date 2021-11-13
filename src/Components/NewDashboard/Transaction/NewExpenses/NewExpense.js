import React, {useState} from "react";
import receiptImage from "../../../../Assets/assetsnew/receipt.svg";
import closeCircle from "../../../../Assets/assetsnew/close-circle-line-3.svg";
import radioButton1 from "../../../../Assets/assetsnew/radio-active.svg";
import radioButton2 from "../../../../Assets/assetsnew/radio-button-line-2.svg";
import questionMark from "../../../../Assets/assetsnew/question-line-1.svg";
import percentMark from "../../../../Assets/assetsnew/percent-line.svg";
import repeatLine from "../../../../Assets/assetsnew/repeat-line.svg";
import addNote from "../../../../Assets/assetsnew/edit-box-line-1.svg";
import dropDownArrow from "../../../../Assets/assetsnew/arrow-down-s-line-copy.svg";
import autoCompleteChipsCircle from "../../../../Assets/assetsnew/close-circle-fill-2.svg";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);
  const [isEditing3, setIsEditing3] = useState(false);

  const [enteredAssignTo, setEnteredAssignTo] = useState("");
  const [checked, setChecked] = useState("");

  const addNewExpenseHandler = (event) => {
    event.preventDefault();
    console.log(enteredAssignTo, checked);
    setEnteredAssignTo("");
  };

  const AssignToChangeHandler = (event) => {
    setEnteredAssignTo(event.target.value);
  };

  const radioChangeHandler = (event) => {
    setChecked(event.target.value);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const startEditingHandler2 = () => {
    setIsEditing2(true);
  };

  const startEditingHandler3 = () => {
    setIsEditing3(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const TaxIncluded = () => {
    return (
      <>
        <div className='Div-Margin'>
          <span>
            <label htmlFor='taxIncluded' className='Form-Text'>
              Tax Included
            </label>
          </span>
          <span>
            <img
              src={closeCircle}
              className='Tax-Included-Closed'
              alt='close-mark'
              type='button'
              onClick={stopEditingHandler}
            />
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
      </>
    );
  };

  const MakeRepeat = () => {
    return (
      <>
        <div className='mb-3'>
          <label htmlFor='repeating' className='Repeating'>
            Repeating
          </label>
          <select
            className='Repeating Repeating-Rectangle'
            aria-label='Default select example'>
            <option selected>One time</option>
            <option value='1'>Daily</option>
            <option value='2'>Weekly</option>
            <option value='3'>Bi-weekly</option>
            <option value='3'>Monthly</option>
            <option value='3'>Yearly</option>
          </select>
        </div>
      </>
    );
  };

  const AddNote = () => {
    return (
      <>
        <div className='mb-3'>
          <label htmlFor='addNote' className='Add-NoteOne'>
            Add Note
          </label>
          <input
            type='text'
            className='Add-NoteOne Add-NoteOne-Rectangle'
            id='addNote'
            name='addNote'
            placeholder='Here is a sample text will come...'
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div
        class='modal fade'
        id='NewExpenses'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen  Whole-Rectangle modal-dialog-cust'>
          <div className='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-6'>
                  <div className='LeftSide-Rectangle'>
                    <div>
                      <img
                        className='Img-receipt'
                        src={receiptImage}
                        alt='reciept '
                      />
                    </div>
                    <div className='Attach-a-receipt'>
                      <span>Attach a receipt</span>
                    </div>
                    <div className='Click-to-upload'>
                      <span>click to upload a file, or just drag & drop.</span>
                    </div>
                  </div>
                </div>

                <div className='col-6 '>
                  <div>
                    <span className='New-Expense'>New Expense</span>
                    <span className='Shape' data-bs-dismiss='modal'>
                      <img src={closeCircle} alt='close-mark' />
                    </span>
                  </div>
                  <form onSubmit={addNewExpenseHandler}>
                    <div className='mb-3'>
                      <label htmlFor='assignTo' className='Form-Text'>
                        Assign To
                      </label>
                      <input
                        type='text'
                        className=' Form-Text Form-Rectangle'
                        id='assignTo'
                        name='assignTo'
                        value={enteredAssignTo}
                        onChange={AssignToChangeHandler}
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

                    <div>
                      <span>
                        <img
                          className='Radioactive-Button'
                          src={radioButton1}
                          alt='radio-button'
                        />
                      </span>
                      <span className='Form-Text Tax-deducitble'>
                        Tax deducitble
                      </span>
                      <span>
                        <img
                          src={radioButton2}
                          className='radio-button-line-2'
                        />
                      </span>
                      <span className='Form-Text'> Billable to client</span>
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
                    <div>
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

                    <div className='mb-5 mt-3'>
                      {isEditing ? (
                        <>
                          <TaxIncluded />
                        </>
                      ) : (
                        <>
                          <span
                            className='Include-taxes-Rectangle'
                            onClick={startEditingHandler}>
                            <img src={percentMark} className='percent-line' />
                            <span className='Include-Taxes'>Include Taxes</span>
                          </span>
                        </>
                      )}

                      {isEditing2 ? (
                        <>
                          <MakeRepeat />
                        </>
                      ) : (
                        <>
                          <span
                            className='Repeat-Rectangle'
                            onClick={startEditingHandler2}>
                            <img src={repeatLine} className='repeat-line' />
                            <span className='Make-Repeating'>
                              Make Repeating
                            </span>
                          </span>
                        </>
                      )}

                      {isEditing3 ? (
                        <>
                          <AddNote />
                        </>
                      ) : (
                        <>
                          <span
                            className='Add-Note-Rectangle'
                            onClick={startEditingHandler3}>
                            <img src={addNote} className='edit-box-line-1' />
                            <span className='Add-Note'>Add Note</span>
                          </span>
                        </>
                      )}
                    </div>

                    <div className='mt-3'>
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
    </>
  );
};

export default NewExpense;
