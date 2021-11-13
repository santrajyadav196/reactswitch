import React, { Component } from "react";
import "./ThirdHeader.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faPiggyBank,
  faClock,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

const images = [faPiggyBank, faCommentDollar, faClock, faFileContract];
const contentDesc = [
  {
    title: "Make bank",
    Desc:
      "Connect your bank accounts, accept credit cards, ACH, and PayPal, and support multicurrency.",
  },
  {
    title: "Get paid. Every time.",
    Desc:
      "Collect client billing info upfront and get paid automatically with recurring payments.",
  },
  {
    title: "Set it and forget it.",
    Desc:
      "Automate your workflow with smart systems that never drop the ball - and get even smarter with time.",
  },
  {
    title: "Work alone. Together.",
    Desc:
      "We've assembled a catalog of standard contracts and industry insights, free for you to make your own.",
  },
];

class ThirdHeader extends Component {
  state = {
    onHoverTile1: false,
    onHoverTile2: false,
    onHoverTile3: false,
    onHoverTile4: false,
    list1Click: false,
    list2Click: false,
    list3Click: false,
    list4Click: false,
  };

  handleLiClick(event) {
    switch (event.target.outerText) {
      case "Make bank":
        return this.setState((prevState) => ({
          list1Click: !prevState.list1Click,
        }));
      case "Get paid. Every time.":
        return this.setState((prevState) => ({
          list2Click: !prevState.list2Click,
        }));
      case "Set it and forget it.":
        return this.setState((prevState) => ({
          list3Click: !prevState.list3Click,
        }));
      case "Work alone. Together.":
        return this.setState((prevState) => ({
          list4Click: !prevState.list4Click,
        }));
      default:
        return null;
    }
  }

  handleHover(param) {
    switch (param) {
      case "tile1":
        return this.setState((prevState) => ({
          onHoverTile1: !prevState.onHoverTile1,
        }));
      case "tile2":
        return this.setState((prevState) => ({
          onHoverTile2: !prevState.onHoverTile2,
        }));
      case "tile3":
        return this.setState((prevState) => ({
          onHoverTile3: !prevState.onHoverTile3,
        }));
      case "tile4":
        return this.setState((prevState) => ({
          onHoverTile4: !prevState.onHoverTile4,
        }));
      default:
        return null;
    }
  }

