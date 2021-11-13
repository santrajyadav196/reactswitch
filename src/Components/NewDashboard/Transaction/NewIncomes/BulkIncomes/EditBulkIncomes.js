import React, {useState} from "react";
import closeCircle from "../../../../../Assets/assetsnew/close-circle-line-3.svg";
import checkbox from "../../../../../Assets/assetsnew/checkbox-line-1.svg";
import coloredCheckbox from "../../../../../Assets/assetsnew/checkbox.svg";
import coloredArrow from "../../../../../Assets/assetsnew/green-arrow-path.svg";
import rupeesSymbol from "../../../../../Assets/assetsnew/rupees-path.svg";
import fileAttachmentSymbol from "../../../../../Assets/assetsnew/attachment-line-1.svg";
import coloredEditSymbol from "../../../../../Assets/assetsnew/coloredEdit.svg";
import coloredDeleteSymbol from "../../../../../Assets/assetsnew/coloredDelete.svg";
import forMore from "../../../../../Assets/assetsnew/delete-bin-6-line-copy.svg";
import greenDeleteSymbol from "../../../../../Assets/assetsnew/greenDelete.svg";
import editSymbol from "../../../../../Assets/assetsnew/edit.svg";

import "./EditBulkIncomes.css";

const EditBulkIncomes = (props) => {
  return (
    <>
      <div
        class='modal fade'
        id='EditBulkIncomes'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog modal-fullscreen EditBulkExpenses-Rectangle modal-dialog-cust'>
          <div class='modal-content'>
            <div className='container-fluid'>
              <div>
                <span className='EditBulk-Income'>Edit Bulk Incomes</span>
                <span
                  data-bs-dismiss='modal'
                  className='EditBulkExpenses-ClosedMark'>
                  <img src={closeCircle} alt='close-mark' />
                </span>
              </div>

              <div className='row mt-5'>
                <div class='col'>
                  <table className='table table-borderless'>
                    <thead className='table EditBulkExpenses-Details-Rectangle'>
                      <th
                        scope='col'
                        className='EditBulkExpenses-Details-Descriptions'>
                        <span className='EditBulkExpenses-Head-Description'>
                          Description
                        </span>
                      </th>
                      <th
                        scope='col'
                        className='EditBulkExpenses-Details-Descriptions'>
                        Source/Merchant
                      </th>

                      <th
                        scope='col'
                        className='EditBulkExpenses-Details-Descriptions'>
                        Category
                      </th>
                      <th
                        scope='col'
                        className='EditBulkExpenses-Details-Descriptions'>
                        Date
                      </th>

                      <th
                        scope='col'
                        className='EditBulkExpenses-Details-Descriptions'>
                        Amount
                      </th>
                      <th
                        scope='col'
                        className='EditBulkExpenses-Details-Descriptions'></th>
                    </thead>
                    <tbody>
                      <tr className='EditBulk-Details-Rectangle'>
                        <td className='EditBulk-Details-Descriptions'>
                          <img
                            src={coloredCheckbox}
                            className='EditBulkExpenses-checkbox'
                          />
                          {/* <img
                            src={checkbox}
                            className='EditBulkExpenses-checkboxOne'
                          /> */}
                          <img src={coloredArrow} className='Arrow-Path' />
                          Invoice1
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Hudson Agency
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Revenue
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          14 Jul 2021
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
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

                        <td className='EditBulk-Details-Descriptions'>
                          <img
                            src={fileAttachmentSymbol}
                            className='NewIncomes-fileAttachment'
                          />
                          <img
                            src={coloredEditSymbol}
                            className='NewIncomes-edit'
                          />
                          <img
                            src={coloredDeleteSymbol}
                            className='NewIncomes-delete'
                          />

                          <img src={forMore} className='NewIncomes-more' />
                        </td>
                      </tr>
                      <tr className='EditBulk-Details-Rectangle'>
                        <td className='EditBulk-Details-Descriptions'>
                          {/* <img
                            src={coloredCheckbox}
                            className='EditBulkExpenses-checkbox'
                          /> */}
                          <img
                            src={checkbox}
                            className='EditBulkExpenses-checkboxOne'
                          />
                          <img src={coloredArrow} className='Arrow-Path' />
                          Invoice1
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Hudson Agency
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Revenue
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          14 Jul 2021
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
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

                        <td className='EditBulk-Details-Descriptions'>
                          <img
                            src={fileAttachmentSymbol}
                            className='NewIncomes-fileAttachment'
                          />
                          <img
                            src={coloredEditSymbol}
                            className='NewIncomes-edit'
                          />
                          <img
                            src={coloredDeleteSymbol}
                            className='NewIncomes-delete'
                          />

                          <img src={forMore} className='NewIncomes-more' />
                        </td>
                      </tr>
                      <tr className='EditBulk-Details-Rectangle'>
                        <td className='EditBulk-Details-Descriptions'>
                          <img
                            src={coloredCheckbox}
                            className='EditBulkExpenses-checkbox'
                          />
                          {/* <img
                            src={checkbox}
                            className='EditBulkExpenses-checkboxOne'
                          /> */}
                          <img src={coloredArrow} className='Arrow-Path' />
                          Invoice1
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Hudson Agency
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Revenue
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          14 Jul 2021
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
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

                        <td className='EditBulk-Details-Descriptions'>
                          <img
                            src={fileAttachmentSymbol}
                            className='NewIncomes-fileAttachment'
                          />
                          <img
                            src={coloredEditSymbol}
                            className='NewIncomes-edit'
                          />
                          <img
                            src={coloredDeleteSymbol}
                            className='NewIncomes-delete'
                          />

                          <img src={forMore} className='NewIncomes-more' />
                        </td>
                      </tr>
                      <tr className='EditBulk-Details-Rectangle'>
                        <td className='EditBulk-Details-Descriptions'>
                          {/* <img
                            src={coloredCheckbox}
                            className='EditBulkExpenses-checkbox'
                          /> */}
                          <img
                            src={checkbox}
                            className='EditBulkExpenses-checkboxOne'
                          />
                          <img src={coloredArrow} className='Arrow-Path' />
                          Invoice1
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Hudson Agency
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          Revenue
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
                          14 Jul 2021
                        </td>
                        <td className='EditBulk-Details-Descriptions'>
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

                        <td className='EditBulk-Details-Descriptions'>
                          <img
                            src={fileAttachmentSymbol}
                            className='NewIncomes-fileAttachment'
                          />
                          <img
                            src={coloredEditSymbol}
                            className='NewIncomes-edit'
                          />
                          <img
                            src={coloredDeleteSymbol}
                            className='NewIncomes-delete'
                          />

                          <img src={forMore} className='NewIncomes-more' />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='row mt-5'>
                <div className='col-2 mt-3'>
                  <div className='EditBulk-SelectAll-Rectangle'>
                    <img src={checkbox} className='Select-All-Checkbox' />
                    <span className='EditBulkExpenses-Text'>Sellect All</span>
                  </div>
                </div>
                <div className='col-4'></div>
                <div className='col-3'>
                  <div className='EditBulkExpenses-Delete-Rectangle'>
                    <img src={greenDeleteSymbol} className='delete' />
                    <span className='EditBulkExpenses-Text'>Delete</span>
                  </div>
                </div>
                <div className='col-3 Edit-Bulk-Rectangle'>
                  <div
                    className='EditBulkExpenses-Edit-Rectangle'
                    data-bs-toggle='modal'
                    data-bs-target='#EditPayment'>
                    <img src={editSymbol} className='edit' />
                    <span className='EditBulkExpenses-Edit'>Edit</span>
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

export default EditBulkIncomes;
