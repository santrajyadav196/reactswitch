import React, { useState, useContext } from "react";
import Header from "../header/header";
import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import files from "../../../Assets/assetsnew/files.svg";
import close_circle_red from "../../../Assets/assetsnew/close_circle_red.svg";
import exportss from "../../../Assets/assetsnew/export.svg";

import CreateProposal from "./CreateProposal/CreateProposal";
import { MDBCreateContext } from "../MDBContext/MBDContext";

export default function Proposal() {
  const [global, setGlobal] = useContext(MDBCreateContext);
  let list = [
    {
      project: "fashionApp",
      provider: "Hudson Agency",
      start: "19th october",
      end: "19th october",
      status: "draft",
    },
  ];

  const launchEditProposal = () => {
    setGlobal({ closeProposal: !global.closeProposal });
  };

  return (
    <div>
      {global.closeProposal === true ? (
        <CreateProposal />
      ) : (
        <div>
          <div className="row">
            <SideNavDrawer />
            <div className="col-lg-9 col-md-9 col-sm-9  bg">
              <Header title={"Proposals"}></Header>
              <div className="container-fluid">
                <div className="row mt-5  mb-4">
                  <div className="col-lg-6">
                    <div className="clients_bx">
                      <div className="one">
                        <div
                          className="create-box text-center  p-3 "
                          style={{ width: "13rem" }}
                          onClick={launchEditProposal}
                        >
                          <span class="mx-3">
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="faPlus "
                            />
                          </span>
                          <span className="font-create"> New Proposals </span>
                        </div>
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
                  </div>
                </div>
                <div className="row ">
                  <div className="col">
                    <div className="">
                      {/* <div className="header_of_box mb-4">
                    
                  </div> */}
                      <table className="table tble table-borderless">
                        <thead className="table_head  ">
                          <th scope="col" className="thead-txt">
                            Project
                          </th>
                          <th scope="col" className="thead-txt">
                            Provider
                          </th>

                          <th scope="col" className="thead-txt">
                            Start
                          </th>
                          <th scope="col" className="thead-txt">
                            End/Expires
                          </th>

                          <th scope="col" className="thead-txt">
                            Status
                          </th>

                          <th scope="col" className="thead-txt"></th>
                        </thead>

                        <tbody>
                          {list.map((item, index) => {
                            return (
                              <>
                                <tr className="tbdy-cell">
                                  <td className="td_txt ">{item.project}</td>
                                  <td className="td_txt">{item.provider}</td>
                                  <td className="td_txt">{item.start}</td>
                                  <td className="td_txt">{item.end}</td>
                                  <td className="td_txt">
                                    <div>{item.status}</div>
                                  </td>{" "}
                                  <td className="td_txt">
                                    <span className="mx-2">
                                      <img src={files} alt="edit" />
                                    </span>
                                    <span className="mx-2">
                                      {" "}
                                      <img
                                        src={close_circle_red}
                                        alt="delete2"
                                      />
                                    </span>
                                    <span className="mx-2 img_more">
                                      {" "}
                                      <img
                                        src={exportss}
                                        alt="more"
                                        className=""
                                      />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
