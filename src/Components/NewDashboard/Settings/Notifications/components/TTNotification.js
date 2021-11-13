import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";

import ForgetToTrack from "./ForgetToTrack";
import ForgetToStop from "./ForgetToStop";

const TTNotification = () => {
  const [selector, setSelector] = useState("Forgetting to track your time?");

  const updateSelector = (data) => {
    setSelector(data);
  };

  const UiRender = () => {
    switch (selector) {
      case "Forgetting to track your time?":
        return (
          <>
            <ForgetToTrack />
          </>
        );
      case "Forgetting to stop your timer?":
        return (
          <>
            <ForgetToStop />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  return (
    <>
      <div
        class='modal fade'
        id='TTNotificationModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen TTN-modal-dialog'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='Setting-Notifications-TTN-Rectangle'>
                <div className='row'>
                  <div className='col-3'>
                    <span>
                      <img data-bs-dismiss='modal' src={closedBtn} alt='' />
                    </span>
                    <span className='Setting-TextFontOne ml-3'>Close</span>
                  </div>
                  <div className='col-6'>
                    <div className='text-center'>
                      <span className='Setting-TextFontOne-BigFont1'>
                        Time Tracking Notification
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='Setting-Notifications-TTN-Rectangle mt-4'>
                <div className='row'>
                  <div className='col-3'></div>
                  <div className='col-6'>
                    <div className='d-flex justify-content-center'>
                      <span
                        className={
                          selector === "Forgetting to track your time?"
                            ? "Setting-Notifications-TTN-Selected"
                            : "Setting-Notifications-TTN-Not-Selected"
                        }
                        onClick={() => {
                          updateSelector("Forgetting to track your time?");
                        }}>
                        Forgetting to track your time?
                      </span>
                      <span
                        className={
                          selector === "Forgetting to stop your timer?"
                            ? "Setting-Notifications-TTN-Selected"
                            : "Setting-Notifications-TTN-Not-Selected"
                        }
                        onClick={() => {
                          updateSelector("Forgetting to stop your timer?");
                        }}>
                        Forgetting to stop your timer?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <UiRender />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TTNotification;