  render() {
    const classHoverTile1 = this.state.onHoverTile1
      ? "tile1Div EllipseCopy"
      : "tile1Div";
    const classHoverTile2 = this.state.onHoverTile2
      ? "tile2Div EllipseCopy"
      : "tile2Div";
    const classHoverTile3 = this.state.onHoverTile3
      ? "tile1Div EllipseCopy"
      : "tile1Div";
    const classHoverTile4 = this.state.onHoverTile4
      ? "tile2Div EllipseCopy"
      : "tile2Div";
    return (
      <section className="charateristic-container app-container">
        <div className="whyChooseUs">
          <div className="span-align">
            <span className="spanHeading">Why Choose Us ?</span>
            <p className="paraDesc">
              Nam libero tempore cum soluta as nobis est eligendi optio cumque
              nihile impedite quo minus id quod maxime.
            </p>
          </div>
          <div className="linKDiv">
            <NavLink
              className="learnMoreLink"
              style={{ textDecoration: "none" }}
              to="/learnMore"
            >
              <div className="learn-Btn">Learn More</div>
            </NavLink>
          </div>
        </div>
        <div className="tilesFeatures-third">
          <div
            className="tile1"
            onMouseEnter={() => this.handleHover("tile1")}
            onMouseLeave={() => this.handleHover("tile1")}
          >
            <div className={classHoverTile1}>
              <div className="Ellipse-2">
                <FontAwesomeIcon
                  icon={images[0]}
                  className={
                    this.state.onHoverTile1
                      ? "img-centre-money svgHover"
                      : "img-centre-money"
                  }
                  size="3x"
                  color="#324168"
                />
              </div>
            </div>
            <div className="contentDesc">
              <span className="content-Heading">{contentDesc[0].title}</span>
              <p className="content-Description">{contentDesc[0].Desc}</p>
            </div>
          </div>
          <div
            className="tile2"
            onMouseEnter={() => this.handleHover("tile2")}
            onMouseLeave={() => this.handleHover("tile2")}
          >
            <div className={classHoverTile2}>
              <div className="Ellipse-2">
                <FontAwesomeIcon
                  icon={images[1]}
                  className={
                    this.state.onHoverTile2
                      ? "img-centre-dollar svgHover"
                      : "img-centre-dollar"
                  }
                  size="3x"
                  color="#324168"
                />
              </div>
            </div>
            <div className="contentDesc">
              <span className="content-Heading">{contentDesc[1].title}</span>
              <p className="content-Description">{contentDesc[1].Desc}</p>
            </div>
          </div>
          <div
            className="tile1"
            onMouseEnter={() => this.handleHover("tile3")}
            onMouseLeave={() => this.handleHover("tile3")}
          >
            <div className={classHoverTile3}>
              <div className="Ellipse-2">
                <FontAwesomeIcon
                  icon={images[2]}
                  className={
                    this.state.onHoverTile3
                      ? "img-centre-clock svgHover"
                      : "img-centre-clock"
                  }
                  size="3x"
                  color="#324168"
                />
              </div>
            </div>
            <div className="contentDesc">
              <span className="content-Heading">{contentDesc[2].title}</span>
              <p className="content-Description">{contentDesc[2].Desc}</p>
            </div>
          </div>
          <div
            className="tile2"
            onMouseEnter={() => this.handleHover("tile4")}
            onMouseLeave={() => this.handleHover("tile4")}
          >
            <div className={classHoverTile4}>
              <div className="Ellipse-2">
                <FontAwesomeIcon
                  icon={images[3]}
                  className={
                    this.state.onHoverTile4
                      ? "img-centre-file svgHover"
                      : "img-centre-file"
                  }
                  size="3x"
                  color="#324168"
                />
              </div>
            </div>
            <div className="contentDesc">
              <span className="content-Heading">{contentDesc[3].title}</span>
              <p className="content-Description">{contentDesc[3].Desc}</p>
            </div>
          </div>
        </div>
        <ul className="Characteristics-list u-reset-ul">
          <li
            onClick={(e) => this.handleLiClick(e)}
            className={
              this.state.list1Click
                ? "Characteristics-item is-active"
                : "Characteristics-item"
            }
          >
            <div>
              <FontAwesomeIcon
                icon={images[0]}
                className="img-centre-svg"
                size="3x"
                color="#324168"
              />
              <h3 className="Characteristics-item-title">
                {contentDesc[0].title}
              </h3>
              <div>
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 9L17 1"
                    stroke="#93A0AE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <p
              className={
                this.state.list1Click
                  ? "Characteristics-item-description block"
                  : "Characteristics-item-description none"
              }
            >
              {contentDesc[0].Desc}
            </p>
          </li>
          <li
            onClick={(e) => this.handleLiClick(e)}
            className={
              this.state.list2Click
                ? "Characteristics-item is-active"
                : "Characteristics-item"
            }
          >
            <div>
              <FontAwesomeIcon
                icon={images[1]}
                className="img-centre-svg"
                size="3x"
                color="#324168"
              />
              <h3 className="Characteristics-item-title">
                {contentDesc[1].title}
              </h3>
              <div>
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 9L17 1"
                    stroke="#93A0AE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <p
              className={
                this.state.list2Click
                  ? "Characteristics-item-description block"
                  : "Characteristics-item-description none"
              }
            >
              {contentDesc[1].Desc}
            </p>
          </li>
          <li
            onClick={(e) => this.handleLiClick(e)}
            className={
              this.state.list3Click
                ? "Characteristics-item is-active"
                : "Characteristics-item"
            }
          >
            <div>
              <FontAwesomeIcon
                icon={images[2]}
                className="img-centre-svg"
                size="3x"
                color="#324168"
              />
              <h3 className="Characteristics-item-title">
                {contentDesc[2].title}
              </h3>
              <div>
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 9L17 1"
                    stroke="#93A0AE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <p
              className={
                this.state.list3Click
                  ? "Characteristics-item-description block"
                  : "Characteristics-item-description none"
              }
            >
              {contentDesc[2].Desc}
            </p>
          </li>
          <li
            onClick={(e) => this.handleLiClick(e)}
            className={
              this.state.list4Click
                ? "Characteristics-item is-active"
                : "Characteristics-item"
            }
          >
            <div>
              <FontAwesomeIcon
                icon={images[3]}
                className="img-centre-svg"
                size="3x"
                color="#324168"
              />
              <h3 className="Characteristics-item-title">
                {contentDesc[3].title}
              </h3>
              <div>
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 9L17 1"
                    stroke="#93A0AE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <p
              className={
                this.state.list4Click
                  ? "Characteristics-item-description block"
                  : "Characteristics-item-description none"
              }
            >
              {contentDesc[3].Desc}
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default ThirdHeader;
