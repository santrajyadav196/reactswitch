import React, {useState} from "react";

import closedBtn from "../../../../Assets/assetsnew/close-circle-line-3.svg";
import coloredCheckbox from "../../../../Assets/assetsnew/checkbox.svg";
import checkbox from "../../../../Assets/assetsnew/checkbox-line-1.svg";
import file2Symbol from "../../../../Assets/assetsnew/file2Symbol.svg";
import blackDropDown from "../../../../Assets/assetsnew/arrow-down-black.svg";
import clock from "../../../../Assets/assetsnew/timer-symbol.svg";
import coloredDeleteSymbol from "../../../../Assets/assetsnew/coloredDelete.svg";
import counter from "../../../../Assets/assetsnew/counter-box.svg";
import upArrow from "../../../../Assets/assetsnew/arrow-up.svg";
import downArrow from "../../../../Assets/assetsnew/arrow-down-black.svg";
import PlaySymbolFillBlack from "../../../../Assets/assetsnew/play-fill-black-symbol.svg";
import PlaySymbolFill from "../../../../Assets/assetsnew/play-symbol-fill-1.svg";
import PlayBtn2 from "../../../../Assets/assetsnew/play-circle-fill-3.svg";
import blackEditSymbol from "../../../../Assets/assetsnew/edit-black-symbol.svg";
import mergeTimer from "../../../../Assets/assetsnew/merge-timer-symbol.svg";

import "./TimeTrackingTimerEditList.css";

