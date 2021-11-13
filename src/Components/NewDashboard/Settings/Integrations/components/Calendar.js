import React, {useState} from "react";

import plus from "../../../../../Assets/assetsnew/add-line-1.svg";
import emptyCalendar from "../../../../../Assets/assetsnew/calendar-inner-symbol.svg";

const Calendar = () => {
  return (
    <>
      <div className='Setting-Integrations-Integration-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontOne-BigFont'>Integrations</div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <div className='Setting-Integrations-Integration-Oval'>
                <img src={plus} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Calendar-Rectangle mt-3'>
        <div className='row mt-5 mb-3'>
          <div className='col'>
            <div className='d-flex justify-content-center'>
              <img src={emptyCalendar} alt='' />
            </div>
          </div>
        </div>
        <div className='row mt-4 mb-5'>
          <div className='col'>
            <div className='d-flex justify-content-center'>
              <div className='Setting-TextFontOne-BigFont'>
                There is no calendar integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
