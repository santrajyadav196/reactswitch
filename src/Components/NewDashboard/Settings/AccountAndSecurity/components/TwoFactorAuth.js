import React, {useState} from "react";

import arrowFarward from "../../../../../Assets/assetsnew/arrow-farward.svg";
import activeSwitch from "../../../../../Assets/assetsnew/switch-on-symbol.svg";
import passiveSwitch from "../../../../../Assets/assetsnew/switch-off-symbol.svg";

const TwoFactorAuth = (params) => {
  return (
    <>
      <div className='Setting-AS-UserInfo-Form-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontTwo'>
              2-Factor Authentication helps to keep your account secure. Here’s
              how it works: Whenever you log in from a new device, we’ll email
              you a verification code and ask you to submit it before logging
              in.
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-AS-Rectangle mt-3 px-5'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontOne'>2-Factor Authentication</div>
          </div>
          <div className='col'>
            <div className='d-flex justify-content-end'>
              <img src={activeSwitch} alt='' />
              <img src={passiveSwitch} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-AS-Rectangle mt-3 px-5'>
        <div className='row'>
          <div className='col-9'>
            <div className='Setting-TextFontOne'>
              If you think your account has been compromised you should reset
              your password immediately.
            </div>
          </div>
          <div className='col-3'>
            <div className='d-flex justify-content-end'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoFactorAuth;
