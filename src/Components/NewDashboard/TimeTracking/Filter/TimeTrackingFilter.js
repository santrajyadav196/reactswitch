import React, {useState} from "react";
import closeCircle from "../../..//..//Assets/assetsnew/close-circle-line-3.svg";

import "./TimeTrackingFilter.css";

const TimeTrackingFilter = (props) => {
  return (
    <>
      <div
        class='modal fade'
        id='TimeTrackingFilter'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog TimeTrackingFilter-Rectangle TTF-Modal-Position'>
          <div class='modal-content TTF-Content-Modal'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <span className='TTF-Filter'>Filter</span>
                </div>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <span data-bs-dismiss='modal'>
                      <img
                        className='TTF-Cursor'
                        src={closeCircle}
                        alt='close-mark'
                      />
                    </span>
                  </div>
                </div>
              </div>

              <form>
                <div className='mb-3 mt-3'>
                  <label htmlFor='date-range' className='TTF-Text'>
                    Date Range
                  </label>
                  <select
                    className='TTF-Text TTF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Time</option>
                    <option value='1'>Last One Week</option>
                    <option value='2'>Last Month</option>
                    <option value='3'>Last Three Month</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='client' className='TTF-Text'>
                    Client
                  </label>
                  <select
                    className='TTF-Text TTF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Client</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='project' className='TTF-Text'>
                    Project
                  </label>
                  <select
                    className='TTF-Text TTF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Project</option>
                  </select>
                </div>

                <div className='mb-3'>
                  <label htmlFor='activity' className='TTF-Text'>
                    Activity
                  </label>
                  <select
                    className='TTF-Text TTF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Activities</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='' className='TTF-Text'>
                    Invoiced Status
                  </label>
                  <select
                    className='TTF-Text TTF-Rectangle'
                    aria-label='Default select example'>
                    <option selected>All Status</option>
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

export default TimeTrackingFilter;
