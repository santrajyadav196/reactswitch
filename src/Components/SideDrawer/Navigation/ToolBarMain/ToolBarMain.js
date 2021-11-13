import React, {Component} from "react";
import NavButton from "../../SideDrawer/NavButton/NavButton";
import DashNavBar from "../../MainDashboard/DashNavBar/DashNavBar";
import "./ToolBarMain.css";

export default class ToolBarMain extends Component {
  render() {
    return (
      <nav className='ToolbarMain'>
        <NavButton
          open={this.props.open}
          urlElements={this.props.urlElements}
        />
        <nav className='DesktopOnly'>
          <DashNavBar />
        </nav>
      </nav>
    );
  }
}
