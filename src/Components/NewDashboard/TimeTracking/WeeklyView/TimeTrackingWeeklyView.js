import React, {useState} from "react";

import upArrow from "../../../../Assets/assetsnew/arrow-up.svg";
import downArrow from "../../../../Assets/assetsnew/arrow-down-black.svg";
import plus from "../../../../Assets/assetsnew/add-line-1.svg";

import "./TimeTrackingWeeklyView.css";

const TimeTrackingWeeklyView = () => {
  const [inputList, setInputList] = useState([{}]);

  const addNewOneHandler = () => {
    setInputList([...inputList, {}]);
    // console.log("You Clicked Me!");
  };

  const AssignedAndUnassigned = () => {
    return (
      <>
        <form className='row mt-3'>
          <div className='col-5'>
            <div className='ml-3'>
              <input
                className='TimeTrackingWeeklyView-Assigned-InputBox'
                type='text'
                placeholder='Ex, Research, Meeting, Demo etc'
              />
            </div>
          </div>
          <div className='col-1'>
            <div className='d-flex justify-content-center'>
              <input
                className='text-center TimeTrackingWeeklyView-DaysBox'
                type='text'
                placeholder='0'
              />
            </div>
          </div>
          <div className='col-1'>
            <div className='d-flex justify-content-center'>
              <input
                className='text-center TimeTrackingWeeklyView-DaysBox'
                type='text'
                placeholder='0'
              />
            </div>
          </div>
          <div className='col-1'>
            <div className='d-flex justify-content-center'>
              <input
                className='text-center TimeTrackingWeeklyView-DaysBox'
                type='text'
                placeholder='0'
              />
            </div>
          </div>
          <div className='col-1'>
            <div className='d-flex justify-content-center'>
              <input
                className='text-center TimeTrackingWeeklyView-DaysBox'
                type='text'
                placeholder='0'
              />
            </div>
          </div>
          <div className='col-1'>
            <div className='d-flex justify-content-center'>
              <input
                className='text-center TimeTrackingWeeklyView-DaysBox'
                type='text'
                placeholder='0'
              />
            </div>
          </div>
          <div className='col-1'>
            <div className='d-flex justify-content-center'>
              <input
                className='text-center TimeTrackingWeeklyView-DaysBox'
                type='text'
                placeholder='0'
              />
            </div>
          </div>
          <div className='col-1'>
            <div className='d-flex justify-content-center'>
              <input
                className='text-center TimeTrackingWeeklyView-DaysBox'
                type='text'
                placeholder='0'
              />
            </div>
          </div>
        </form>
      </>
    );
  };
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingWeeklyView-Days'>
            <div className='row'>
              <div className='col-8'>
                <div className='TimeTrackingTimer-Timer-BigFont'>Week View</div>
              </div>
              <div className='col-4'>
                <div className='d-flex flex-row-reverse'>
                  <span className='TimeTrackingTimer-TextFont2 TimeTrackingTimer-FilterSort mt-1 mr-2'>
                    Filter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingWeeklyView-Days'>
            <div className='row'>
              <div className='col-5'></div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  Sun
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  Mon
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  Tues
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  Wed
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  Thu
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextBrand'>
                  Today
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  Sat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingWeeklyView-Days'>
            <div className='row'>
              <div className='col-5'></div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  1
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  2
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  3
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  6
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  9
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextBrand'>
                  6
                </span>
              </div>
              <div className='col-1'>
                <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-bs-toggle='collapse'
        data-bs-target='#AssignedWeeklyView'
        aria-expanded='false'
        aria-controls='collapseExample'>
        <div className='row'>
          <div className='col'>
            <div className='TimeTrackingWeeklyView-Days'>
              <div className='row'>
                <div className='col-5'>
                  <span className='TimeTrackingTimer-TextFont1 ml-3'>
                    Fashan Mobile App...... (Digitalogy.Co)
                    <img
                      src={upArrow}
                      className='TimeTrackingWeeklyView-upArrow'
                      alt=''
                    />
                    <img
                      src={downArrow}
                      className='TimeTrackingWeeklyView-downArrow'
                      alt=''
                    />
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    1
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    2
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    3
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    6
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    9
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    6
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='collapse' id='AssignedWeeklyView'>
        <div className='row'>
          <div className='col'>
            <div className='TimeTrackingWeeklyView-Assigned-Rectangle'>
              {inputList.map(() => {
                return <AssignedAndUnassigned />;
              })}

              <div
                className='TimeTrackingWeeklyView-AddNew'
                onClick={addNewOneHandler}>
                <img src={plus} alt='' /> New
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-bs-toggle='collapse'
        data-bs-target='#UnassignedWeeklyView'
        aria-expanded='false'
        aria-controls='collapseExample'>
        <div className='row'>
          <div className='col'>
            <div className='TimeTrackingWeeklyView-Days'>
              <div className='row'>
                <div className='col-5'>
                  <span className='TimeTrackingTimer-TextFont1 ml-3'>
                    Unassigned
                    <img
                      src={upArrow}
                      className='TimeTrackingWeeklyView-upArrow'
                      alt=''
                    />
                    <img
                      src={downArrow}
                      className='TimeTrackingWeeklyView-downArrow'
                      alt=''
                    />
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    1
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    2
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    3
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    6
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    9
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    6
                  </span>
                </div>
                <div className='col-1'>
                  <span className='d-flex justify-content-center TimeTrackingTimer-TextFont1'>
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='collapse' id='UnassignedWeeklyView'>
        <div className='row'>
          <div className='col'>
            <div className='TimeTrackingWeeklyView-Assigned-Rectangle'>
              {inputList.map(() => {
                return <AssignedAndUnassigned />;
              })}

              <div
                className='TimeTrackingWeeklyView-AddNew'
                onClick={addNewOneHandler}>
                <img src={plus} alt='' /> New
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTrackingWeeklyView;
