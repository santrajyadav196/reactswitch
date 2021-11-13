import React, { Component } from "react";
import "./SubmitClients.css";
import warningClient from "../../../../../Assets/Images/warningClient.svg";

class SubmitClients extends Component {
  render() {
    let CTA_Text = "Create Client";
    if (this.props.currentIndex > -1) {
      CTA_Text = "Update Client";
    }

    return (
      <div className="mx-5">
        <div
          className="d-flex justify-content-between mb-4"
          ref={this.props.myDivToScroll}
        >
          <div className="addClient">Who's your Client?</div>
          <div className="d-flex">
            <div className="discardClient m-3" onClick={this.props.discard}>
              Discard Changes
            </div>
            <div className="createClient p-3" onClick={this.props.handleSubmit}>
              {CTA_Text}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mx-3 my-4">
          <div className="webAgency d-flex">Eg. Web Agency</div>
          <div className="d-flex">
            <img
              src={warningClient}
              alt="warning"
              className="warningClient mr-2"
            />
            <div className="clientNameWarning">
              Note, you won't be able to change the client's name after you save
              it.
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => this.props.handleSubmit(e)}
          autoComplete="off"
          className="form mx-3 py-4"
        >
          <div className="row">
            <div className="col-xl-5 col-lg-7 col-md-10">
              <input
                type="text"
                name="ClientName"
                className="inputTxt my-4"
                onChange={this.props.handleInputChange}
                value={this.props.valueChange.ClientName}
                placeholder="Contact Name"
              />
              {this.props.valueChange.nameError ? (
                <div className="error">
                  <strong>{this.props.valueChange.nameError}</strong>
                </div>
              ) : null}
              <div className="lineBottom"></div>
              <br />
              <br />
              <input
                type="text"
                name="ClientEmail"
                className="inputTxt my-4"
                onChange={this.props.handleInputChange}
                value={this.props.valueChange.ClientEmail}
                placeholder="Contact Email"
              />
              {this.props.valueChange.emailError ? (
                <div className="error">
                  <strong>{this.props.valueChange.emailError}</strong>
                </div>
              ) : null}
              <div className="lineBottom"></div>
              <br />
              <br />
              <div className="d-flex justify-content-between">
                <div className="parallelInp">
                  <input
                    type="text"
                    name="Street"
                    className="inputTxt my-4"
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.Street}
                    placeholder="Street"
                  />
                  <div className="lineBottom"></div>
                </div>
                <div className="parallelInp">
                  <input
                    type="text"
                    name="Suite"
                    className="inputTxt my-4"
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.Suite}
                    placeholder="Suite"
                  />
                  <div className="lineBottom"></div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="parallelInp">
                  <input
                    type="text"
                    name="City"
                    className="inputTxt my-4"
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.City}
                    placeholder="City"
                  />
                  <div className="lineBottom"></div>
                </div>
                <div className="parallelInp">
                  <input
                    type="text"
                    name="Zip"
                    className="inputTxt my-4"
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.Zip}
                    placeholder="Zip Code"
                  />
                  {this.props.valueChange.zipError ? (
                    <div className="error">
                      <strong>{this.props.valueChange.zipError}</strong>
                    </div>
                  ) : null}
                  <div className="lineBottom"></div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="parallelInp">
                  <input
                    type="text"
                    name="Country"
                    className="inputTxt my-4"
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.Country}
                    placeholder="Country"
                  />
                  <div className="lineBottom"></div>
                </div>
                <div className="parallelInp">
                  <input
                    type="text"
                    name="State"
                    className="inputTxt my-4"
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.State}
                    placeholder="State"
                  />
                  <div className="lineBottom"></div>
                </div>
              </div>
              <button type="submit" className="addClient-btn py-2 mt-5">
                {CTA_Text}
              </button>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              {this.props.valueChange.nameError ||
              this.props.valueChange.emailError ||
              this.props.valueChange.zipError ? (
                <div className="errorsinForm px-5 py-3">
                  {this.props.valueChange.count} Errors in form
                </div>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SubmitClients;
