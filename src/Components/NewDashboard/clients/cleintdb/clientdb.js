import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./clients.css";

import edit from "../../../../Assets/assetsnew/edit.svg";
import delete2 from "../../../../Assets/assetsnew/delete.svg";
import more from "../../../../Assets/assetsnew/more.svg";

import Header from "../header/header";
export default function clientdb() {
  return (
    <div>
      <div className="col-lg-10 col-md-10 col-sm-10  bg">
        <Header title={"Clients"}></Header>
        <div className="container-fluid">
          <div className="row mt-5 ">
            <div className="col- lg-4">
              <div className="clients_bx">
                <div className="one">
                  <div
                    className="create-box text-center  p-3 "
                    onClick={toggle}
                  >
                    <span class="mx-3">
                      <FontAwesomeIcon icon={faPlus} className="faPlus " />
                    </span>
                    <span className="font-create"> New Client </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10  d-flex flex-row-reverse align-items-center mx-5 ">
              <div className="tow ">
                <span className="set-a-goal-to-track">
                  <select class="sort_bg" id="inlineFormCustomSelect">
                    <option selected>Sort</option>
                    <option value="1">Sort1 </option>
                    <option value="2">Sort2</option>
                    <option value="3">Sort3</option>
                  </select>
                </span>
              </div>
              <div className="dash span6 mx-2"> </div>
              <div className="Filter">
                <span className="sort_bg">Filter</span>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <table className="table tble table-borderless">
                <thead className="table_head ">
                  <th scope="col" className="thead-txt">
                    Name
                  </th>
                  <th scope="col" className="thead-txt">
                    City
                  </th>

                  <th scope="col" className="thead-txt">
                    Last Email Sent
                  </th>
                  <th scope="col" className="thead-txt">
                    Total Projects
                  </th>

                  <th scope="col" className="thead-txt">
                    Income Received
                  </th>
                  <th scope="col" className="thead-txt"></th>
                </thead>

                <tbody>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2 img_more">
                        {" "}
                        <img src={more} alt="more" className="" />
                        <div className="more">
                          <div className="jj Archive-Clients mt-3">
                            Archive Clients
                          </div>
                          <div className="jj Archive-Clients my-3">
                            Delete Client
                          </div>
                        </div>
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2 img_more">
                        {" "}
                        <img src={more} alt="more" className="" />
                        <div className="more">more</div>
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                  <tr className="tbdy-cell  ">
                    <td className="td_txt ">John Harrison</td>
                    <td className="td_txt">Udalawfew</td>
                    <td className="td_txt">mukbeb@ibiparnof.co.uk</td>
                    <td className="td_txt">2</td>
                    <td className="td_txt">
                      <div>51054</div>
                      <div className="-of-income">50% of income</div>
                    </td>
                    <td className="td_txt">
                      <span className="mx-2">
                        <img src={edit} alt="edit" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={delete2} alt="delete2" />
                      </span>
                      <span className="mx-2">
                        {" "}
                        <img src={more} alt="more" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
