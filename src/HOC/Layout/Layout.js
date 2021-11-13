import React, { Component } from "react";
import Auxillary from "../Auxillary/Auxillary";
import "./Layout.css";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Toolbar from "../../Components/Navigation/ToolBar/ToolBar";
import ToolBarMain from "../../Components/Navigation/ToolBarMain/ToolBarMain";

//new side menu with

class Layout extends Component {
  state = {
    sideDrawerVisible: false,
  };

  sideDrawerHandler = () => {
    this.setState({ sideDrawerVisible: false });
  };

  toggleHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerVisible: !prevState.sideDrawerVisible };
    });
  };

  render() {
    let urlElements = window.location.href.split("/");
    let tag = null;
    if (urlElements[3] === "app-co") {
      tag = (
        <Auxillary>
          <Toolbar
            open={this.toggleHandler}
            scroll={475}
            urlElements={urlElements}
          />
          <SideDrawer
            close={this.sideDrawerHandler}
            open={this.state.sideDrawerVisible}
            urlElements={urlElements}
          />
          <main>{this.props.children}</main>
        </Auxillary>
      );
    } else {
      tag = (
        <Auxillary>
          <main>{this.props.children}</main>
        </Auxillary>
      );
    }

    // if (urlElements[3] === "newdashboard")

    // else {
    //   tag = (
    //     <Auxillary>
    //       <ToolBarMain open={this.toggleHandler} urlElements={urlElements} />
    //       <SideDrawer
    //         close={this.sideDrawerHandler}
    //         open={this.state.sideDrawerVisible}
    //         urlElements={urlElements}
    //       />
    //       <main>{this.props.children}</main>
    //     </Auxillary>
    //   );
    // }
    return <Auxillary>{tag}</Auxillary>;
  }
}

export default Layout;
