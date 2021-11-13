import React, {useState} from "react";

import checkbox from "../../../../../Assets/assetsnew/checkbox.svg";
import UnCheckbox from "../../../../../Assets/assetsnew/checkbox-line-1.svg";

const ForgetToStop = () => {
  return (
    <>
      <div className='row mt-4'>
        <div className='col-3'></div>
        <div className='col-6'>
          <div className='Setting-Notifications-TTN-Descriptions-Rectangle'>
            <div className='Setting-Notifications-TTN-Descriptions-bg-Rectangle mt-2'>
              <div>
                <span className=''>
                  <img src={checkbox} alt='' />
                  {/* <img src={UnCheckbox} alt='' /> */}
                </span>
                <span className='Setting-TextFontOne ml-3'>
                  Time tracking reminder
                </span>
              </div>
              <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
                Set a reminder for yourself to start tracking time
              </div>
            </div>
            <div className='mb-2 mt-3'>
              <label className='Setting-TextFontOne' htmlFor=''>
                Reminder message
              </label>
              <input
                className='Setting-TextFontOne Setting-TTN-input-Rectangle'
                type='text'
                placeholder=' Rrrrring. Time to track time!'
              />
            </div>

            <div className='mb-2'>
              <label className='Setting-TextFontOne' htmlFor='time'>
                Time
              </label>
              <div className='row'>
                <div className='col-4'>
                  <div className='Setting-TTN-Time-input-Rectangle'>
                    <input
                      className='Setting-TextFontOne Setting-TTN-Time-input-RectangleOne'
                      type='text'
                      placeholder='2'
                    />
                    <span className='Setting-TextFontOne ml-4'>hrs</span>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='Setting-TTN-Time-input-Rectangle'>
                    <input
                      className='Setting-TextFontOne Setting-TTN-Time-input-RectangleOne'
                      type='text'
                      placeholder='2'
                    />
                    <span className='Setting-TextFontOne ml-4'>mins</span>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='Setting-TTN-Time-input-Rectangle'>
                    <input
                      className='Setting-TextFontOne Setting-TTN-Time-input-RectangleOne'
                      type='text'
                      placeholder='2'
                    />
                    <span className='Setting-TextFontOne ml-4'>sec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='Setting-Notification-Success-Rectangle mt-5'>
            <div className='text-center'>Save Time</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetToStop;
