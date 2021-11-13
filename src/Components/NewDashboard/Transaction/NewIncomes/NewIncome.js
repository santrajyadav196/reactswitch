import React, {useState} from "react";
import receiptImage from "../../../../Assets/assetsnew/receipt.svg";
import closeCircle from "../../../../Assets/assetsnew/close-circle-line-3.svg";
import questionMark from "../../../../Assets/assetsnew/question-line-1.svg";
import addNote from "../../../../Assets/assetsnew/edit-box-line-1.svg";
import dropDownArrow from "../../../../Assets/assetsnew/arrow-down-s-line-copy.svg";
import autoCompleteChipsCircle from "../../../../Assets/assetsnew/close-circle-fill-2.svg";

import "./NewIncome.css";

const NewIncome = (props) => {
  const [isEditing, setIsEditing] = useState(false);

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


  const startEditingHandler = () => {
    setIsEditing(true);
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
        id='NewIncomes'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen  Whole-Rectangle modal-dialog-cust'>
          <div className='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-6'>
                  <div className='NewIncome-LeftSide-Rectangle'>
                    <div>
                      <img
                        className='Img-receipt'
                        src={receiptImage}
                        alt='reciept image'
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
                    <span className='New-Expense'>New Income</span>
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
                    <div className='row NewIncome-TotalDate'>
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
                          <AddNote />
                        </>
                      ) : (
                        <>
                          <span
                            className='Add-Note-Rectangle'
                            onClick={startEditingHandler}>
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

export default NewIncome;
