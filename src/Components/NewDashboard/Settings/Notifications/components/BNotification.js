import React, {useState} from "react";

import activeSwitch from "../../../../../Assets/assetsnew/switch-on-symbol.svg";
import passiveSwitch from "../../../../../Assets/assetsnew/switch-off-symbol.svg";

const BNotification = (params) => {
  return (
    <>
      <div className='Setting-Notifications-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontOne'>Notifications</div>
          </div>
          <div className='col'>
            <div className='d-flex justify-content-end'>
              <img src={activeSwitch} alt='' />
              <img src={passiveSwitch} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Notifications-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontOne'>Notifications sound #bing</div>
          </div>
          <div className='col'>
            <div className='d-flex justify-content-end'>
              <img src={activeSwitch} alt='' />
              <img src={passiveSwitch} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BNotification;
