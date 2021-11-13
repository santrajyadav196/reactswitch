import React, {useState} from "react";
import plus from "../../../../../Assets/assetsnew/add-line-1.svg";
import arrowFarward from "../../../../../Assets/assetsnew/arrow-farward.svg";

const Zapier = () => {
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

      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Save new AND CO invoices to Dropbox
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Add new Google Contacts to AND CO as clients
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Subscribe new AND CO clients to a Mailchimp list
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Create Dropbox folders for new AND CO clients
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Create AND CO clients from new Wufoo entries
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Post direct Slack messages for new AND CO invoices
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Add new Stripe customers as clients within AND CO
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Create AND CO clients from new Google Sheets rows
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Create AND CO expenses from new Google Sheets rows
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='Setting-Integrations-Rectangle'>
        <div className='row mt-2'>
          <div className='col'>
            <div className='Setting-TextFontOne'>
              Post direct Slack messages for new AND CO expenses
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img src={arrowFarward} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Zapier;
