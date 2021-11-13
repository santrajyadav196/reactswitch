import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";

const Currency = () => {
  return (
    <>
      <div
        class='modal fade'
        id='CurrencyModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen Setting-Business-Currency-Rectangle'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <div className='Setting-TextFontOne-BigFont'>Currency</div>
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
                    Select Currency
                  </label>
                  <select
                    className='form-select Setting-TextFontOne Setting-Business-input-Rectangle'
                    id='inputGroupSelect01'>
                    <option selected>INR</option>
                    <option value='1'>USD</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
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

export default Currency;
