import React, {useState} from "react";

import downArrow from "../../../../../Assets/assetsnew/arrow-down-black.svg";

const SetAGoal = () => {
  return (
    <>
      <div className='row Setting-Business-Form-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-Business-label-Margin'>
              <div className='Setting-TextFontOne-BigFontOne'>Current goal</div>
            </div>
            <div className='Setting-Business-Set-A-Goal-Rectangle'>
              <div className='Setting-TextFontOne-BigFont'>
                Set a goal to track your progress
              </div>
              <form action=''>
                <div className='row mt-4'>
                  <div className='col'>
                    <label className='Setting-TextFontOne' htmlFor=''>
                      I want to invoice
                    </label>

                    <input
                      className='Setting-Business-Set-A-Goal-Input-Rectangle Setting-TextFontOne'
                      type='text'
                      placeholder='0.00'
                    />
                    <select
                      className='form-select Setting-TextFontOne Setting-Business-Set-A-Goal-Select-Rectangle'
                      id='inputGroupSelect01'>
                      <option selected>in the next 30 days</option>
                      <option value='1'>last one month</option>
                      <option value='2'>last year</option>
                    </select>
                    {/* <span className='Setting-TextFontOne ml-2' htmlFor=''>
                      in the next 30 days
                    </span>
                    <span>
                      <img className='ml-2' src={downArrow} alt='' />
                    </span> */}
                    <span className='Setting-Business-Set-Goal-Btn-Rectangle'>
                      Set Goal
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='Setting-Business-label-Margin mt-5'>
            <div className='Setting-TextFontOne-BigFontOne'>Past goals</div>
            <div className='Setting-TextFontTwo-BigFont mt-4'>No goals yet</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetAGoal;