const TimeTrackingTimerEditList = () => {
  return (
    <div>
      <div
        class='modal fade'
        id='TimeTrackingTimerEditList'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen TimeTrackingTimerEditList-Rectangle modal-dialog-TimetrackingTimerEditList'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <span className='TimeTrackingTimer-TextFont1 TimeTrackingTimerEditList-Edit'>
                    Edit
                  </span>
                </div>
                <div className='col'>
                  <div className='d-flex flex-row-reverse'>
                    <img
                      className='TimeTrackingTimerEditLis-ClosedBtn'
                      data-bs-dismiss='modal'
                      src={closedBtn}
                      alt=''
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#EditTimeTrackingTimerList'
                    aria-expanded='false'
                    aria-controls='collapseExample'>
                    <div className='TimeTrackingTimerEditList-RectangleOne'>
                      <div className='row'>
                        <div className='col-8 mt-3'>
                          <div className='row'>
                            <div className='col-1'>
                              <img
                                className='TimeTrackingTimerEditList-CheckBox'
                                src={coloredCheckbox}
                                alt=''
                              />
                              {/* <img
                            className='TimeTrackingTimerEditList-CheckBox'
                            src={checkbox}
                            alt=''
                          /> */}
                            </div>
                            <div className='col-5 ml-1'>
                              <div className='d-flex flex-row'>
                                <div className='TimeTrackingTimer-TextFont1'>
                                  <span className='ml-2'>
                                    {/* <img src={clock} alt='timer' /> */}
                                    <img src={counter} alt='' />
                                    <img
                                      className='TimeTrackingTimer-Counter-downArrow'
                                      src={downArrow}
                                      alt=''
                                    />
                                    <img
                                      className='TimeTrackingTimer-Counter-UpArrow'
                                      src={upArrow}
                                      alt=''
                                    />
                                  </span>
                                  <span className='ml-3'>15:15:59</span>
                                  <span className='ml-3'>3:56 PM</span>
                                  <span className='ml-3'>12 Aug 2021</span>
                                </div>
                              </div>
                            </div>
                            <div className='col-5'>
                              <div className='TimeTrackingTimer-TextBrand'>
                                <div className='TimeTrackingTimer-CrProject-Rectangle2'>
                                  <span className='mr-2'>
                                    <img src={file2Symbol} alt='' />
                                  </span>
                                  <span className=''>
                                    Design a landing page for website
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-3 mt-3'>
                          <div className='TimeTrackingTimer-TextFont1'>
                            <div className='d-flex flex-row'>
                              <div className='row'>
                                <div className='col-8'>
                                  <span className='mr-2'>Fashan App......</span>
                                </div>
                                <div className='col-4'>
                                  <span className=''>Digitalogy.co</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-1 mt-3'>
                          <img src={PlaySymbolFill} alt='' />
                          {/* <img src={PlaySymbolFillBlack} alt='' /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row collapse' id='EditTimeTrackingTimerList'>
                <div className='col'>
                  <div className='TimeTrackingTimerEditList-RectangleTwo'>
                    <div className='TimeTrackingTimerEditList-Start-Timer-Tracking'></div>
                    <div className='TimeTrackingTimer-Start-Timer'>
                      <span>
                        <img
                          className='TimeTrackingTimerEditList-play-circle-fill-3'
                          src={PlayBtn2}
                          alt=''
                        />
                      </span>
                      <span className='ml-3'>Start Timer</span>
                    </div>
                    <div className='TimeTrackingTimerEditList-Start-Timer-Tracking'></div>
                    <div className='row TimeTrackingTimerEditList-MarginTop'>
                      <div className='col-8'>
                        <div className='row'>
                          <div className='col-1'>
                            {/* <img
                              className='TimeTrackingTimerEditList-CheckBox'
                              src={coloredCheckbox}
                              alt=''
                            /> */}
                            <img
                              className='TimeTrackingTimerEditList-CheckBox'
                              src={checkbox}
                              alt=''
                            />
                          </div>
                          <div className='col-5 ml-1'>
                            <div className='d-flex flex-row'>
                              <div className='TimeTrackingTimer-TextFont1'>
                                <span className=''>
                                  <span className='ml-2 d-inline-block'>
                                    <div className='TimeTrackingTimerEditList-Start-Timer-Tracking-Oval'></div>
                                  </span>
                                </span>
                                <span className='ml-3'>15:15:59</span>
                                <span className='ml-3'>3:56 PM</span>
                                <span className='ml-3'>12 Aug 2021</span>
                              </div>
                            </div>
                          </div>
                          <div className='col-5'>
                            <div className='TimeTrackingTimer-TextBrand'>
                              <div className='TimeTrackingTimer-CrProject-Rectangle2'>
                                <span className='mr-2'>
                                  <img src={file2Symbol} alt='' />
                                </span>
                                <span className=''>
                                  Design a landing page for website
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-3'>
                        <div className='TimeTrackingTimer-TextFont1'>
                          <div className='d-flex flex-row'>
                            <div className='row'>
                              <div className='col-8'>
                                <span className='mr-2'>Fashan App......</span>
                              </div>
                              <div className='col-4'>
                                <span className=''>Digitalogy.co</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-1'>
                        {/* <img src={PlaySymbolFill} alt='' /> */}
                        <img src={PlaySymbolFillBlack} alt='' />
                      </div>
                    </div>
                    <div className='TimeTrackingTimerEditList-Start-Timer-Tracking'></div>
                    <div className='row TimeTrackingTimerEditList-MarginTop'>
                      <div className='col-8'>
                        <div className='row'>
                          <div className='col-1'>
                            <img
                              className='TimeTrackingTimerEditList-CheckBox'
                              src={coloredCheckbox}
                              alt=''
                            />
                            {/* <img
                            className='TimeTrackingTimerEditList-CheckBox'
                            src={checkbox}
                            alt=''
                          /> */}
                          </div>
                          <div className='col-5 ml-1'>
                            <div className='d-flex flex-row'>
                              <div className='TimeTrackingTimer-TextFont1'>
                                <span className=''>
                                  <span className='ml-2 d-inline-block'>
                                    <div className='TimeTrackingTimerEditList-Start-Timer-Tracking-Oval'></div>
                                  </span>
                                </span>
                                <span className='ml-3'>15:15:59</span>
                                <span className='ml-3'>3:56 PM</span>
                                <span className='ml-3'>12 Aug 2021</span>
                              </div>
                            </div>
                          </div>
                          <div className='col-5'>
                            <div className='TimeTrackingTimer-TextBrand'>
                              <div className='TimeTrackingTimer-CrProject-Rectangle2'>
                                <span className='mr-2'>
                                  <img src={file2Symbol} alt='' />
                                </span>
                                <span className=''>
                                  Design a landing page for website
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-3'>
                        <div className='TimeTrackingTimer-TextFont1'>
                          <div className='d-flex flex-row'>
                            <div className='row'>
                              <div className='col-8'>
                                <span className='mr-2'>Fashan App......</span>
                              </div>
                              <div className='col-4'>
                                <span className=''>Digitalogy.co</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-1'>
                        {/* <img src={PlaySymbolFill} alt='' /> */}
                        <img src={PlaySymbolFillBlack} alt='' />
                      </div>
                    </div>
                    <div className='TimeTrackingTimerEditList-Start-Timer-Tracking'></div>
                    <div className='row TimeTrackingTimerEditList-MarginTop'>
                      <div className='col-8'>
                        <div className='row'>
                          <div className='col-1'>
                            {/* <img
                              className='TimeTrackingTimerEditList-CheckBox'
                              src={coloredCheckbox}
                              alt=''
                            /> */}
                            <img
                              className='TimeTrackingTimerEditList-CheckBox'
                              src={checkbox}
                              alt=''
                            />
                          </div>
                          <div className='col-5 ml-1'>
                            <div className='d-flex flex-row'>
                              <div className='TimeTrackingTimer-TextFont1'>
                                <span className=''>
                                  <span className='ml-2 d-inline-block'>
                                    <div className='TimeTrackingTimerEditList-Start-Timer-Tracking-Oval'></div>
                                  </span>
                                </span>
                                <span className='ml-3'>15:15:59</span>
                                <span className='ml-3'>3:56 PM</span>
                                <span className='ml-3'>12 Aug 2021</span>
                              </div>
                            </div>
                          </div>
                          <div className='col-5'>
                            <div className='TimeTrackingTimer-TextBrand'>
                              <div className='TimeTrackingTimer-CrProject-Rectangle2'>
                                <span className='mr-2'>
                                  <img src={file2Symbol} alt='' />
                                </span>
                                <span className=''>
                                  Design a landing page for website
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-3'>
                        <div className='TimeTrackingTimer-TextFont1'>
                          <div className='d-flex flex-row'>
                            <div className='row'>
                              <div className='col-8'>
                                <span className='mr-2'>Fashan App......</span>
                              </div>
                              <div className='col-4'>
                                <span className=''>Digitalogy.co</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-1'>
                        {/* <img src={PlaySymbolFill} alt='' /> */}
                        <img src={PlaySymbolFillBlack} alt='' />
                      </div>
                    </div>
                    <div className='TimeTrackingTimer-TextFont2 TimeTrackingTimerEditList-MarginLeft-Merge'>
                      <img
                        className='TimeTrackingTimer-Merge-Timer'
                        src={mergeTimer}
                        alt=''
                      />
                      <div className='TimeTrackingTimer-Merge-Activity'>
                        Merge activities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-4'>
                  <div className='row mt-3'>
                    <div className='col-5'>
                      <div className='TimeTrackingTimerEditList-SelectAll'>
                        <span>
                          <img
                            className='TimeTrackingTimerEditList-CheckBoxSelectAll'
                            src={checkbox}
                            alt=''
                          />
                        </span>
                        <span className='TimeTrackingTimer-TextBrand mb-1'>
                          Select All
                        </span>
                      </div>
                    </div>
                    <div className='col-7'>
                      <div className='TimeTrackingTimerEditList-EditActivities'>
                        <span className='ml-2'>
                          <img src={blackEditSymbol} alt='' />
                        </span>
                        <span className='TimeTrackingTimer-TextFont1 ml-2'>
                          Edit Activities
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-3'></div>
                <div className='col-5'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='TimeTrackingTimerEditList-Delete-Rectangle'>
                        <div className='TimeTrackingTimerEditList-Delete'>
                          Delete
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='TimeTrackingTimerEditList-Merge-Rectangle'>
                        <div className='TimeTrackingTimerEditList-Merge'>
                          Merge
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
    </div>
  );
};

export default TimeTrackingTimerEditList;
