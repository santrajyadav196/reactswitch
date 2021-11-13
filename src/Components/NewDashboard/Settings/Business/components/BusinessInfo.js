import React, {useState} from "react";

import radioButton1 from "../../../../../Assets/assetsnew/radio-active.svg";
import radioButton2 from "../../../../../Assets/assetsnew/radio-button-line-2.svg";

const BusinessInfo = () => {
  return (
    <div>
      <div className='row Setting-Business-Form-Rectangle'>
        <div className='col mt-4'>
          <div className='row'>
            <div className='col'>
              <div className='form'>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-4'>
                      {/* <input
                      class='ml-1'
                      type='checkbox'
                      id='inlineCheckbox1'
                      value=''
                    /> */}
                      <img className='' src={radioButton1} alt='' />
                      <label
                        class='Setting-TextFontOne ml-3'
                        for='inlineCheckbox1'>
                        Use my name as my business name
                      </label>
                    </div>
                    <div className='col-4'>
                      <img src={radioButton2} alt='' />
                      {/* <input
                      class='Setting-TextFontOne'
                      type='checkbox'
                      id='inlineCheckbox1'
                      value=''
                    /> */}
                      <label
                        class='Setting-TextFontOne ml-3'
                        for='inlineCheckbox1'>
                        Use a registered business name
                      </label>
                    </div>
                  </div>
                </div>

                <div class='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          Business Name
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='Business Name'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          Phone Number
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='Phone Number'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          Business Address
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='Business Address'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-3'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          City
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='City'
                        />
                      </div>
                    </div>
                    <div className='col-3'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          Zip Code
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='Zip Code'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-3'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          Country
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='Country'
                        />
                      </div>
                    </div>
                    <div className='col-3'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          State
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='State'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-3'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          Tax ID Label
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='Tax ID Label'
                        />
                      </div>
                    </div>
                    <div className='col-3'>
                      <div>
                        <label
                          for='exampleFormControlInput1'
                          class='Setting-TextFontOne'>
                          Tax ID Number
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          class='Setting-TextFontOne Setting-Business-input-Rectangle'
                          id='exampleFormControlInput1'
                          placeholder='Tax ID Number'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='Setting-Business-Save-Rectangle'>
                        <span className='d-flex justify-content-center'>
                          Save Settings
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
