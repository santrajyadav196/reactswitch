import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import receipt from "../../../../../Assets/assetsnew/receipt.svg";
import checkbox from "../../../../../Assets/assetsnew/checkbox.svg";
import unCheckbox from "../../../../../Assets/assetsnew/checkbox-line-1.svg";

const ImportData = () => {
  return (
    <>
      <div
        className='modal fade'
        id='ImportDataModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen Setting-Integrations-ImportData-Rectangle'>
          <div className='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-9'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Import expenses and income
                  </div>
                </div>
                <div className='col-3'>
                  <div className='d-flex flex-row-reverse'>
                    <img data-bs-dismiss='modal' src={closedBtn} alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center mt-5 mb-2'>
                    <img src={receipt} alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center mt-3'>
                    <div className='Setting-TextFontOne-BigFont'>
                      Upload your .CVS file
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center my-3'>
                    <div className='Setting-TextFontTwo'>
                      Drag & drop or click to upload
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center my-3 pl-4 pr-3'>
                    <div className='Setting-TextFontTwo-SmallFont'>
                      The currency of the Income and Expense items you are going
                      to import must match the currency of your AND.CO account
                      (AMD). The date format in your file must match the date
                      format of your AND.CO account (MM/DD/YYYY).
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <select
                    name=''
                    id=''
                    className='form-select Setting-TextFontOne Setting-Integrations-input-Rectangle'>
                    <option value='' selected>
                      Expenses
                    </option>
                    <option value=''>Incomes</option>
                    <option value=''>Clients</option>
                  </select>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <span>
                    <img src={checkbox} alt='' />
                    <img src={unCheckbox} alt='' />
                  </span>
                  <span className='Setting-TextFontOne ml-3'>
                    First lines corresponds to field names
                  </span>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='Setting-Integrations-Continue-Rectangle'>
                    <div className='d-flex justify-content-center'>
                      Continue
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

export default ImportData;
