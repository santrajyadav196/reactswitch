import React, {Component} from "react";
import "./SideDrawer.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import Auxillary from "../../HOC/Auxillary/Auxillary";
import NavBarMainMobile from "./NavBarMainMobile/NavBarMainMobile";

class SideDrawer extends Component {
  state = {open: this.props.open};

  handleSidebar = () => {
    this.setState({open: !this.props.open});
  };

  render() {
    let sideClasses = ["SideDrawer", "Close"];
    if (this.props.open) {
      sideClasses = ["SideDrawer", "Open"];
    }
    let dis = null;
    let urlEle = this.props.urlElements[3];
    if (urlEle === "app-co") {
      dis = (
        <Auxillary>
          <Backdrop clicked={this.props.close} show={this.props.open} />
          <div className={sideClasses.join(" ")}>
            <NavBarMobile close={this.props.close} />
          </div>
        </Auxillary>
      );
    } else {
      dis = (
        <Auxillary>
          <Backdrop clicked={this.props.close} show={this.props.open} />
          <div className={sideClasses.join(" ")}>
            <NavBarMainMobile close={this.props.close} />
          </div>
        </Auxillary>
      );
    }

    return <Auxillary>{dis}</Auxillary>;
  }
}

export default SideDrawer;
