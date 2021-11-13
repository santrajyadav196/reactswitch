import React, {useState} from "react";

import checkbox from "../../../../../Assets/assetsnew/checkbox.svg";
import UnCheckbox from "../../../../../Assets/assetsnew/checkbox-line-1.svg";

const ENotification = (params) => {
  return (
    <>
      <div className='Setting-Notifications-RectangleOne mb-4'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontTwo'>
              Choose which emails you would like to receive from AND.CO. These
              help you to get the most out of your AND.CO.
            </div>
          </div>
        </div>
      </div>

      <div className='Setting-Notifications-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontOne-BigFont'>
              Updates from AND.CO
            </div>
          </div>
          <div className='col'>
            <div className='d-flex justify-content-end'>
              <div className='Setting-TextFontTwo-BigFont'>uncheck all</div>
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Notifications-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Getting started with AND.CO
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              A series of emails designed to help you get setup and comfortable
              with the app.
            </div>
          </div>

          <div className='col'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Tips from your Chief Operator
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              General information regarding AND.CO and useful tips.
            </div>
          </div>

          <div className='col'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>Feature updates</span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              New features and general updates to the AND.CO app.
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Special Announcements
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Special announcements from the AND.CO Team!
            </div>
          </div>

          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                AND.CO Pro offers
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Special offers for Pro subscriptions
            </div>
          </div>
        </div>
      </div>

      <div className='Setting-Notifications-Rectangle mt-4'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontOne-BigFont'>
              Notifications and reminders
            </div>
          </div>
          <div className='col'>
            <div className='d-flex justify-content-end'>
              <div className='Setting-TextFontTwo-BigFont'>uncheck all</div>
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Notifications-Rectangle'>
        <div className='row'>
          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Unread Support Messages
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Reminder of an unread message from your Chief Operator
            </div>
          </div>

          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Tasks due reminders
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Notifies you when your tasks are due
            </div>
          </div>
          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Invoice draft reminders
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Reminds you if you have a draft invoice that has not yet been
              sent.
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Proposal/Contract drafts reminders
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Reminds you if you have a draft proposals or contracts.
            </div>
          </div>

          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Outstanding invoice reminders
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Reminds you when an outstanding invoice is past its due date.
            </div>
          </div>
          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Proposal/Contract due date reminder
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Reminds you of an upcoming proposal/contract due date.
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Client viewed invoice
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Notifies you when your client has viewed your invoice.
            </div>
          </div>

          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Client viewed proposal/contract
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Notifies you when your client has viewed your proposal or
              contract.
            </div>
          </div>
          <div className='col-4'>
            <div className=''>
              <span>
                <img src={checkbox} alt='' />
                {/* <img src={UnCheckbox} alt='' /> */}
              </span>
              <span className='Setting-TextFontOne ml-3'>
                Reminders to invoice project
              </span>
            </div>
            <div className='Setting-TextFontTwo Setting-Notifications-Email-Margin mt-2'>
              Reminds you when to invoice your Project.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ENotification;
