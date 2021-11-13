import React, {Component} from "react";
import "../MainDashboard.css";
import MainSide from "./MainSide/MainSide";

class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <MainSide />
      </div>
    );
  }
}

export default Dashboard;
