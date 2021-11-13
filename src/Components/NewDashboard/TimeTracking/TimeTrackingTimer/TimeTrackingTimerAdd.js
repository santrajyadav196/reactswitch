import React, {useState} from "react";

import closedBtn from "../../../../Assets/assetsnew/close-circle-line-3.svg";
import clock from "../../../../Assets/assetsnew/timer-symbol.svg";
import coloredCheckbox from "../../../../Assets/assetsnew/checkbox.svg";
import checkbox from "../../../../Assets/assetsnew/checkbox-line-1.svg";

import "./TimeTrackingTimerEdit.css";

const TimeTrackingTimerAdd = () => {
  return (
    <div>
      <div
        className='modal fade'
        id='TimeTrackingTimerAdd'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen TimetrackingTimerEdit-Rectangle'>
          <div className='modal-content'>
            <div className='container-fluid'>
              <div className='row mt-3 mb-4'>
                <div className='col'>
                  <span className='TimeTrackingTimer-TextFont1 TimeTrackingTimerEditList-Edit'>
                    Add Activity
                  </span>
                </div>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <img
                      className='TimeTrackingTimerEditLis-ClosedBtn'
                      data-bs-dismiss='modal'
                      src={closedBtn}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <form action=''>
                <label className='TimeTrackingTimerEdit-FormText' htmlFor=''>
                  Time
                </label>
                <div className='row'>
                  <div className='col mb-3'>
                    <label className='visually-hidden' htmlFor=''>
                      Hours
                    </label>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleOne'
                        id=''
                        placeholder='00'
                      />
                      <div className='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleTwo'>
                        hrs
                      </div>
                    </div>
                  </div>
                  <div className='col mb-3'>
                    <label className='visually-hidden' htmlFor=''>
                      Minutes
                    </label>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleOne'
                        id=''
                        placeholder='00'
                      />
                      <div className='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleTwo'>
                        mins
                      </div>
                    </div>
                  </div>
                  <div className='col mb-3'>
                    <label className='visually-hidden' htmlFor=''>
                      Seconds
                    </label>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleOne'
                        id=''
                        placeholder='00'
                      />
                      <div className='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleTwo'>
                        sec
                      </div>
                    </div>
                  </div>
                </div>
                <div class='mb-3'>
                  <label for='' class='TimeTrackingTimerEdit-FormText'>
                    Activity
                  </label>
                  <input
                    type='text'
                    class='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleThree'
                    id=''
                    placeholder='Search and add name of activity'
                  />
                </div>
                <div class='mb-3'>
                  <label for='' class='TimeTrackingTimerEdit-FormText'>
                    Project
                  </label>
                  <input
                    type='text'
                    class='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleThree'
                    id=''
                    placeholder=''
                  />
                  <div className='row'>
                    <div className='col TimeTrackingTimerEdit-MarginTop'>
                      <span className='TimeTrackingTimerEdit-FormText ml-3'>
                        Fashan App
                      </span>
                    </div>
                    <div className='col TimeTrackingTimerEdit-MarginTop'>
                      <div className='d-flex flex-row-reverse mr-3'>
                        <img src={closedBtn} alt='' />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      <div class=''>
                        <label for='' class='TimeTrackingTimerEdit-FormText'>
                          Date
                        </label>
                        <input
                          type='date'
                          class='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleThree'
                          id=''
                          placeholder=''
                        />
                      </div>
                    </div>
                    <div className='col'>
                      <div class=''>
                        <label for='' class='TimeTrackingTimerEdit-FormText'>
                          Start Time
                        </label>
                        <div className='input-group'>
                          <input
                            type='text'
                            className='TimeTrackingTimerEdit-FormText TimeTrackingTimerEdit-Input-RectangleOneOne'
                            id=''
                            placeholder='3:54 PM'
                          />
                          <div className='TimeTrackingTimerEdit-Input-RectangleTwoTwo'>
                            <img className='mb-3' src={clock} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span>
                    {/* <img src={checkbox} alt='' /> */}
                    <img src={coloredCheckbox} alt='' />
                  </span>
                  <span className='TimeTrackingTimerEdit-FormText ml-3'>
                    Mark as invoiced
                  </span>
                </div>
                <div className='TimeTrackingTimerEdit-Update-Rectangle'>
                  <div className='TimeTrackingTimerEdit-Update-All'>Save</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeTrackingTimerAdd;
