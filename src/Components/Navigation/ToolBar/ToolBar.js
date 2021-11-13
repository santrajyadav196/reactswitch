import React, { Component } from "react";
import "./ToolBar.css";
import NavButton from "../../SideDrawer/NavButton/NavButton";
import NavBar from "../../HomePage/NavBar/NavBar";

class ToolBar extends Component {
  state = {
    isTop: false,
  };

  handleScroll = (isTop) => {
    this.setState({ isTop });
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > this.props.scroll;
      if (isTop !== this.state.isTop) {
        this.handleScroll(isTop);
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const scroll = this.state.isTop ? "Toolbar Toolbar--sticky" : "Toolbar";
    return (
      <nav className={scroll} onScroll={this.handleScroll}>
        <NavButton
          open={this.props.open}
          urlElements={this.props.urlElements}
        />
        <nav className="DesktopOnly">
          <NavBar scroll={475} />
        </nav>
      </nav>
    );
  }
}

export default ToolBar;
