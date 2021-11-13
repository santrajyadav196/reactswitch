import React, {useState} from "react";

import locationPicker from "../../../../../Assets/assetsnew/map-location-pin-up.svg";
import plus from "../../../../../Assets/assetsnew/add-line-1.svg";
import percentSymbol from "../../../../../Assets/assetsnew/percent-symbol.svg";
import dollorSymbol from "../../../../../Assets/assetsnew/dollar-symbol.svg";
import deleteSymbol from "../../../../../Assets/assetsnew/delete-black-symbol.svg";
import switchOnSymbol from "../../../../../Assets/assetsnew/switch-on-symbol.svg";
import switchOffSymbol from "../../../../../Assets/assetsnew/switch-off-symbol.svg";

const Invoicing = (props) => {
  const [inputList, setInputList] = useState([{}]);
  const [selector, setSelector] = useState("percent");

  const updateSelector = (value) => {
    setSelector(value);
  };

  const addNewInputHandler = () => {
    setInputList([...inputList, {}]);
  };
  const removedInputHandler = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const UiRender = () => {
    switch (selector) {
      case "percent":
        return (
          <>
            <Percent />
          </>
        );
      case "dollar":
        return (
          <>
            <Dollar />
          </>
        );
      default:
        return <>Not Selected</>;
    }
  };

  const Percent = () => {
    return (
      <>
        <input
          type='text'
          className='Setting-Business-input-Rectangle Setting-TextFontOne'
          id='exampleFormControlInput1'
          placeholder='0.00%'
        />
      </>
    );
  };

  const Dollar = () => {
    return (
      <>
        <input
          type='text'
          className='Setting-Business-input-Rectangle Setting-TextFontOne'
          id='exampleFormControlInput1'
          placeholder='$0.00'
        />
      </>
    );
  };

  const AddNewTaxes = () => {
    return (
      <>
        <div className='row'>
          <div className='col-3'>
            <label
              htmlFor='exampleFormControlInput1'
              className='Setting-TextFontOne'>
              Tax Label
            </label>
            <input
              type='text'
              className='Setting-Business-input-Rectangle Setting-TextFontOne'
              id='exampleFormControlInput1'
              placeholder='Tax Label'
            />
          </div>
          <div className='col-3'>
            <div className='row'>
              <div className='col'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='Setting-TextFontOne'>
                  Tax rate
                </label>
                <UiRender />
              </div>

              <div className='col'>
                <div className='Setting-Business-Invoicing-AddTaxes-Margin'>
                  <div className='Setting-TextFontOne'>
                    <div className='Setting-Business-Invoicing-Tax-Selector'>
                      <span
                        className={
                          selector === "percent"
                            ? "Setting-Business-Invoicing-Selected-Rectangle"
                            : "Setting-Business-Invoicing-Not-Selected-Rectangle"
                        }
                        onClick={() => {
                          updateSelector("percent");
                        }}>
                        <img className='' src={percentSymbol} alt='' />
                      </span>
                      <span
                        className={
                          selector === "dollar"
                            ? "Setting-Business-Invoicing-Selected-Rectangle"
                            : "Setting-Business-Invoicing-Not-Selected-Rectangle"
                        }
                        onClick={() => {
                          updateSelector("dollar");
                        }}>
                        <img className='' src={dollorSymbol} alt='' />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1'>
            <div className='mt-5'>
              <img
                className='Setting-Cursor'
                onClick={removedInputHandler}
                src={deleteSymbol}
                alt=''
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className='row Setting-Business-Form-Rectangle'>
        <div className='col mt-4'>
          <div className='row'>
            <div className='col'>
              <form action=''>
                <div className='Setting-Business-label-Margin'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Region Settings
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className=''>
                        <label
                          htmlFor='exampleFormControlInput1'
                          className='Setting-TextFontOne'>
                          Country Preset
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          className='Setting-Business-input-RectangleOne Setting-TextFontOne'
                          id='exampleFormControlInput1'
                          placeholder='Country Preset'
                          aria-describedby='basic-addon1'
                        />
                        <span className='Setting-Business-Invoicing-Location-Rectangle'>
                          <span className='Setting-Business-Invoicing-Location-Bg'>
                            <img src={locationPicker} alt='' />
                            <span className='Setting-TextFont-Brand ml-2'>
                              Change
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='row'>
                        <div className='col-6'>
                          <label
                            className='Setting-TextFontOne'
                            htmlFor='inputGroupSelect01'>
                            Currency
                          </label>
                          <select
                            className='form-select Setting-TextFontOne Setting-Business-input-Rectangle'
                            id='inputGroupSelect01'>
                            <option selected>INR</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                          </select>
                        </div>
                        <div className='col-6'>
                          <label
                            className='Setting-TextFontOne'
                            htmlFor='inputGroupSelect01'>
                            Invoice language
                          </label>
                          <select
                            className='form-select Setting-TextFontOne Setting-Business-input-Rectangle'
                            id='inputGroupSelect01'>
                            <option selected>English</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='row'>
                        <div className='col-6'>
                          <label
                            className='Setting-TextFontOne'
                            htmlFor='inputGroupSelect01'>
                            Region Format
                          </label>
                          <select
                            className='form-select Setting-TextFontOne Setting-Business-input-Rectangle'
                            id='inputGroupSelect01'>
                            <option selected>English(United State)</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-Invoicing-HLine'></div>
                <div className='Setting-Business-label-Margin'>
                  <div className='Setting-TextFontOne-BigFont'>Taxes</div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  {inputList.map(() => {
                    return <AddNewTaxes />;
                  })}
                </div>
                <div
                  className='Setting-Business-Invoicing-AddTaxes'
                  onClick={addNewInputHandler}>
                  <img src={plus} alt='' /> Add a tax
                </div>

                <div className='Setting-Business-Invoicing-HLine'></div>
                <div className='Setting-Business-label-Margin'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Payment preferences
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <label
                        className='Setting-TextFontOne'
                        htmlFor='inputGroupSelect01'>
                        Payment Due
                      </label>
                      <select
                        className='form-select Setting-TextFontOne Setting-Business-input-Rectangle'
                        id='inputGroupSelect01'>
                        <option selected>upon receipt</option>
                        <option value='1'>7 days</option>
                        <option value='2'>15 days</option>
                        <option value='3'>1 month</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6 form-switch'>
                      <div className='row'>
                        <div className='col-8'>
                          <label
                            className='Setting-TextFontOne'
                            htmlFor='inputGroupSelect01'>
                            Accept online payments
                          </label>
                        </div>
                        <div className='col-4'>
                          <div className='d-flex flex-row-reverse'>
                            <img src={switchOnSymbol} alt='' />
                            <img src={switchOffSymbol} alt='' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-Invoicing-HLine'></div>
                <div className='Setting-Business-label-Margin'>
                  <div className='Setting-TextFontOne-BigFont'>
                    Invoive label
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='Setting-TextFontTwo'>
                        By default, all Invoices are labelled 'Invoice' followed
                        by a number (e.g., "Invoice 1"). If your local law,
                        language or occupation requires a different name for
                        your invoices, you can set that here.
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className=''>
                        <label
                          htmlFor='exampleFormControlInput1'
                          className='Setting-TextFontOne'>
                          Invoice
                        </label>
                      </div>
                      <div>
                        <input
                          type='text'
                          className='Setting-Business-input-Rectangle Setting-TextFontOne'
                          id='exampleFormControlInput1'
                          placeholder='Invoice'
                          aria-describedby='basic-addon1'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className=''>
                        <label
                          htmlFor='exampleFormControlInput1'
                          className='Setting-TextFontOne'>
                          Notes and alternative payment instructions
                        </label>
                      </div>
                      <div>
                        <textarea
                          type='textarea'
                          className='Setting-Business-input-Rectangle Setting-TextFontOne'
                          id='exampleFormControlInput1'
                          placeholder='This is the place to tell your client to pay via check or any other payment methods....'
                          rows='4'
                          aria-describedby='basic-addon1'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Setting-Business-label-Margin'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className=''>
                        <label
                          htmlFor='exampleFormControlInput1'
                          className='Setting-TextFontOne'>
                          Default email text
                        </label>
                      </div>
                      <div>
                        <textarea
                          type='textarea'
                          className='Setting-Business-input-Rectangle Setting-TextFontOne'
                          id='exampleFormControlInput1'
                          placeholder=''
                          rows='6'
                          aria-describedby='basic-addon1'
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invoicing;
