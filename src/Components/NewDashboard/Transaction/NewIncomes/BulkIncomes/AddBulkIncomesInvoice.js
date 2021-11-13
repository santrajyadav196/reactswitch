import React, {useState} from "react";

import closeCircle from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import rupeesSymbol from "../../../../../Assets/assetsnew/rupees-path.svg";

import RecordPayment from "./RecordPayment";

import "./AddBulkIncomesInvoice.css";

const AddBulkIncomesInvoice = (props) => {
  return (
    <>
      <div
        className='modal fade'
        id='AddBulkIncomesInvoice'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen modal-dialog-AddBulkIncomes'>
          <div className='modal-content'>
            <div>
              <div className='AddBulkIncome-ClosedBtn'>
                <span data-bs-dismiss='modal'>
                  <img src={closeCircle} alt='close-mark' />
                </span>
                <span
                  className='AddBulkIncome-Close AddBulkIncome-Text'
                  data-bs-dismiss='modal'>
                  close
                </span>
              </div>
              <div className='justify-content-center align-items-center'>
                <div className='AddBulkIncome-Create-Income'>Create Income</div>
              </div>
            </div>

            <hr className='AddBulkIncome-HorizontalLine-Rectangle'></hr>
            <div className='container-fluid'>
              <div className='AddBulkIncome-Payment-Ways'>
                Select an invoice
              </div>

              <div className='d-flex justify-content-center align-items-center'>
                <table className='table table-borderless AddBulkIncomesInvoice-Table-Rectangle'>
                  <thead className=''>
                    <th scope='col' className=''></th>
                    <th scope='col' className=''></th>

                    <th scope='col' className=''></th>
                    <th scope='col' className=''></th>

                    <th scope='col' className=''></th>
                    <th scope='col' className=''></th>
                  </thead>
                  <tbody>
                    <tr
                      className='AddBulkIncomesInvoice-Rectangle'
                      data-bs-toggle='modal'
                      data-bs-target='#RecordPayment'>
                      <td className='Transaction_Descriptions'>1</td>
                      <td className='Transaction_Descriptions'>
                        Digitalogy.Co
                      </td>
                      <td className='Transaction_Descriptions'>
                        Dummy Project For Node Js
                      </td>
                      <td className='Transaction_Descriptions'>14 Jul 2021</td>
                      <td className='Transaction_Descriptions'>Due</td>

                      <td className='Transaction_Descriptions'>
                        <div>
                          <span>
                            <img
                              src={rupeesSymbol}
                              className='Transaction_RupeesSymbol'
                            />
                          </span>
                          <span className='Transaction_Detail_Amount'>
                            9394
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className='AddBulkIncomesInvoice-Rectangle'
                      data-bs-toggle='modal'
                      data-bs-target='#RecordPayment'>
                      <td className='Transaction_Descriptions'>1</td>
                      <td className='Transaction_Descriptions'>
                        Digitalogy.Co
                      </td>
                      <td className='Transaction_Descriptions'>
                        Dummy Project For Node Js
                      </td>
                      <td className='Transaction_Descriptions'>14 Jul 2021</td>
                      <td className='Transaction_Descriptions'>Due</td>

                      <td className='Transaction_Descriptions'>
                        <div>
                          <span>
                            <img
                              src={rupeesSymbol}
                              className='Transaction_RupeesSymbol'
                            />
                          </span>
                          <span className='Transaction_Detail_Amount'>
                            9394
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <RecordPayment />
      </div>
    </>
  );
};

export default AddBulkIncomesInvoice;
