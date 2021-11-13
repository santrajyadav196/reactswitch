import React, {useState} from "react";

import PlayBtn from "../../../Assets/assetsnew/play-circle-fill-3.svg";
import fileSymbol from "../../../Assets/assetsnew/fileSymbol.svg";
import assignfileSymbol from "../../../Assets/assetsnew/assignFile.svg";
import pauseSymbol from "../../../Assets/assetsnew/pauseSymbol.svg";
import redClosedCircle from "../../../Assets/assetsnew/red-close-circle.svg";
import file2Symbol from "../../../Assets/assetsnew/file2Symbol.svg";
import blackDropDown from "../../../Assets/assetsnew/arrow-down-black.svg";
import CircleEditSymbol from "../../../Assets/assetsnew/with-circle-edit-symbol.svg";
import addSymbol from "../../../Assets/assetsnew/add-line-1.svg";
import coloredEditSymbol from "../../../Assets/assetsnew/coloredEdit.svg";
import whiteEditSymbol from "../../../Assets/assetsnew/white-edit-symbol.svg";
import clock from "../../../Assets/assetsnew/timer-symbol.svg";
import PlaySymbolFill from "../../../Assets/assetsnew/play-symbol-fill-1.svg";
import coloredDeleteSymbol from "../../../Assets/assetsnew/coloredDelete.svg";
import counter from "../../../Assets/assetsnew/counter-box.svg";
import upArrow from "../../../Assets/assetsnew/arrow-up.svg";
import downArrow from "../../../Assets/assetsnew/arrow-down-black.svg";
import PlayBtn2 from "../../../Assets/assetsnew/play-circle-fill-3.svg";
import closedBtn from "../../../Assets/assetsnew/close-circle-line-3.svg";
import blackEditSymbol from "../../../Assets/assetsnew/edit-black-symbol.svg";
import blackDeleteSymbol from "../../../Assets/assetsnew/delete-black-symbol.svg";
import mergeTimer from "../../../Assets/assetsnew/merge-timer-symbol.svg";
import stopTimerSymbol from "../../../Assets/assetsnew/stop-timer-symbol.svg";
import whiteFileSymbol from "../../../Assets/assetsnew/file-list-white-symbol.svg";
import whiteFoldersSymbol from "../../../Assets/assetsnew/folders-white-symbol.svg";
import whiteClosedCircle from "../../../Assets/assetsnew/close-circle-white.svg";
import whiteBuildingFileSymbol from "../../../Assets/assetsnew/building-line-white-file-symbol.svg";
import PlaySymbolFillBlack from "../../../Assets/assetsnew/play-fill-black-symbol.svg";

import AssignToProject from "./ProjectAssignTo/AssignToProject";
import TimeTrackingTimerEditList from "./TimeTrackingTimer/TimeTrackingTimerEditList";
import TimeTrackingTimerEdit from "./TimeTrackingTimer/TimeTrackingTimerEdit";
import TimeTrackingTimerAdd from "./TimeTrackingTimer/TimeTrackingTimerAdd";

import TimeTrackingFilter from "./Filter/TimeTrackingFilter";

import "./TimeTrackingTimer.css";

