import React, {useState} from "react";

import arrowFarward from "../../../../Assets/assetsnew/arrow-farward.svg";

import BusinessInfo from "./components/BusinessInfo";
import Invoicing from "./components/Invoicing";
import Currency from "./components/Currency";
import Timezone from "./components/Timezone";
import DateFormat from "./components/DateFormat";
import SetAGoal from "./components/SetAGoal";

import "./Business.css";

const Business = () => {
  const [selector, setSelector] = useState("BusinessList");

  const updateSelector = (value) => {
    setSelector(value);
  };

  const UiRender = () => {
    switch (selector) {
      case "BusinessList":
        return (
          <>
            <BusinessList />
          </>
        );
      case "Business Info":
        return (
          <>
            <BusinessInfo />
          </>
        );
      case "Branding":
        return <>Branding</>;
      case "Invoicing":
        return (
          <>
            <Invoicing />
          </>
        );
      case "Set a goal":
        return (
          <>
            <SetAGoal />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  const BusinessList = () => {
    return (
      <div>
        <div
          className='Setting-Business-Rectangle'
          onClick={() => {
            updateSelector("Business Info");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Business Info</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Business-Rectangle'
          onClick={() => {
            updateSelector("Branding");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Branding</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Business-Rectangle'
          onClick={() => {
            updateSelector("Invoicing");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Invoicing</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Business-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#CurrencyModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Currency</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>INR</div>
              </div>
            </div>
          </div>
        </div>
        <Currency />
        <div
          className='Setting-Business-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#DateFormatModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Date/Number format</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  English(United State)
                </div>
              </div>
            </div>
          </div>
        </div>
        <DateFormat />
        <div
          className='Setting-Business-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#TimezoneModal'>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Timezone</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  (GMT-05:00)Eastern Time (US and Canada)
                </div>
              </div>
            </div>
          </div>
        </div>
        <Timezone />
        <div
          className='Setting-Business-Rectangle'
          onClick={() => {
            updateSelector("Set a goal");
          }}>
          <div className='row'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Set a goal</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  Invoice $ 12.00 per month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <UiRender />
    </div>
  );
};

export default Business;
