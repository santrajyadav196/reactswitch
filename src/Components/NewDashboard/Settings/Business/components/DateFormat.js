import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";

const DateFormat = () => {
  return (
    <>
      <div
        class='modal fade'
        id='DateFormatModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen Setting-Business-Currency-Rectangle'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Date/number format
                  </div>
                </div>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <img data-bs-dismiss='modal' src={closedBtn} alt='' />
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <label
                    className='Setting-TextFontOne'
                    htmlFor='inputGroupSelect01'>
                    Region
                  </label>
                  <select
                    className='form-select Setting-TextFontOne Setting-Business-input-Rectangle'
                    id='inputGroupSelect01'>
                    <option selected>English(India)</option>
                    <option value='1'>English(USA)</option>
                    <option value='2'>English(UK)</option>
                  </select>
                  <div className='Setting-TextFontTwo'>
                    Example: AMD 1,000.00, 10/27/2021
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='Setting-Business-Currency-Cancel-Rectangle'>
                    Cancel
                  </div>
                </div>
                <div className='col'>
                  <div className='Setting-Business-Currency-Save-Rectangle'>
                    Save
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

export default DateFormat;
