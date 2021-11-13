import React from "react";
import addSymbol from "../../../Assets/assetsnew/add-line-1.svg";
import whiteDropDown from "../../../Assets/assetsnew/arrow-down-s-line.svg";
import blackDropDown from "../../../Assets/assetsnew/arrow-down-black.svg";
import imageDownloader from "../../../Assets/assetsnew/download-2-line-3.svg";
import dropDownArrow from "../../../Assets/assetsnew/arrow-down-s-line-copy.svg";
import rupeesSymbol from "../../../Assets/assetsnew/rupees-path.svg";
import greenArrow from "../../../Assets/assetsnew/green-arrow-path.svg";
import redArrow from "../../../Assets/assetsnew/red-down-arrow.svg";
import fileAttachmentSymbol from "../../../Assets/assetsnew/attachment-line-1.svg";
import copyAttachment from "../../../Assets/assetsnew/brand-color-copy.svg";
import coloredEditSymbol from "../../../Assets/assetsnew/coloredEdit.svg";
import coloredDeleteSymbol from "../../../Assets/assetsnew/coloredDelete.svg";
import forMore from "../../../Assets/assetsnew/delete-bin-6-line-copy.svg";

import Header from "../header/header";

import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";

import NewExpense from "./NewExpenses/NewExpense";
import AddBulkExpenses from "./NewExpenses/BulkExpenses/AddBulkExpenses";
import EditBulkExpensesFilter from "./NewExpenses/BulkExpenses/EditBulkExpensesFilter";

import NewIncome from "./NewIncomes/NewIncome";
import EditBulkIncomes from "./NewIncomes/BulkIncomes/EditBulkIncomes";
import AddBulkIncomes from "./NewIncomes/BulkIncomes/AddBulkIncomes";

import TransactionFilter from "./TransactionFilter/TransactionFilter";
import EditPayment from "./NewIncomes/BulkIncomes/EditPayment";

import "./Transaction.css";

