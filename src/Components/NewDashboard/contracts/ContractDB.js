import React, { useContext } from "react";
import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import files from "../../../Assets/assetsnew/files.svg";
import close_circle_red from "../../../Assets/assetsnew/close_circle_red.svg";
import exportss from "../../../Assets/assetsnew/export.svg";

import Header from "../header/header";

import "./ContractDB.css";
import { MDBCreateContext } from "../MDBContext/MBDContext";

import CreateContracts from "./createContracts/CreateContracts";

export default function ContractDB() {
  const [global, setGlobal] = useContext(MDBCreateContext);
  const launchEditContract = () => {
    setGlobal({ closeContracts: !global.closeContracts });
  };
  return (
    <>
      {global.closeContracts ? (
        <>
          <CreateContracts />
        </>
      ) : (
        <>
          <div className="row">
            <SideNavDrawer />
            <div className="col-lg-9 col-md-9 col-sm-9  bg">
              <Header title={"Contracts"}></Header>
              <div className="container-fluid">
                <div className="row mt-5 mb-5">
                  <div className="col-lg-6">
                    <div className="clients_bx">
                      <div className="one">
                        <div
                          className="create-box text-center  p-3 "
                          style={{ width: "13rem" }}
                          onClick={launchEditContract}
                        >
                          <span class="mx-3">
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="faPlus "
                            />
                          </span>
                          <span className="font-create"> New Contracts </span>
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
                    <div className="Filter">
                      <span className="sort_bg">Filter</span>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col">
                    <div className="box_week">
                      <div className="header_of_box mb-4">
                        <div className="row">
                          <div className="col-2 ele_font_ss">Project</div>
                          <div className="col-2 ele_font_ss">Clinet</div>
                          <div className="col-2 ele_font_ss">Start</div>
                          <div className="col-2 ele_font_ss">End/Expires</div>
                          <div className="col-2 ele_font_ss">Status</div>
                          <div className="col-2 ele_font_ss"></div>
                        </div>
                      </div>

                      <div className="row mb-3 ">
                        <div className="col-2 ele_txt_font_contracts">
                          Fashiop app
                        </div>
                        <div className="col-2 ele_txt_font_contracts">
                          Hudson Agency{" "}
                        </div>
                        <div className="col-2 ele_txt_font_contracts">
                          19 Oct 2021{" "}
                        </div>
                        <div className="col-2 ele_txt_font_contracts">
                          19 Oct 2021{" "}
                        </div>
                        <div className="col-2 ele_txt_font_contracts">
                          <span className="draft">Draft</span>
                        </div>
                        <div className="col-2 ele_txt_font_contracts">
                          <span className="mx-2">
                            <img src={files} alt="edit" />
                          </span>
                          <span className="mx-2">
                            {" "}
                            <img src={close_circle_red} alt="delete2" />
                          </span>
                          <span className="mx-2 img_more">
                            {" "}
                            <img src={exportss} alt="more" className="" />
                            <div className="more">
                              <div className="jj Archive-Clients mt-3">
                                Archive Clients
                              </div>
                              <div className="jj Archive-Clients my-3">
                                Delete Client
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
