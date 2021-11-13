import React, { useState, useRef, useEffect, useCallback } from "react";
import SideNavDrawer from "../../../../Components/NewDashboard/sidedrawer/SideNavDrawer";
import Header from "../../header/header";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import edit from "../../../../Assets/assetsnew/edit.svg";
import delete2 from "../../../../Assets/assetsnew/delete.svg";
import closeImg from "../../../../Assets/assetsnew/close-circle-line-3.svg";

import emptyFolder from "../../../../Assets/assetsnew/empty_folder.svg";
import Invocies from "../../../../Assets/assetsnew/invoices.svg";
import Transactions from "./transaction/transaction";
import Tasks from "./task/task";
import Notes from "./Notes/notes";

import "./editClinet.css";

export default function editClient() {
  const modalRef = useRef(null);

  const [modal, setModal] = useState(false);
  const [postionTopSelector, setPostionTopSelector] = useState("task");
  const toggle = () => {
    setModal(!modal);
  };

  const handleClick = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.addEventListener("click", handleClick, true);
    };
  }, [modalRef]);

  const UiRender = () => {
    switch (postionTopSelector) {
      case "task":
        return <Tasks />;
      case "contacts&address":
        return <AddressAndContacts />;
      case "Projects":
        return <ProjectsUi />;
      case "Invoices":
        return <InvoicesUI />;
      case "Transactions":
        return <Transactions />;
      case "Notes":
        return <Notes />;
      default:
        return <>Not Selected</>;
    }
  };

  const updateTopSelector = (value) => {
    setPostionTopSelector(value);
  };

  const ProjectsUi = () => {
    return (
      <>
        <div className="row">
          <div className="col">
            <span className="Contact-Lists ">Project List</span>
          </div>
          <div className="col d-flex flex-row-reverse ">
            {/* <div className="Oval">
              <FontAwesomeIcon icon={faPlus} className="faPlus text-white " />
            </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="box_projects_clients">
              <div className="row">
                <div className="col">
                  <table class=" tablebor">
                    <thead className="tablegrey">
                      <tr className="">
                        <th scope="col" className=" col-2 projects_head_txt">
                          Project
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Client
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Start Date
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          End Date
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Status
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Amount Invoiced
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="img_no_projects d-flex flex-columns justify-content-center align-items-center">
                    <div className="text-center">
                      {" "}
                      <img src={emptyFolder} alt="" className="emptyFolder" />
                      <div className="projects_text">
                        There are no projects yet
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const InvoicesUI = () => {
    return (
      <>
        <div className="row">
          <div className="col">
            <span className="Contact-Lists ">Invoices</span>
          </div>
          <div className="col d-flex flex-row-reverse ">
            {/* <div className="Oval">
              <FontAwesomeIcon icon={faPlus} className="faPlus text-white " />
            </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="box_projects_clients">
              <div className="row">
                <div className="col">
                  <table class=" tablebor">
                    <thead className="tablegrey">
                      <tr className="">
                        <th scope="col" className=" col-2 projects_head_txt">
                          Invoice
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Client
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Project
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Issued
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Status
                        </th>
                        <th scope="col" className="col-2 projects_head_txt">
                          Amount
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="img_no_projects d-flex flex-columns justify-content-center align-items-center">
                    <div className="text-center">
                      {" "}
                      <img src={Invocies} alt="" className="emptyFolder" />
                      <div className="projects_text">
                        There are no invoices yet{" "}
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const AddressAndContacts = () => {
    return (
      <>
        <div className="row">
          <div className="col">
            <div className="box">
              <form>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label for="company_name" className="from_label_cleint">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control from_input_client"
                        placeholder="Optimistc group"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group mt-4">
                      <label for="street_address" className="from_label_cleint">
                        Street Address
                      </label>
                      <input
                        type="text"
                        className="form-control from_input_client"
                        placeholder="3948 Ersel Street, Dallas, Texas, 20302"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="form-group mt-4">
                      <label for="city" className="from_label_cleint">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control form_input_half"
                        placeholder="Deoghar"
                      />
                    </div>
                  </div>
                  <div className="col-4 mx-5">
                    <div className="form-group mt-4">
                      <label for="zip_code" className="from_label_cleint">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        className="form-control form_input_half"
                        placeholder="814112"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="form-group mt-4">
                      <label for="country" className="from_label_cleint">
                        Country
                      </label>
                      <input
                        type="text"
                        className="form-control form_input_half"
                        placeholder="India"
                      />
                    </div>
                  </div>
                  <div className="col-4 mx-5">
                    <div className="form-group mt-4">
                      <label for="state" className="from_label_cleint">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control form_input_half"
                        placeholder="Jharkhand"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="form-group mt-4">
                      <label for="taxidlabel" className="from_label_cleint">
                        Tax ID Label
                      </label>
                      <input
                        type="text"
                        className="form-control form_input_half"
                        placeholder="India"
                      />
                    </div>
                  </div>
                  <div className="col-4 mx-5">
                    <div className="form-group mt-4">
                      <label for="taxidnumber" className="from_label_cleint">
                        Tax ID Number
                      </label>
                      <input
                        type="text"
                        className="form-control form_input_half"
                        placeholder="Jharkhand"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <input
                      type="submit"
                      className="client_edit_save save-chagnes"
                      value="Save Chagnes"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="Contact-Lists ">Contact Lists</span>
          </div>
          <div className="col d-flex flex-row-reverse ">
            <div className="Oval">
              <FontAwesomeIcon icon={faPlus} className="faPlus text-white " />
            </div>
          </div>
        </div>

        <div className="row">
          <table className="table tble table-borderless">
            <thead className="table_head ">
              <th scope="col" className="thead-txt">
                Contact Name
              </th>
              <th scope="col" className="thead-txt">
                Email
              </th>

              <th scope="col" className="thead-txt">
                Phone
              </th>

              <th scope="col" className="thead-txt"></th>
            </thead>
            <tbody>
              <tr className="tbdy-cell  ">
                <td className="td_txt ">amit</td>
                <td className="td_txt ">amit@gmail.com</td>
                <td className="td_txt ">9031589941</td>
                <td className="td_txt">
                  <span className="mx-2">
                    <img src={edit} alt="edit" onClick={toggle} />
                  </span>

                  <span
                    className="mx-2 "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    {" "}
                    <img src={delete2} alt="more" className="" />
                  </span>
                </td>
              </tr>

              <tr className="tbdy-cell  ">
                <td className="td_txt ">amit</td>
                <td className="td_txt ">amit@gmail.com</td>
                <td className="td_txt ">9031589941</td>
                <td className="td_txt">
                  <span className="mx-2">
                    <img src={edit} alt="edit" />
                  </span>

                  <span className="mx-2 img_more">
                    {" "}
                    <img src={delete2} alt="more" className="" />
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
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal_delete">
                  <div className="row">
                    <div className="col-10">
                      <span className="edit_cont_clinet">Delete Contact</span>
                    </div>
                    <div className="col-2">
                      <span>
                        <img src={closeImg} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <span className="text_delete_m">
                        {" "}
                        Are you sure you would like to delete this contact?
                      </span>{" "}
                    </div>
                  </div>
                  <div className="row  mt-5">
                    <div className="col">
                      <span className="et_clinet_cancel et_clinet_cancel2">
                        Cancel
                      </span>
                    </div>
                    <div className="col save_contact_client">
                      <span className="et_clinet_save">Delete</span>
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

  return (
    <>
      <div className="row">
        <SideNavDrawer />
        <div className="col-lg-9 col-md-9 col-sm-9  bg">
          <Header title={"Clients"}></Header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="boxmenuclent d-flex justify-content-between align-items-center tasks">
                  <div
                    className={
                      postionTopSelector === "task"
                        ? "selected_head_item"
                        : "not_selected_first"
                    }
                    onClick={() => {
                      updateTopSelector("task");
                    }}
                  >
                    Tasks
                  </div>
                  <div
                    className={
                      postionTopSelector === "contacts&address"
                        ? "selected_head_item"
                        : ""
                    }
                    onClick={() => {
                      updateTopSelector("contacts&address");
                    }}
                  >
                    Address & Contacts
                  </div>
                  <div
                    className={
                      postionTopSelector === "Projects"
                        ? "selected_head_item"
                        : ""
                    }
                    onClick={() => {
                      updateTopSelector("Projects");
                    }}
                  >
                    Projects
                  </div>
                  <div
                    className={
                      postionTopSelector === "Invoices"
                        ? "selected_head_item"
                        : ""
                    }
                    onClick={() => {
                      updateTopSelector("Invoices");
                    }}
                  >
                    Invoices
                  </div>
                  <div
                    className={
                      postionTopSelector === "Transactions"
                        ? "selected_head_item"
                        : ""
                    }
                    onClick={() => {
                      updateTopSelector("Transactions");
                    }}
                  >
                    Transactions
                  </div>
                  <div
                    className={
                      postionTopSelector === "Notes"
                        ? "selected_head_item"
                        : "not_selected_last"
                    }
                    onClick={() => {
                      updateTopSelector("Notes");
                    }}
                  >
                    Notes
                  </div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>

            <UiRender />
            <div className={modal ? "modal__custom shown" : "modal__custom "}>
              <div className="modal__content" ref={modalRef}>
                <div className="modal__body mb-5">
                  <div className="row">
                    <div className="col-10">
                      <span className="edit_cont_clinet">Edit Contact</span>
                    </div>
                    <div className="col-2">
                      <span>
                        <img src={closeImg} alt="" />
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <form action="">
                        <div className="row mt-4">
                          <div className="col">
                            <label for="name" className="et_clinet_name">
                              Name
                            </label>
                            <input
                              type="text"
                              placeholder="amit kumar"
                              className="et_clinet_name_for"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col">
                            <label for="email" className="et_clinet_name">
                              Email
                            </label>
                            <input
                              type="email"
                              placeholder="falna@tiska.com"
                              className="et_clinet_name_for"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col">
                            <label for="titlerole" className="et_clinet_name">
                              Title/Role
                            </label>
                            <input
                              type="text"
                              placeholder="software developer"
                              className="et_clinet_name_for"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col">
                            <label for="phonenumber" className="et_clinet_name">
                              Phone
                            </label>
                            <input
                              type="text"
                              placeholder="9031589941"
                              className="et_clinet_name_for"
                            />
                          </div>
                        </div>
                        <div className="row  margin_top">
                          <div className="col">
                            <span className="et_clinet_cancel">Cancel</span>
                          </div>
                          <div className="col save_contact_client">
                            <span className="et_clinet_save">Save</span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={modal ? "backdrop__custom shown" : "backdrop__custom"}
      ></div>
    </>
  );
}
