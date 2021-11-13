import React, {useState} from "react";

import closedBtn from "../../../../Assets/assetsnew/close-circle-line-3.svg";

import "./Template.css";

const MsgTemplate = (params) => {
  return (
    <>
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen Setting-Templates-Message-Rectangle'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-9'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Email message template
                  </div>
                </div>
                <div className='col-3'>
                  <div className='d-flex flex-row-reverse'>
                    <img data-bs-dismiss='modal' src={closedBtn} alt='' />
                  </div>
                </div>
              </div>

              <form action=''>
                <div className='row mt-4'>
                  <div className='col'>
                    <label className='Setting-TextFontOne' htmlFor=''>
                      Template name
                    </label>
                    <input
                      className='Setting-TextFontOne Setting-Templates-Name-Input-Rectangle'
                      type='text'
                      placeholder='Template name'
                    />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label className='Setting-TextFontOne' htmlFor=''>
                      Message
                    </label>
                    <input
                      className='Setting-TextFontOne Setting-Templates-Message-Input-Rectangle'
                      type='text'
                      placeholder='Subject'
                    />
                    <textarea
                      className='Setting-TextFontOne Setting-Templates-Message-Input-RectangleOne'
                      type='text'
                      placeholder='Message......'
                      rows='8'
                    />
                  </div>
                </div>

                <div className='row mt-4'>
                  <div className='col'>
                    <div className='Setting-Templates-Cancel-Rectangle'>
                      <div className='d-flex justify-content-center'>
                        Cancel
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='Setting-Templates-Success-Rectangle'>
                      <div className='d-flex justify-content-center'>
                        Save Email Template
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MsgTemplate;
