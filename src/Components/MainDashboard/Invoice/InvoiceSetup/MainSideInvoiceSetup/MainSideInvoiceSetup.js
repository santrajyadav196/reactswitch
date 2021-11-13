import React, {Component} from "react";
import SideBar from "../../../SideBar/SideBar";
import SubmitInvoiceSetup from "./SubmitInvoiceSetup/SubmitInvoiceSetup";

export default class MainSideInvoiceSetup extends Component {
  render() {
    return (
      <div className='container-fluid px-0'>
        <div className='d-flex'>
          <SideBar />
          <div className='px-0 w-100'>
            <div className='p-5 mt-2'>
              <span className='DashMarg'>Invoice</span>
              <div className='col-12 pt-5 navBelowHead'></div>
            </div>
            <SubmitInvoiceSetup />
          </div>
        </div>
      </div>
    );
  }
}
