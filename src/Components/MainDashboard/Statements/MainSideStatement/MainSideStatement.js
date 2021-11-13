import React, {Component} from "react";
import SideBar from "../../SideBar/SideBar";
import StatementReport from "./StatementReport/StatementReport";

export default class MainSideStatement extends Component {
  render() {
    return (
      <div className='container-fluid px-0'>
        <div className='d-flex'>
          <SideBar />
          <div className='px-0 w-100'>
            <div className='p-5 mt-2'>
              <span className='DashMarg'>Statements</span>
              <div className='col-12 pt-5 navBelowHead'></div>
            </div>
            <StatementReport />
          </div>
        </div>
      </div>
    );
  }
}
