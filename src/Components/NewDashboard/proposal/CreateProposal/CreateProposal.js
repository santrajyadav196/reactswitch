import React, {useState, useEffect, useContext} from "react";
import crossbtn from "../../../../Assets/Images/crossbtn.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import crossbtn from "../../../../Assets/Images/crossbtn.svg";
import servicesvg from "../../../../Assets/assetsnew/service.svg";
import calendarsvg from "../../../../Assets/assetsnew/calendar.svg";

import {MDBCreateContext} from "../../MDBContext/MBDContext";
// import Setup from "./Setup";
import "./createProposal.css";
export default function CreateProposal() {
  const [global, setGlobal] = useContext(MDBCreateContext);
  const [startDate, setStartDate] = useState(new Date());

  const closebtn = () => {
    setGlobal({closeProposal: !global.closeProposal});
  };

  return (
    <div>
      <div className='showdddd'>
        <div className='head_cdb '>
          <div className='row '>
            <div className='col '>
              <div className='icons_side '>
                <span className='' onClick={closebtn}>
                  <img src={crossbtn} alt='crossbtn' />
                </span>

                <span className='close_text mx-3 pt-3'>Close</span>
              </div>
            </div>
            <div className='col d-flex justify-content-center align-items-center '>
              <div className='Create-Client '>Create Proposal</div>
            </div>
            <div className='col'></div>{" "}
          </div>
        </div>

        <div className='row mb-5'>
          <div className='col steps active-steps'>Setup</div>
          <div className='col steps'>Review</div>
          <div className='col steps'>Send</div>
        </div>

        {/* <Setup /> */}

        <div class='row'>
          <div className='col d-flex justify-content-center align-items-center CrProposal-Create-your-proposal'>
            Create your proposal
          </div>
        </div>

        <div class='row'>
          <form action=''>
            <div class=' col d-flex justify-content-center'>
              <div className='CrProposal-Rectangle'>
                <div class='row'>
                  <div class='col'>
                    <label
                      htmlFor='projectName'
                      className='CrProposal-form-label'>
                      Project Name
                    </label>
                  </div>
                </div>
                <div className='row text-center '>
                  <div className='col'>
                    <div className='mb-3'>
                      <input
                        type='text'
                        id='projectName'
                        className='CrProposal-RectangleOne CrProposal-form-label'
                        placeholder='Medical Health Care'
                      />
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col'>
                    <label htmlFor='client' className='CrProposal-form-label'>
                      Client
                    </label>
                  </div>
                </div>
                <div className='row text-center '>
                  <div className='col'>
                    <div className='mb-4'>
                      <select
                        class='form-select CrProposal-RectangleOne CrProposal-form-label'
                        aria-label=''>
                        <option selected disabled>
                          Options
                        </option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <div class='row'>
                      <label
                        htmlFor='startDate'
                        className='CrProposal-form-label'>
                        Date
                      </label>
                    </div>
                    <div class='row'>
                      <input
                        type='date'
                        id='startDate'
                        className='CrProposal-Date-Rectangle'
                      />
                    </div>
                  </div>
                  <div class='col-6'>
                    <div class='row'>
                      <label
                        htmlFor='endDate'
                        className='CrProposal-form-label'>
                        End
                      </label>
                    </div>
                    <div class='row'>
                      <input
                        type='date'
                        id='endDate'
                        className='CrProposal-Date-Rectangle'
                      />
                    </div>
                  </div>
                </div>

                <div class='row'>
                  <div class='col'>
                    <label
                      htmlFor='projectName'
                      className='CrProposal-form-label'>
                      I want to create a
                    </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <div className='CrProposal-Proposal-And-Contract'>
                        <div className='CrProposal-form-label'>
                          Proposal and contract
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <div className='CrProposal-Proposal-Only'>
                        <div className='CrProposal-Proposal-Only-Text'>
                          Proposal Only
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-3'>
                      <div className='CrProposal-Contract-Only'>
                        <div className='CrProposal-form-label'>
                          Contract Only
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='row'>
                  <div class='col'>
                    <div className='CrProposal-Service-Rectangle'></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
