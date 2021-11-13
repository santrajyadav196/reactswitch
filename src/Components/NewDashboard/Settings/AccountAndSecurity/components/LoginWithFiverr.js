import React, {useState} from "react";

import closedBtn from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import fiverrSymbol from "../../../../../Assets/assetsnew/fiverr.jpg";

const LoginWithFiverr = () => {
  return (
    <>
      <div
        class='modal fade'
        id='FiverrModal'
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
                    <img src={fiverrSymbol} alt='' />
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <div className='text-center'>
                    <div className='Setting-TextFontOne-BigFont'>
                      Login with fiverr
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <div className='text-center'>
                    <div className='Setting-TextFontTwo px-5'>
                      Set up yor business info, logo, brand color and more.
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
                    <div className='d-flex justify-content-center'>
                      Login With Fiverr
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

export default LoginWithFiverr;
