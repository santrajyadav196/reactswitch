import React, {useState} from "react";

import coloredEditSymbol from "../../../../Assets/assetsnew/coloredEdit.svg";
import whiteEditSymbol from "../../../../Assets/assetsnew/white-edit-symbol.svg";
import blackDropDown from "../../../../Assets/assetsnew/arrow-down-black.svg";
import imageDownloader from "../../../../Assets/assetsnew/download-2-line-3.svg";
import activeDoubleCorrectSymbol from "../../../../Assets/assetsnew/active-double-correct-symbol.svg";
import deactiveDoubleCorrectSymbol from "../../../../Assets/assetsnew/deactive-double-correct-symbol.svg";
import coloredDeleteSymbol from "../../../../Assets/assetsnew/coloredDelete.svg";

import BarChartGraph from "./BarChartGraph";
import PieChartGraph from "./PieChartGraph";

import "./TimeTrackingReports.css";

const TimeTrackingReports = () => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingTimer-Table-Rectangle'>
            <div className='row pt-3'>
              <div className='col-8 '>
                <div className='TimeTrackingTimer-Timer-BigFont'>Reports</div>
              </div>
              <div className='col-4'>
                <div className='d-flex flex-row-reverse'>
                  <span className='TimeTrackingTimer-Plus-Oval'>
                    <img src={imageDownloader} className='' />
                  </span>
                  <span className='TimeTrackingTimer-Edit-Oval'>
                    <img src={whiteEditSymbol} className='' />
                  </span>
                  <span>
                    <img src={blackDropDown} className='mt-1' />
                  </span>
                  <span className='TimeTrackingTimer-TextFont2 TimeTrackingTimer-FilterSort mx-2 mt-1'>
                    Sort
                  </span>
                  <span className='TimeTrackingTimer-StraightLinePartition mx-1 mt-1'></span>
                  <span className='TimeTrackingTimer-TextFont2 TimeTrackingTimer-FilterSort ml-5 mr-2 mt-1'>
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
          <div className='TimeTrackingreports-Rectangle'>
            <div className='row'>
              <div className='col'>
                <div className='d-flex justify-content-center'>
                  <div className='TimeTrackingTimer-Timer-BigFont mt-4'>
                    10 hours
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <div className='TimeTrackingTimer-TextFont2 mt-2'>
                    3 hours not invoiced
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='d-flex justify-content-center'>
                  <BarChartGraph />
                </div>
              </div>
              <div className='col'>
                <div className=''>
                  <PieChartGraph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          <div className='TimeTrackingreports-Rectangle'>
            <div className='row px-3'>
              <div className='col-1'>
                <div className='TimeTrackingReports-TextFont2'>Hours</div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont2'>Date</div>
              </div>
              <div className='col-1'>
                <div className='TimeTrackingReports-TextFont2'>Time</div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont2'>Activity</div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont2'>Project</div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont2'>Client</div>
              </div>
              <div className='col-1'>
                <div className='TimeTrackingReports-TextFont2'>Invoiced</div>
              </div>
              <div className='col-1'>
                <div className='TimeTrackingReports-TextFont2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='TimeTrackingReports-Table-Rectangle'>
            <div className='row px-3'>
              <div className='col-1'>
                <div className='TimeTrackingReports-TextFont1'>
                  <input
                    className='TimeTrackingReports-Table-RectangleOne'
                    type='text'
                    placeholder='00'
                  />
                </div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont1'>
                  <input
                    className='TimeTrackingReports-Table-RectangleOne Date'
                    type='date'
                    required
                  />
                </div>
              </div>
              <div className='col-1'>
                <div className='TimeTrackingReports-TextFont1'>
                  <input
                    className='TimeTrackingReports-Table-RectangleOne'
                    type='text'
                    placeholder='12:45 PM'
                  />
                </div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont1'>
                  <input
                    className='TimeTrackingReports-Table-RectangleOne'
                    type='text'
                    placeholder='Ex, Research, Meeting'
                  />
                </div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont1'>
                  <input
                    className='TimeTrackingReports-Table-RectangleOne'
                    type='text'
                    placeholder='Assign To Project'
                  />
                </div>
              </div>
              <div className='col-2'>
                <div className='TimeTrackingReports-TextFont1'>
                  <input
                    className='TimeTrackingReports-Table-RectangleOne'
                    type='text'
                    placeholder='Name of the Client'
                  />
                </div>
              </div>
              <div className='col-1'>
                <div className='d-flex justify-content-center mt-2'>
                  <div className='TimeTrackingReports-TextFont1'>
                    <img src={activeDoubleCorrectSymbol} alt='' />
                    <img src={deactiveDoubleCorrectSymbol} alt='' />
                  </div>
                </div>
              </div>
              <div className='col-1'>
                <div className='d-flex justify-content-center mt-2'>
                  <div className='TimeTrackingReports-TextFont1'>
                    <span className='mr-2'>
                      <img src={coloredEditSymbol} alt='' />
                    </span>
                    <span className='ml-1'>
                      <img src={coloredDeleteSymbol} alt='' />
                    </span>
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

export default TimeTrackingReports;
