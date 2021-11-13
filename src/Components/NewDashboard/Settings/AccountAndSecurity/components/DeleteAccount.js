import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import checkboxActive from "../../../../../Assets/assetsnew/checkbox.svg";
import checkboxInactive from "../../../../../Assets/assetsnew/checkbox-line-1.svg";

const DeleteAccount = () => {
  return (
    <>
      <div
        class='modal fade'
        id='DeleteAccountModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen Setting-AS-Modal-Rectangle'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Delete Account
                  </div>
                </div>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <img
                      className='Setting-Cursor'
                      data-bs-dismiss='modal'
                      src={closedBtn}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='Setting-TextFontTwo'>
                    Are you sure you would like to delete this account?
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Please confirm that you understand:
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div className='Setting-TextFontOne'>
                    <img src={checkboxActive} alt='' />
                    <img src={checkboxInactive} alt='' />
                    <span className='ml-3'>
                      I will lose access to all projects, clients, invoices etc.
                    </span>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div className='Setting-TextFontOne'>
                    <img src={checkboxActive} alt='' />
                    <img src={checkboxInactive} alt='' />
                    <span className='ml-3'>
                      Outstanding invoices can’t be paid online.
                    </span>
                  </div>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col'>
                  <div className='Setting-AS-Unsuccess-Rectangle'>
                    <div className='d-flex justify-content-center'>Cancel</div>
                  </div>
                </div>
                <div className='col'>
                  <div className='Setting-AS-Success-Rectangle'>
                    <div className='d-flex justify-content-center'>Delete</div>
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

export default DeleteAccount;
