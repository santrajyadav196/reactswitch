import React, { Component } from "react";
import "./SubmitInvoiceSetup.css";
import { withRouter } from "react-router-dom";

class SubmitInvoiceSetup extends Component {
  state = {
    isOldProject: true,
    isNewProject: true,
  };
  wrapperRefName = React.createRef();

  setProject = (e) => {
    if (e.target.value === "oldProject") {
      this.setState({
        isOldProject: !this.state.isOldProject,
        isNewProject: true,
      });
    } else if (e.target.value === "newProject") {
      this.setState({
        isNewProject: !this.state.isNewProject,
        isOldProject: true,
      });
      this.wrapperRefName.current.focus();
    } else if (e.target.value === "new") {
      this.props.history.push("new");
    } else {
      this.setState({
        isNewProject: true,
        isOldProject: true,
      });
    }
  };

  routeChangeNext = () => {
    this.props.history.push("review");
  };

  onChangeRouteHandler = (e) => {
    if (e.target.innerHTML === "2. Review") {
      this.props.history.push("review");
    } else if (e.target.innerHTML === "3. Send") {
      this.props.history.push("send");
    } else {
    }
  };

  selecetdValueProject = (e) => {
    console.log("Selected Project ---- ", e.target.value);
  };

  render() {

    let optionTemplate = (JSON.parse(localStorage.getItem("projects")) || []).map(
      (v) => (
        <option key={v.id} value={v.ProjectName}>
          {v.ProjectName}
        </option>
      )
    );
    return (
      <div className="mx-5">
        <div className="setupReview row">
          <div className="contractSetup">
            <div
              className="cursorOnChange"
              onClick={(e) => this.onChangeRouteHandler(e)}
            >
              1. Setup
            </div>
          </div>
          <div className="contractReview">
            <div
              className="cursorOnChange"
              onClick={(e) => this.onChangeRouteHandler(e)}
            >
              2. Review
            </div>
          </div>
          <div className="contractSend">
            <div
              className="cursorOnChange"
              onClick={(e) => this.onChangeRouteHandler(e)}
            >
              3. Send
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => this.props.handleSubmit(e)}
          autoComplete="off"
          className="form mx-3 py-4"
        >
          <div className="d-flex justify-content-between mb-4">
            <div className="addClient">What do you want to invoice?</div>
          </div>
          <div className="addNewOrOldProject">
            <div>
              <div className="mt-5 row d-flex ml-3">
                <div className="previousClient row d-fex col-xl-8 col-lg-8 col-md-8 col-sm-8 my-3">
                  <input
                    type="radio"
                    name="site_name"
                    value="oldProject"
                    onChange={(e) => this.setProject(e)}
                    className="newClientinvoice"
                  />
                  <div className="detailClient">
                    <div className="checkNewClient mb-3">
                      An existing project
                    </div>
                    Choose an existing project and client to populate your
                    invoice. If you used time tracking, you can invoice your
                    tracked time.
                  </div>
                </div>
                <div className="selectedClientinvoice col-xl-4 col-lg-4 col-md-4 col-sm-4 my-3 px-5">
                  <select
                    name="ClientName"
                    disabled={this.state.isOldProject ? true : false}
                    className="selectClientOptionsInvoice"
                    onChange={(e) => this.selecetdValueProject(e)}
                  >
                    <option defaultValue>Select Project</option>
                    {optionTemplate}
                  </select>
                </div>
              </div>
              <div className="mt-5 row d-flex ml-3">
                <div className="previousClient row d-fex col-xl-8 col-lg-8 col-md-8 col-sm-8 my-3">
                  <input
                    type="radio"
                    name="site_name"
                    value="newProject"
                    onChange={(e) => this.setProject(e)}
                    className="newClientinvoice"
                  />
                  <div className="detailClient">
                    <div className="checkNewClient mb-3">A new project</div>
                    Create an invoice and set up a new project and client based
                    on the info. This way you can better keep track of your work
                    and send future invoices more easily.
                  </div>
                </div>
                <div className="selectedClientinvoice col-xl-4 col-lg-4 col-md-4 col-sm-4 my-3 px-5">
                  <input
                    type="text"
                    ref={this.wrapperRefName}
                    name="project_name"
                    placeholder="Project Name"
                    className={
                      this.state.isNewProject
                        ? "newProjectInvoiceOpaci"
                        : "newProjectInvoice"
                    }
                  />
                </div>
              </div>
              <div className="previousClient row d-flex mt-5 ml-3">
                <input
                  type="radio"
                  name="site_name"
                  value="new"
                  onChange={(e) => this.setProject(e)}
                  className="newClientinvoice"
                />
                <div className="previousClient row d-fex col-xl-8 col-lg-8 col-md-8 col-sm-8 mb-3">
                  <div className="detailClient">
                    <div className="checkNewClient mb-3">
                      Just a quick invoice
                    </div>
                    Create an invoice from scratch without creating a project to
                    track time or expenses. Just add some line items and you are
                    good to go.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="backnext">
          <div className="backDisabled my-5">Back</div>
          <div className="movePageReview my-5" onClick={this.routeChangeNext}>
            Next
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SubmitInvoiceSetup);
