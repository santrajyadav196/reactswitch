import React, {useState} from "react";

import arrowFarward from "../../../../Assets/assetsnew/arrow-farward.svg";

import BNotification from "./components/BNotification";
import ENotification from "./components/ENotification";
import TTNotification from "./components/TTNotification";

import "./Notification.css";

const Notification = (params) => {
  const [selector, SetSelector] = useState("NotificationList");

  const updateSelector = (data) => {
    SetSelector(data);
  };

  const UiRender = () => {
    switch (selector) {
      case "NotificationList":
        return (
          <>
            <NotificationList />
          </>
        );
      case "BNotification":
        return (
          <>
            <BNotification />
          </>
        );
      case "ENotification":
        return (
          <>
            <ENotification />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  const NotificationList = () => {
    return (
      <>
        <div
          className='Setting-Notifications-Rectangle'
          onClick={() => {
            updateSelector("BNotification");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Browser notifications</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Notifications-Rectangle'
          onClick={() => {
            updateSelector("ENotification");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Email notifications</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Notifications-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#TTNotificationModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>
                Time tracking notifications
              </div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <TTNotification />
      </>
    );
  };

  return (
    <>
      <UiRender />
    </>
  );
};

export default Notification;
