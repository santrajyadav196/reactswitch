import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import slack from "../../../../../Assets/assetsnew/Slack-Big.jpg";

const Slack = () => {
  return (
    <>
      <div
        className='modal fade'
        id='SlackModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen Setting-Integrations-ImportData-Rectangle'>
          <div className='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <img data-bs-dismiss='modal' src={closedBtn} alt='' />
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div className='d-flex justify-content-center'>
                    <img src={slack} alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center'>
                    <div className='Setting-TextFontOne-BigFont'>
                      Connect Slack
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='Setting-TextFontTwo'>
                    <div className='d-flex justify-content-center'>
                      <div>Get alerts on everything business.</div>
                    </div>
                    <div className='d-flex justify-content-center pl-5 pr-3'>
                      <div>
                        Yeah. e-v-e-r-y-t-h-i-n-g b-u-s-i-n-e-s-s. But
                        seriously. Connect below to get alerts payments,
                        invoices, clients and a bunch more.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='d-flex justify-content-center'>
                  <div className='col-6'>
                    <div className='Setting-Integrations-Continue-Rectangle'>
                      <div className='d-flex justify-content-center'>
                        Connect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slack;
