import React, {useState} from "react";

import arrowFarward from "../../../../Assets/assetsnew/arrow-farward.svg";
import slack from "../../../../Assets/assetsnew/Slack.jpg";
import shopify from "../../../../Assets/assetsnew/shopify.jpg";
import zapier from "../../../../Assets/assetsnew/Zapier.svg";
import calendarLogo from "../../../../Assets/assetsnew/calendar-logo.svg";

import ImportData from "./components/ImportData";
import Slack from "./components/Slack";
import Zapier from "./components/Zapier";
import Shopify from "./components/Shopify";
import Calendar from "./components/Calendar";

import "./Integration.css";

const Integration = () => {
  const [selector, setSelector] = useState("IntegrationList");

  const updateSelector = (value) => {
    setSelector(value);
  };

  const UiRender = () => {
    switch (selector) {
      case "IntegrationList":
        return (
          <>
            <IntegrationList />
          </>
        );
      case "Zapier":
        return (
          <>
            <Zapier />
          </>
        );
      case "Calendar":
        return (
          <>
            <Calendar />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  const IntegrationList = () => {
    return (
      <>
        <div
          className='Setting-Integrations-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#ImportDataModal'>
          <div className='row mt-2'>
            <div className='col'>
              <div className='Setting-TextFontOne'>Import Data</div>
            </div>
            <div className='col'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  Import expenses, income client into And.Co
                </div>
              </div>
            </div>
          </div>
          <ImportData />
        </div>
        <div
          className='Setting-Integrations-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#SlackModal'>
          <div className='row'>
            <div className='col'>
              <img src={slack} alt='' />
            </div>
            <div className='col mt-2'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  Alerts on everything and chat with your CO through Slack
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slack />
        <div
          className='Setting-Integrations-Rectangle'
          onClick={() => {
            updateSelector("Zapier");
          }}>
          <div className='row'>
            <div className='col'>
              <img src={zapier} alt='' />
            </div>
            <div className='col mt-1'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  Connect any app with And.Co and other way around
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='Setting-Integrations-Rectangle'
          data-bs-toggle='modal'
          data-bs-target='#ShopifyModal'>
          <div className='row'>
            <div className='col'>
              <img src={shopify} alt='' />
            </div>
            <div className='col mt-1'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  Import income from sales into And.Co
                </div>
              </div>
            </div>
          </div>
        </div>
        <Shopify />
        <div
          className='Setting-Integrations-Rectangle'
          onClick={() => {
            updateSelector("Calendar");
          }}>
          <div className='row'>
            <div className='col'>
              <img src={calendarLogo} alt='' />
            </div>
            <div className='col mt-1'>
              <div className='d-flex flex-row-reverse'>
                <img src={arrowFarward} alt='' />
                <div className='Setting-TextFontTwo mr-3'>
                  Show deadlines, due dates and more in your calendar
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <UiRender />
    </>
  );
};

export default Integration;
