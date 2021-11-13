import React, {useState} from "react";

import radioActive from "../../../../../Assets/assetsnew/radio-active.svg";
import radioInActive from "../../../../../Assets/assetsnew/radio_button_in_active.svg";
import profileSymbol from "../../../../../Assets/assetsnew/Profile-Big.svg";

import PasswordChange from "./PasswordChange";
import DeleteAccount from "./DeleteAccount";

const UserInfo = () => {
  return (
    <>
      <form action=''>
        <div className='Setting-AS-UserInfo-Form-Rectangle'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne-BigFont'>Profile</div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-7'>
              <div className='mb-3'>
                <label className='Setting-TextFontOne' htmlFor=''>
                  Full Name
                </label>
                <input
                  className='Setting-TextFontOne Setting-AS-input-Rectangle'
                  type='text'
                  placeholder='Enter Your Full Name'
                />
              </div>
              <div className='mb-3'>
                <label className='Setting-TextFontOne' htmlFor=''>
                  Email
                </label>
                <input
                  className='Setting-TextFontOne Setting-AS-input-Rectangle'
                  type='email'
                  placeholder='Enter Your Email'
                />
              </div>
              <div className='mb-3'>
                <div className='row'>
                  <div className='col'>
                    <label className='Setting-TextFontOne' htmlFor=''>
                      Profession
                    </label>
                    <select
                      className='form-select Setting-TextFontOne Setting-AS-input-Rectangle'
                      name=''
                      id=''>
                      <option value='' selected>
                        Designer
                      </option>
                    </select>
                  </div>
                  <div className='col'>
                    <label className='Setting-TextFontOne' htmlFor=''>
                      Experience level
                    </label>
                    <select
                      className='form-select Setting-TextFontOne Setting-AS-input-Rectangle'
                      name=''
                      id=''>
                      <option value='' selected>
                        Beginner(0-3Years)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <label className='Setting-TextFontOne' htmlFor=''>
                  Organization
                </label>
                <div className='row mt-2'>
                  <div className='col'>
                    <div className='Setting-TextFontOne'>
                      <img src={radioActive} alt='' />
                      <span className='ml-3'>I work solo</span>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='Setting-TextFontOne'>
                      <img src={radioInActive} alt='' />
                      <span className='ml-3'>I work on a team</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='Setting-AS-Success-Rectangle'>
                    <div className='d-flex justify-content-center'>
                      Save Changes
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-5 mt-5'>
              <div className='d-flex justify-content-center'>
                <img src={profileSymbol} alt='' />
              </div>
              <div className='d-flex justify-content-center mt-5 ml-3'>
                <div className='Setting-TextFont-Brand-BigFont Setting-AS-Upload-Photo'>
                  Update Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className='row'>
        <div className='col'>
          <div className='Setting-AS-UserInfo-Form-Rectangle'>
            <div className='row'>
              <div className='col'>
                <div className='px-5'>
                  <div className='Setting-TextFontOne-BigFont mt-3 mb-3'>
                    Password
                  </div>
                  <div className='Setting-TextFontTwo my-3'>
                    Set up your business info, logo, brand, color and more
                  </div>
                  <div
                    className='Setting-AS-Success-RectangleOne my-3'
                    data-bs-toggle='modal'
                    data-bs-target='#PasswordChangeModal'>
                    <div className='d-flex justify-content-center'>
                      Change Password
                    </div>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='px-5'>
                  <div className='Setting-TextFontOne-BigFont mt-3 mb-3'>
                    Download Data
                  </div>
                  <div className='Setting-TextFontTwo my-3'>
                    Set up your business info, logo, brand, color and more
                  </div>
                  <div className='Setting-AS-Success-RectangleOne my-3'>
                    <div className='d-flex justify-content-center'>
                      Download data
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='px-5'>
                  <div className='Setting-TextFontOne-BigFont mt-3 mb-3'>
                    Danger Zone
                  </div>
                  <div className='Setting-TextFontTwo my-3'>
                    Set up your business info, logo, brand, color and more
                  </div>
                  <div
                    className='Setting-AS-Success-RectangleOne my-3'
                    data-bs-toggle='modal'
                    data-bs-target='#DeleteAccountModal'>
                    <div className='d-flex justify-content-center'>
                      Close your account
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PasswordChange />
        <DeleteAccount />
      </div>
    </>
  );
};

export default UserInfo;
