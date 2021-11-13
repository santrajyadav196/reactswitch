import React, {useState} from "react";

import plus from "../../../../Assets/assetsnew/add-line-1.svg";
import editBtn from "../../../../Assets/assetsnew/edit.svg";
import deleteBtn from "../../../../Assets/assetsnew/delete.svg";

import MsgTemplate from "./MsgTemplate";

import "./Template.css";

const Template = (params) => {
  return (
    <>
      <div className='Setting-Add-Templates-Rectangle'>
        <div className='row'>
          <div className='col'>
            <div
              className='Setting-Add-Templates'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'>
              <img src={plus} alt='' />
              <span className='ml-2'>New Template</span>
            </div>
          </div>
        </div>
      </div>
      <MsgTemplate />
      <div className='Setting-Add-Templates-Rectangle'>
        <div className='row mt-3'>
          <div className='col'>
            <div className='Setting-TextFontTwo pl-2'>Template Name</div>
          </div>
        </div>
      </div>

      <div className='Setting-Templates-Rectangle mt-4'>
        <div className='row'>
          <div className='col'>
            <div className='Setting-TextFontOne'>santu</div>
          </div>
          <div className='col'>
            <div className='d-flex flex-row-reverse'>
              <img className='Setting-Cursor mx-2' src={deleteBtn} alt='' />
              <img className='Setting-Cursor mx-2' src={editBtn} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
