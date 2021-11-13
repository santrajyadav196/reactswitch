import React, {useState} from "react";

import arrowFarward from "../../../../Assets/assetsnew/arrow-farward.svg";

import UserInfo from "./components/UserInfo";
import Plan from "./components/Plan";
import TwoFactorAuth from "./components/TwoFactorAuth";
import LoginWithFacebook from "./components/LoginWithFacebook";
import LoginWithGoogle from "./components/LoginWithGoogle";
import LoginWithFiverr from "./components/LoginWithFiverr";
import LoginWithApple from "./components/LoginWithApple";

import "./AccountAndSecurity.css";

const AccountAndSecurity = (params) => {
  const [selector, setSelector] = useState("AccountAndSecurityList");

  const updateSelector = (data) => {
    setSelector(data);
  };

  const UiRender = () => {
    switch (selector) {
      case "AccountAndSecurityList":
        return (
          <>
            <AccountAndSecurityList />
          </>
        );
      case "User Info":
        return (
          <>
            <UserInfo />
          </>
        );
      case "TwoFactorAuth":
        return (
          <>
            <TwoFactorAuth />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  const AccountAndSecurityList = () => {
    return (
      <>
        <div className='Setting-AS-Account-Rectangle'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne-BigFont'>Account</div>
            </div>
          </div>
        </div>
        <div
          className='Setting-AS-Rectangle mt-3'
          onClick={() => {
            updateSelector("User Info");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>User Info</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <Plan />
        <div
          className='Setting-AS-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#PlanModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Plan</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='Setting-AS-Rectangle'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Billing</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='Setting-AS-Account-Rectangle mt-4'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne-BigFont'>Security</div>
            </div>
          </div>
        </div>
        <div
          className='Setting-AS-Rectangle mt-3'
          onClick={() => {
            updateSelector("TwoFactorAuth");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>2-Factor-Authentication</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-AS-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#FacebookModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Login with Facebook</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <LoginWithFacebook />
        <div
          className='Setting-AS-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#GoogleModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Login with Google</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <LoginWithGoogle />
        <div
          className='Setting-AS-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#FiverrModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Login with Fiverr</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <LoginWithFiverr />
        <div
          className='Setting-AS-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#AppleModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Login with Apple</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <LoginWithApple />
      </>
    );
  };
  return (
    <>
      <div>
        <UiRender />
      </div>
    </>
  );
};

export default AccountAndSecurity;