const TimeTrackingTimerOne = () => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingTimer-RectangleOne'>
            <div className='row'>
              <div className='col'>
                <div className='d-flex flex-'>
                  <img
                    className='TimeTrackingTimer-PlayBtn'
                    src={PlayBtn}
                    alt='play button'
                  />
                  {/* <img
                                className='TimeTrackingTimer-PlayBtn'
                                src={pauseSymbol}
                                alt='pause button'
                              /> */}
                  <div className='d-flex flex-column ml-4'>
                    <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-TextFont1-Big mt-2'>
                      00.00.00
                    </div>
                    <div className='TimeTrackingTimer-TextFont2 mt-2'>
                      Reset
                    </div>
                    {/* <div className='TimeTrackingTimer-TextFont2 mt-2'>
                                      Cancel
                                    </div> */}
                  </div>
                </div>
              </div>
              <div className='col-6 d-flex justify-content-center'>
                <div className='TimeTrackingTimer-CrProject-Rectangle'>
                  <span className='mr-2'>
                    <img src={fileSymbol} alt='' />
                  </span>
                  <span className='TimeTrackingTimer-TextBrand'>
                    Design 2 variations of sign up and login screens
                  </span>
                </div>
              </div>
              <div className='col-3 d-flex flex-row-reverse'>
                <div className='TimeTrackingTimer-AssignToProject-Rectangle'>
                  <div data-bs-toggle='modal' data-bs-target='#AssignToProject'>
                    <span className='mr-2'>
                      <img src={assignfileSymbol} alt='' />
                    </span>
                    <span className='TimeTrackingTimer-TextBrand'>
                      Assign to project
                    </span>
                  </div>

                  {/* <div>
                                 <span className='TimeTrackingTimer-TextBrand ml-2 mr-4'>
                                    Fashan App......
                                  </span>
                                  <span className='mr-2'>
                                    <img src={redClosedCircle} alt='' />
                                  </span>
                                 </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingTimer-Table-Rectangle'>
            <div className='row pt-3'>
              <div className='col-8 '>
                <div className='TimeTrackingTimer-Timer-BigFont'>Timer</div>
              </div>
              <div className='col-4'>
                <div className='d-flex flex-row-reverse'>
                  <span className='TimeTrackingTimer-Plus-Oval'>
                    <img
                      data-bs-toggle='modal'
                      data-bs-target='#TimeTrackingTimerAdd'
                      src={addSymbol}
                      className=''
                    />
                  </span>
                  <span
                    className='TimeTrackingTimer-Edit-Oval'
                    data-bs-toggle='modal'
                    data-bs-target='#TimeTrackingTimerEditList'>
                    <img src={whiteEditSymbol} className='' />
                  </span>
                  <span>
                    <img
                      className='TimeTrackingTimer-Cursor mt-1'
                      src={blackDropDown}
                    />
                  </span>
                  <span className='TimeTrackingTimer-TextFont2 TimeTrackingTimer-SortSort mx-2 mt-1'>
                    Sort
                  </span>
                  <span className='TimeTrackingTimer-StraightLinePartition mx-1 mt-1'></span>
                  <span
                    data-bs-toggle='modal'
                    data-bs-target='#TimeTrackingFilter'
                    className='TimeTrackingTimer-TextFont2 TimeTrackingTimer-FilterFilter ml-5 mr-2 mt-1'>
                    Filter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#TimeTrackingTimer'
            aria-expanded='false'
            aria-controls='collapseExample'>
            <div className='TimeTrackingTimer-Table-Rectangle'>
              <div className='row'>
                <div className='col-7'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='d-flex flex-row'>
                        <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
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
                    <div className='col-6'>
                      <div className='TimeTrackingTimer-TextBrand TimeTrackingTimer-Table-Padding'>
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
                <div className='col-4'>
                  <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
                    <div className='d-flex flex-row'>
                      <div className='row'>
                        <div className='col-8'>
                          <span className='mr-2'>Fashan App......</span>
                          <span className='mr-2'>
                            <img src={closedBtn} alt='' />
                          </span>
                        </div>
                        <div className='col-4'>
                          <span className=''>Digitalogy.co</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-1'>
                  <div className='d-flex flex-row-reverse TimeTrackingTimer-Table-Padding'>
                    <span className='mr-2'>
                      <img src={coloredDeleteSymbol} alt='' />
                    </span>
                    <span className='mr-3'>
                      <img
                        data-bs-toggle='modal'
                        data-bs-target='#TimeTrackingTimerEdit'
                        src={coloredEditSymbol}
                        alt=''
                      />
                    </span>
                    <span className='mr-3'>
                      <img src={PlaySymbolFill} alt='' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row collapse' id='TimeTrackingTimer'>
        <div className='col'>
          <div className='TimeTrackingTimer-Table-Rectangle2'>
            <div className='TimeTrackingTimer-Start-Timer-Tracking'></div>
            <div className='TimeTrackingTimer-Start-Timer'>
              <span>
                <img
                  className='TimeTrackingTimer-play-circle-fill-3'
                  src={PlayBtn2}
                  alt=''
                />
              </span>
              <span className='ml-3'>Start Timer</span>
            </div>
            <div className='TimeTrackingTimer-Start-Timer-Tracking'></div>
            <div className='row TimeTrackingTimer-Margin-Top'>
              <div className='col-7'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='d-flex flex-row'>
                      <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
                        <span className='ml-2 d-inline-block'>
                          <div className='TimeTrackingTimer-Start-Timer-Tracking-Oval'></div>
                        </span>
                        <span className='ml-2'>15:15:59</span>
                        <span className='ml-3'>3:56 PM</span>
                        <span className='ml-2'>12 Aug 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='TimeTrackingTimer-TextBrand TimeTrackingTimer-Table-Padding'>
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
              <div className='col-4'>
                <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
                  <div className='d-flex flex-row'>
                    <div className='row'>
                      <div className='col-8'>
                        <span className='mr-2'>Fashan App......</span>
                        <span className='mr-2'>
                          <img src={closedBtn} alt='' />
                        </span>
                      </div>
                      <div className='col-4'>
                        <span className=''>Digitalogy.co</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-1'>
                <div className='d-flex flex-row-reverse TimeTrackingTimer-Table-Padding'>
                  <span className='mr-2'>
                    <img src={blackDeleteSymbol} alt='' />
                  </span>
                  <span className='mr-3'>
                    <img src={blackEditSymbol} alt='' />
                  </span>
                  <span className='mr-3'>
                    <img src={PlaySymbolFillBlack} alt='' />
                  </span>
                </div>
              </div>
            </div>
            <div className='TimeTrackingTimer-Start-Timer-Tracking'></div>
            <div className='row TimeTrackingTimer-Margin-Top'>
              <div className='col-7'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='d-flex flex-row'>
                      <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
                        <span className='ml-2 d-inline-block'>
                          <div className='TimeTrackingTimer-Start-Timer-Tracking-Oval'></div>
                        </span>
                        <span className='ml-2'>15:15:59</span>
                        <span className='ml-3'>3:56 PM</span>
                        <span className='ml-2'>12 Aug 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='TimeTrackingTimer-TextBrand TimeTrackingTimer-Table-Padding'>
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
              <div className='col-4'>
                <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
                  <div className='d-flex flex-row'>
                    <div className='row'>
                      <div className='col-8'>
                        <span className='mr-2'>Fashan App......</span>
                        <span className='mr-2'>
                          <img src={closedBtn} alt='' />
                        </span>
                      </div>
                      <div className='col-4'>
                        <span className=''>Digitalogy.co</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-1'>
                <div className='d-flex flex-row-reverse TimeTrackingTimer-Table-Padding'>
                  <span className='mr-2'>
                    <img src={blackDeleteSymbol} alt='' />
                  </span>
                  <span className='mr-3'>
                    <img src={blackEditSymbol} alt='' />
                  </span>
                  <span className='mr-3'>
                    <img src={PlaySymbolFillBlack} alt='' />
                  </span>
                </div>
              </div>
            </div>
            <div className='TimeTrackingTimer-Start-Timer-Tracking'></div>
            <div className='row TimeTrackingTimer-Margin-Top'>
              <div className='col-7'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='d-flex flex-row'>
                      <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
                        <span className='ml-2 d-inline-block'>
                          <div className='TimeTrackingTimer-Start-Timer-Tracking-Oval'></div>
                        </span>
                        <span className='ml-2'>15:15:59</span>
                        <span className='ml-3'>3:56 PM</span>
                        <span className='ml-2'>12 Aug 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='TimeTrackingTimer-TextBrand TimeTrackingTimer-Table-Padding'>
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
              <div className='col-4'>
                <div className='TimeTrackingTimer-TextFont1 TimeTrackingTimer-Table-Padding'>
                  <div className='d-flex flex-row'>
                    <div className='row'>
                      <div className='col-8'>
                        <span className='mr-2'>Fashan App......</span>
                        <span className='mr-2'>
                          <img src={closedBtn} alt='' />
                        </span>
                      </div>
                      <div className='col-4'>
                        <span className=''>Digitalogy.co</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-1'>
                <div className='d-flex flex-row-reverse TimeTrackingTimer-Table-Padding'>
                  <span className='mr-2'>
                    <img src={blackDeleteSymbol} alt='' />
                  </span>
                  <span className='mr-3'>
                    <img src={blackEditSymbol} alt='' />
                  </span>
                  <span className='mr-3'>
                    <img src={PlaySymbolFillBlack} alt='' />
                  </span>
                </div>
              </div>
            </div>
            <div className='TimeTrackingTimer-TextFont2'>
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

      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingTimer-Timer-Activity-Clock-Rectangle'>
            <div className='row'>
              <div className='col-2'>
                <div className='d-flex flex-row'>
                  <div>
                    <img
                      className='TimeTrackingTimer-Timer-Activity-Stop'
                      src={stopTimerSymbol}
                      alt=''
                    />
                    <span className='TimeTrackingTimer-Timer-Activity-Timer'>
                      01:13:15
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-5'>
                <div className='d-flex flex-row'>
                  <span className='TimeTrackingTimer-Timer-Activity-white-File-Symbol'>
                    <img src={whiteFileSymbol} alt='' />
                  </span>
                  <span class='TimeTrackingTimer-FontWhite mt-1'>
                    Design a landing page for website
                  </span>
                </div>
              </div>
              <div className='col-3'>
                <div className='d-flex flex-row'>
                  <img className='mt-1' src={whiteFoldersSymbol} alt='' />
                  <span class='TimeTrackingTimer-FontWhite mt-1 ml-2'>
                    Fashion App
                  </span>
                  <span className='TimeTrackingTimer-Timer-Activity-white-close-circle'>
                    <img src={whiteClosedCircle} alt='' />
                  </span>
                </div>
              </div>
              <div className='col-2'>
                <div className='d-flex'>
                  <span className='TimeTrackingTimer-Timer-Activity-white-building-File-Symbol'>
                    <img src={whiteBuildingFileSymbol} alt='' />
                  </span>
                  <span class='TimeTrackingTimer-FontWhite ml-2 mt-1'>
                    Hudson Agency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AssignToProject />
      <TimeTrackingTimerEditList />
      <TimeTrackingTimerEdit />
      <TimeTrackingTimerAdd />
      <TimeTrackingFilter />
    </div>
  );
};

export default TimeTrackingTimerOne;
