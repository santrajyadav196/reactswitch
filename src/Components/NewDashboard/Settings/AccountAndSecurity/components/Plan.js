import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import planSymbol from "../../../../../Assets/assetsnew/Plan-Symbol.jpg";

const Plan = () => {
  return (
    <>
      <div
        class='modal fade'
        id='PlanModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen Setting-AS-Modal-Rectangle'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <img
                      className='Setting-Cursor'
                      data-bs-dismiss='modal'
                      src={closedBtn}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center'>
                    <img src={planSymbol} alt='' />
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='text-center'>
                    <div className='Setting-TextFontOne-BigFont'>
                      Upgrade your business
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div className='text-center'>
                    <div className='Setting-TextFontTwo px-5'>
                      Become a AND.CO Pro member to unlock these awesome
                      features:
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col'>
                  <div className='Setting-AS-Unsuccess-Rectangle'>
                    <div className='d-flex justify-content-center'>Cancel</div>
                  </div>
                </div>
                <div className='col'>
                  <div className='Setting-AS-Success-Rectangle'>
                    <div className='d-flex justify-content-center'>Upgrade</div>
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

export default Plan;
