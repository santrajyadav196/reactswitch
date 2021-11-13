import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";

const PasswordChange = () => {
  return (
    <>
      <div
        class='modal fade'
        id='PasswordChangeModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen Setting-AS-Modal-Rectangle'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Change Password
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
              <form action=''>
                <div className='row mt-4'>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='Setting-TextFontOne' htmlFor=''>
                        Old Password
                      </label>
                      <input
                        className='Setting-TextFontOne Setting-AS-input-Rectangle'
                        type='password'
                        placeholder='Enter Your Old Password'
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='Setting-TextFontOne' htmlFor=''>
                        New Password
                      </label>
                      <input
                        className='Setting-TextFontOne Setting-AS-input-Rectangle'
                        type='password'
                        placeholder='Enter Your New Password'
                      />
                      <div className='d-flex justify-content-end'>
                        <div className='Setting-TextFontOne'>
                          Minimum number of character should be 5.
                        </div>
                      </div>
                    </div>
                    <div className='mb-5'>
                      <label className='Setting-TextFontOne' htmlFor=''>
                        Re-Type New Password
                      </label>
                      <input
                        className='Setting-TextFontOne Setting-AS-input-Rectangle'
                        type='password'
                        placeholder='Re-Enter Your New Password'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='Setting-AS-Success-Rectangle'>
                      <div className='d-flex justify-content-center'>
                        Update Password
                      </div>
                    </div>
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

export default PasswordChange;