export default function Transaction() {
  return (
    <div>
      <div className='row'>
        <SideNavDrawer />
        <div className='col-lg-9 col-md-9 col-sm-9  bg'>
          <Header title={"Transaction"}></Header>
          <div className='container-fluid'>
            <div className='row '>
              <div className='col-8 d-flex flex-row'>
                <div data-bs-toggle='modal' data-bs-target='#NewExpenses'>
                  <div className='Transaction-NewExpense-Rectangle'>
                    <img src={addSymbol} className='Navbar-Add' />
                    <span className='Transaction-New-Expense'>New Expense</span>
                  </div>
                </div>

                <div className='Transaction-New-Expense-DropDown-Rectangle'>
                  <span
                    className='Transaction-Bulk-Edit'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'>
                    <img src={whiteDropDown} className='TNE-DropDown' />
                  </span>
                  <ul
                    class='dropdown-menu Transaction-Bulk-Edit'
                    aria-labelledby='dropdownMenuButton1'>
                    <li data-bs-toggle='modal' data-bs-target='#NewIncomes'>
                      <a class='dropdown-item'>New Income</a>
                    </li>
                    <li data-bs-toggle='modal' data-bs-target='#AddBulkIncomes'>
                      <a class='dropdown-item'>Add Bulk Incomes</a>
                    </li>
                    <li data-bs-toggle='modal' data-bs-target='#BulkExpenses'>
                      <a class='dropdown-item'>Add Bulk Expenses</a>
                    </li>
                  </ul>
                </div>

                <div className='Transaction-Bulk-Edit-Rectangle'>
                  <span
                    className='Transaction-Bulk-Edit'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'>
                    Bulk Edit
                    <img src={blackDropDown} className='TNEBE-DropDown' />
                  </span>
                  <ul
                    class='dropdown-menu Transaction-Bulk-Edit'
                    aria-labelledby='dropdownMenuButton1'>
                    <li
                      data-bs-toggle='modal'
                      data-bs-target='#EditBulkIncomes'>
                      <a class='dropdown-item'>Edit Bulk Incomes </a>
                    </li>
                    <li
                      data-bs-toggle='modal'
                      data-bs-target='#EditBulkExpensesFilter'>
                      <a class='dropdown-item'>Edit Bulk Expenses</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-4 d-flex flex-row'>
                <div
                  className='Transaction-Filter'
                  data-bs-toggle='modal'
                  data-bs-target='#TransactionFilter'>
                  Filter
                </div>
                <div className='Transaction-StraightLinePartition-Rectangle'></div>
                <div className='d-flex flex-row'>
                  <span className='Transaction-Sort'>Sort</span>
                  <span>
                    <img
                      src={blackDropDown}
                      className='Transaction-New-Expense-Dropdown'
                    />
                  </span>
                </div>
                <div>
                  <span className='Transaction-Oval'>
                    <img
                      src={imageDownloader}
                      className='Transaction-Image-downloader'
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className='Transaction-Graph-Rectangle'>
              <div className='row'>
                <div className='col-5'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='Transaction-Profit-before-taxes'>
                        Profit before taxes
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='Transaction-Graph-Filter-Rectangle'>
                        <span className='Transaction-Graph-Selector'>
                          Current Year
                        </span>
                        <img
                          src={dropDownArrow}
                          className='Transaction-Graph-Arrow-Down'
                        />
                      </div>
                    </div>
                  </div>
                  <div class='row'>
                    <div>
                      <span>
                        <img
                          src={rupeesSymbol}
                          className='Transaction-Rupees-Symbol'
                        />
                      </span>
                      <span className='Transaction-Amount'>5000.00</span>
                    </div>
                  </div>
                  <div class='row'>
                    <div className='Transaction-Path-5' />
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <div>
                        <img
                          src={greenArrow}
                          className='Transaction-Green-Arrow'
                        />
                        <span className='Transaction-Graph-Income'>
                          ₹ 300.00 income
                        </span>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div>
                        <img src={redArrow} className='Transaction-Red-Arrow' />
                        <span className='Transaction-Graph-Expenses'>
                          ₹ 300.00 income
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-7">
                  <div className="Transaction-Graph-col-7">
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">J</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">F</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">M</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">A</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">M</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">J</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">J</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">A</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">S</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">O</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">N</span>
                    </span>
                    <span className="Transaction-Graph-Chart-Rectangle">
                      <span className="Transaction-Graph-Month-Name">D</span>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className='row'>
              <div class='col'>
                <table className='table table-borderless'>
                  <thead className='table Transaction-Details-Rectangle'>
                    <th scope='col' className='Transaction-Table-Text'>
                      Description
                    </th>
                    <th scope='col' className='Transaction-Table-Text'>
                      Source/Merchant
                    </th>

                    <th scope='col' className='Transaction-Table-Text'>
                      Category
                    </th>
                    <th scope='col' className='Transaction-Table-Text'>
                      Date
                    </th>

                    <th scope='col' className='Transaction-Table-Text'>
                      Amount
                    </th>
                    <th scope='col' className='Transaction-Table-Text'></th>
                  </thead>
                  <tbody>
                    <tr className='Transaction-Detail-Rectangle'>
                      <td className='Transaction_Descriptions'>
                        <img
                          src={redArrow}
                          className='Transaction_Green_Arrow'
                        />
                        Invoice1
                      </td>
                      <td className='Transaction_Descriptions'>
                        Hudson Agency
                      </td>
                      <td className='Transaction_Descriptions'>Revenue</td>
                      <td className='Transaction_Descriptions'>14 Jul 2021</td>
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

                      <td className='Transaction_Descriptions'>
                        <img
                          src={copyAttachment}
                          alt='capy'
                          className='Transaction-copy mx-3'
                        />
                        <img
                          data-bs-toggle='modal'
                          data-bs-target='#NewExpenses'
                          src={coloredEditSymbol}
                          alt='edit'
                          className='Transaction-edit mx-3'
                        />
                        <img
                          src={coloredDeleteSymbol}
                          alt='delete'
                          className='Transaction-delete mx-3'
                        />
                      </td>
                    </tr>
                    <tr className='Transaction-Detail-Rectangle'>
                      <td className='Transaction_Descriptions'>
                        <img
                          src={greenArrow}
                          className='Transaction_Green_Arrow'
                        />
                        Invoice1
                      </td>
                      <td className='Transaction_Descriptions'>
                        Hudson Agency
                      </td>
                      <td className='Transaction_Descriptions'>Revenue</td>
                      <td className='Transaction_Descriptions'>14 Jul 2021</td>
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

                      <td className='Transaction_Descriptions'>
                        <img
                          src={fileAttachmentSymbol}
                          alt='attach'
                          className='Transaction-File-Attachment mx-3'
                        />
                        <img
                          data-bs-toggle='modal'
                          data-bs-target='#EditPayment'
                          src={coloredEditSymbol}
                          alt='edit'
                          className='Transaction-edit mx-3'
                        />
                        <img
                          src={coloredDeleteSymbol}
                          alt='delete'
                          className='Transaction-delete mx-3'
                        />
                        <img
                          src={forMore}
                          className='Transaction-More ml-3'
                          alt='forMore'
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewExpense />
      <AddBulkExpenses />
      <EditBulkExpensesFilter />

      <NewIncome />
      <AddBulkIncomes />
      <EditBulkIncomes />

      <EditPayment />
      <TransactionFilter />
    </div>
  );
}
