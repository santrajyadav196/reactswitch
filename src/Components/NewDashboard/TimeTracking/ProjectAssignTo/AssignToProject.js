import React, {useState} from "react";

import closedBtn from "../../../../Assets/assetsnew/close-circle-line-3.svg";

import "./AssignToProject.css";

const AssignToProject = () => {
  return (
    <div>
      <div
        class='modal fade'
        id='AssignToProject'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen TimeTrackingTimer_AssignToProject_Rectangle'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div>
                <span className='TimeTrackingTimer_AssignToProject_Assign-To-Project'>
                  Assign To Project
                </span>
                <span data-bs-dismiss='modal'>
                  <img src={closedBtn} alt='' />
                </span>
              </div>
              <form action=''>
                <div className='mb-3 mt-4'>
                  <label htmlFor='' className='TimeTrackingTimer-TextFont1'>
                    Client
                  </label>
                  <select
                    name=''
                    id=''
                    className='TimeTrackingTimer-Assign-To-Project-Form-Rectangle TimeTrackingTimer-TextFont1'>
                    <option value=''>Hudson Agency</option>
                    <option value=''>Hudson Agency</option>
                    <option value=''>Hudson Agency</option>
                    <option value=''>Hudson Agency</option>
                  </select>
                </div>
                <div className='mb-2'>
                  <label htmlFor='' className='TimeTrackingTimer-TextFont1'>
                    Project
                  </label>
                  <select
                    name=''
                    id=''
                    className='TimeTrackingTimer-Assign-To-Project-Form-Rectangle TimeTrackingTimer-TextFont1'>
                    <option value=''>Fashion App</option>
                    <option value=''>And.co App</option>
                    <option value=''>Medical App</option>
                    <option value=''></option>
                  </select>
                </div>
                <div className='row mt-5'>
                  <div className='col-6'>
                    <div className='TimeTrackingTimer-Assign-To-Project-Cancel-Rectangle'>
                      <div className='TimeTrackingTimer-Assign-To-Project-Cancel'>
                        Cancel
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='TimeTrackingTimer-Assign-To-Project-Save-Rectangle'>
                      <div className='TimeTrackingTimer-Assign-To-Project-Save'>
                        Save
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

export default AssignToProject;
