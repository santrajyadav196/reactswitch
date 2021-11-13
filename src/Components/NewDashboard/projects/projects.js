import React from "react";
import Header from "../header/header";
import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import edit from "../../../Assets/assetsnew/edit.svg";
import delete2 from "../../../Assets/assetsnew/delete.svg";
import more from "../../../Assets/assetsnew/more.svg";
import Filter from "./filter/fiter";
import CreateProject from "./createProject/createProject";
import { useHistory } from "react-router-dom";

import "./projects.css";

export default function projects() {
  const history = useHistory();

  let list = [
    {
      project: "Medical app",
      client: "joseph william",
      start_date: "13 sep 2021",
      end_date: "17 sep 2021",
      status: "Running",
      amount: 3000,
    },
  ];

  const launchClient = () => {
    history.push("/db/projects/editproject");
  };

  const launchCreateUi = () => { };
  return (
    <div>
      <div className="row">
        <SideNavDrawer />
        <div className="col-lg-9 col-md-9 col-sm-9  bg">
          <Header title={"Projects"}></Header>
          <div className="container-fluid">
            <div className="row mt-5 ">
              <div className="col-lg-6">
                <div className="clients_bx">
                  <div className="one">
                    <div
                      className="create-box text-center  p-3 "
                      style={{ width: "11rem" }}
                      data-bs-toggle="modal"
                      data-bs-target="#create_project"
                    >
                      <span class="mx-3">
                        <FontAwesomeIcon icon={faPlus} className="faPlus " />
                      </span>
                      <span className="font-create"> New Projects </span>
                    </div>
                    <CreateProject />
                  </div>
                </div>
              </div>
              <div className="col-lg-4  d-flex flex-row-reverse align-items-center mx-5 ">
                <div className="tow ">
                  <span className="set-a-goal-to-track">
                    <select class="sort_bg" id="inlineFormCustomSelect">
                      <option selected>Sort</option>
                      <option value="1">Sort1 </option>
                      <option value="2">Sort2</option>
                      <option value="3">Sort3</option>
                      <option>{global.hamburgerMenu}</option>
                    </select>
                  </span>
                </div>
                <div className="dash span6 mx-2"> </div>
                <div
                  className="Filter"
                  data-bs-toggle="modal"
                  data-bs-target="#project_filter"
                >
                  <span className="sort_bg">Filter</span>
                </div>

                <Filter />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <table className="table tble table-borderless">
                  <thead className="table_head ">
                    <th scope="col" className="thead-txt">
                      Project
                    </th>
                    <th scope="col" className="thead-txt">
                      Client
                    </th>

                    <th scope="col" className="thead-txt">
                      Start Date
                    </th>
                    <th scope="col" className="thead-txt">
                      End Date
                    </th>

                    <th scope="col" className="thead-txt">
                      Status
                    </th>
                    <th scope="col" className="thead-txt">
                      Amount Invoiced
                    </th>
                    <th scope="col" className="thead-txt"></th>
                  </thead>

                  <tbody>
                    {list.map((item, index) => {
                      return (
                        <>
                          <tr className="tbdy-cell" onClick={launchClient}>
                            <td className="td_txt ">{item.project}</td>
                            <td className="td_txt">{item.client}</td>
                            <td className="td_txt">{item.start_date}</td>
                            <td className="td_txt">{item.end_date}</td>
                            <td className="td_txt">
                              <div>{item.status}</div>
                            </td>{" "}
                            <td className="td_txt">
                              <div>{item.amount}</div>
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
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
