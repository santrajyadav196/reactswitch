import React, {Component} from "react";
import "../MainDashboard.css";
import MainSideProjects from "./MainSideProjects/MainSideProjects";

export default class Projects extends Component {
  render() {
    return (
      <div className='Projects'>
        <MainSideProjects />
      </div>
    );
  }
}
