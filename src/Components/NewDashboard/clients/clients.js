import React, {useEffect, useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

import "./clients.css";

import edit from "../../../Assets/assetsnew/edit.svg";
import delete2 from "../../../Assets/assetsnew/delete.svg";
import more from "../../../Assets/assetsnew/more.svg";

import Header from "../header/header";
import CreateClients from "../clients/createClients/createClinets";
import SideNavDrawer from "../../../Components/NewDashboard/sidedrawer/SideNavDrawer";

import {MDBCreateContext} from "../MDBContext/MBDContext";

import {useHistory} from "react-router-dom";

export default function clients() {
  const [global, setGlobal] = useContext(MDBCreateContext);
  const history = useHistory();

  let list = [
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
    {
      name: "amit kumar",
      city: "Deoghar",
      last_email_sent: "bharat@gmail.com",
      t_projects: 3,
      income: {
        amount: 4000,
        percentage: "50% of income",
      },
    },
  ];

  const toggle = () => {
    setGlobal({closeDialog: !global.closeDialog});
  };

  const launchClient = () => {
    history.push("/db/clients/editclient");
  };

  useEffect(() => {
    setGlobal({hamburgerMenu: "clients"});
    //document.body.style.overflow = "hidden";
    //    document.body.style.overflow = 'unset';
  }, []);

  return (
    <div>
      {global.closeDialog === true ? (
        <div>
          <CreateClients />
        </div>
      ) : (
        <>
          <div className='row'>
            <SideNavDrawer />
            <div className='col-lg-9 col-md-9 col-sm-9  bg'>
              <Header title={"Clients"}></Header>
              <div className='container-fluid'>
                <div className='row mt-5 '>
                  <div className='col-lg-6'>
                    <div className='clients_bx'>
                      <div className='one'>
                        <div
                          className='create-box text-center  p-3 '
                          onClick={toggle}
                          style={{width: "11rem"}}>
                          <span class='mx-3'>
                            <FontAwesomeIcon
                              icon={faPlus}
                              className='faPlus '
                            />
                          </span>
                          <span className='font-create'> New Client </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4  d-flex flex-row-reverse align-items-center mx-5 '>
                    <div className='tow '>
                      <span className='set-a-goal-to-track'>
                        <select class='sort_bg' id='inlineFormCustomSelect'>
                          <option selected>Sort</option>
                          <option value='1'>Sort1 </option>
                          <option value='2'>Sort2</option>
                          <option value='3'>Sort3</option>
                          <option>{global.hamburgerMenu}</option>
                        </select>
                      </span>
                    </div>
                    <div className='dash span6 mx-2'> </div>
                    <div className='Filter'>
                      <span className='sort_bg'>Filter</span>
                    </div>
                  </div>
                </div>

                <div className='row mt-5'>
                  <div className='col'>
                    <table className='table tble table-borderless'>
                      <thead className='table_head '>
                        <th scope='col' className='thead-txt'>
                          Name
                        </th>
                        <th scope='col' className='thead-txt'>
                          City
                        </th>

                        <th scope='col' className='thead-txt'>
                          Last Email Sent
                        </th>
                        <th scope='col' className='thead-txt'>
                          Total Projects
                        </th>

                        <th scope='col' className='thead-txt'>
                          Income Received
                        </th>
                        <th scope='col' className='thead-txt'></th>
                      </thead>

                      <tbody>
                        {list.map((item, index) => {
                          return (
                            <>
                              <tr
                                className='tbdy-cell  '
                                onClick={launchClient}>
                                <td className='td_txt '>{item.name}</td>
                                <td className='td_txt'>{item.city}</td>
                                <td className='td_txt'>
                                  {item.last_email_sent}
                                </td>
                                <td className='td_txt'>{item.t_projects}</td>
                                <td className='td_txt'>
                                  <div>{item.income.amount}</div>
                                  <div className='-of-income'>
                                    {item.income.percentage}
                                  </div>
                                </td>
                                <td className='td_txt'>
                                  <span className='mx-2'>
                                    <img src={edit} alt='edit' />
                                  </span>
                                  <span className='mx-2'>
                                    {" "}
                                    <img src={delete2} alt='delete2' />
                                  </span>
                                  <span className='mx-2 img_more'>
                                    {" "}
                                    <img src={more} alt='more' className='' />
                                    <div className='more'>
                                      <div className='jj Archive-Clients mt-3'>
                                        Archive Clients
                                      </div>
                                      <div className='jj Archive-Clients my-3'>
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
          </div>{" "}
        </>
      )}
    </div>
  );
}
