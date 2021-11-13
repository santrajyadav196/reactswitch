import React, {Component} from "react";
import "./SubmitContract.css";
import SelectCurrency from "react-select-currency";
import {withRouter} from "react-router-dom";

const Service = (props) => {
  return (
    <div>
      <input
        type='text'
        name='serviceName'
        className='inputTxt my-4'
        onChange={props.handleInputChange}
        value={props.valueChange.serviceName}
        placeholder='Service Name e.g. Web Design'
      />
      <div className='lineBottom'></div>
      <br />
      <br />
      <div className='d-flex justify-content-between'>
        <div className='parallelInp'>
          <input
            type='text'
            name='serviceRs'
            className='inputTxt my-4'
            onChange={props.handleInputChange}
            value={props.valueChange.serviceRs}
            placeholder='Rs 0.00'
          />
          <div className='lineBottom'></div>
        </div>
        <div className='parallelInp'>
          <input
            type='text'
            name='serviceFee'
            className='inputTxt my-4'
            onChange={props.handleInputChange}
            value={props.valueChange.serviceFee}
            placeholder='Flat Fee'
          />
          <div className='lineBottom'></div>
        </div>
      </div>
      <input
        type='text'
        name='serviceDescription'
        className='inputTxt my-4'
        onChange={props.handleInputChange}
        value={props.valueChange.serviceDescription}
        placeholder='Enter Description here....'
      />
      <div className='lineBottom'></div>
      <br />
      <br />
      <div className='d-flex justify-content-between mb-5'>
        <div className='parallelInp'>
          <span className='inputTxt my-4' placeholder='Service Total'>
            Service Total
          </span>
        </div>
        <div className='parallelInp'>
          <input
            type='text'
            name='serviceFee'
            className='inputTxt my-4'
            onChange={props.handleInputChange}
            value={props.valueChange.serviceFee}
            placeholder='Flat Fee'
          />
        </div>
      </div>
    </div>
  );
};

class SubmitContract extends Component {
  state = {
    services: [],
  };

  addServiceHandler = () => {
    this.setState({
      services: [
        ...this.state.services,
        <Service
          handleInputChange={this.props.handleInputChange}
          valueChange={this.props.valueChange}
        />,
      ],
    });
  };

  onChangeRouteHandler = (e) => {
    if (e.target.innerHTML === "2. Review") {
      this.props.history.push("review");
    } else if (e.target.innerHTML === "3. Send") {
      this.props.history.push("send");
    } else {
    }
  };

  routeChangeNext = () => {
    this.props.history.push("review");
  };

  render() {
    let optionTemplate = JSON.parse(localStorage.getItem("clients")).map(
      (v) => (
        <option key={v.id} value={v.ClientName}>
          {v.ClientName}
        </option>
      )
    );
    return (
      <div className='mx-5'>
        <div className='setupReview row'>
          <div className='contractSetup'>
            <div
              className='cursorOnChange'
              onClick={(e) => this.onChangeRouteHandler(e)}>
              1. Setup
            </div>
          </div>
          <div className='contractReview'>
            <div
              className='cursorOnChange'
              onClick={(e) => this.onChangeRouteHandler(e)}>
              2. Review
            </div>
          </div>
          <div className='contractSend'>
            <div
              className='cursorOnChange'
              onClick={(e) => this.onChangeRouteHandler(e)}>
              3. Send
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => this.props.handleSubmit(e)}
          autoComplete='off'
          className='form mx-3 py-4'>
          <div className='d-flex justify-content-between mb-4'>
            <div className='addClient'>Introduction</div>
            <div className='d-flex'>
              <div className='discardClient m-3' onClick={this.props.discard}>
                Discard Changes
              </div>
              <div className='createClient p-3'>Create Contract</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-5 col-lg-7 col-md-10'>
              <input
                type='text'
                name='ProjectName'
                className='inputTxt my-4'
                onChange={this.props.handleInputChange}
                value={this.props.valueChange.ProjectName}
                placeholder='Name your project'
              />
              <div className='lineBottom'></div>
              <br />
              <br />
              <select
                value={this.props.valueChange.ClientName}
                onChange={this.props.handleInputChange}
                name='ClientName'
                className='selectClientOptions'>
                <option defaultValue>Select Client</option>
                {optionTemplate}
              </select>
              <div className='lineBottom'></div>
              <br />
              <br />
              <div className='d-flex justify-content-between'>
                <div className='parallelInp'>
                  <input
                    type='date'
                    name='StartDate'
                    className='inputTxt my-4'
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.StartDate}
                    placeholder='Start Date'
                  />
                  <div className='lineBottom'></div>
                </div>
                <div className='parallelInp'>
                  <input
                    type='date'
                    name='EndDate'
                    className='inputTxt my-4'
                    onChange={this.props.handleInputChange}
                    value={this.props.valueChange.EndDate}
                    placeholder='End Date'
                  />
                  <div className='lineBottom'></div>
                </div>
              </div>
              <div className='contractType'>
                <p className='createCont'>I want to create a</p>
                <div className='typeBtns'>
                  <div className='typeBtn'>Proposal and Contract</div>
                  <div className='typeBtn'>Proposal only</div>
                  <div className='typeBtn'>Contract only</div>
                </div>
              </div>
            </div>
            <div className='col-2'></div>
            <div className='col-xl-5 col-lg-7 col-md-10 mt-5'>
              <div className='projectTotal'>Project Total</div>
              <div className='d-flex'>
                <input
                  type='text'
                  name='ServiceName'
                  placeholder='Enter Cost'
                  className='inputCost my-4'></input>
                <SelectCurrency value={"USD"} />
              </div>
            </div>
          </div>
          <div className='my-4 Services'>
            <div className='services'> Services</div>
            <div className='servicesDesc'>
              Describe and price the services you'll be delivering.
            </div>
            <div className='row mt-4'>
              <div className='col-xl-5 col-lg-7 col-md-10'>
                <input
                  type='text'
                  name='ServiceName'
                  className='inputTxt my-4'
                  onChange={this.props.handleInputChange}
                  value={this.props.valueChange.ServiceName}
                  placeholder='Service Name e.g. Web Design'
                />
                <div className='lineBottom'></div>
                <br />
                <br />
                <div className='d-flex justify-content-between'>
                  <div className='parallelInp'>
                    <input
                      type='text'
                      name='ServiceRs'
                      className='inputTxt my-4'
                      onChange={this.props.handleInputChange}
                      value={this.props.valueChange.ServiceRs}
                      placeholder='Rs 0.00'
                    />
                    <div className='lineBottom'></div>
                  </div>
                  <div className='parallelInp'>
                    <input
                      type='text'
                      name='ServiceFee'
                      className='inputTxt my-4'
                      onChange={this.props.handleInputChange}
                      value={this.props.valueChange.ServiceFee}
                      placeholder='Flat Fee'
                    />
                    <div className='lineBottom'></div>
                  </div>
                </div>
                <input
                  type='text'
                  name='ServiceDescription'
                  className='inputTxt my-4'
                  onChange={this.props.handleInputChange}
                  value={this.props.valueChange.ServiceDescription}
                  placeholder='Enter Description here....'
                />
                <div className='lineBottom'></div>
                <br />
                <br />
                <div className='d-flex justify-content-between mb-5'>
                  <div className='parallelInp'>
                    <span className='inputTxt my-4' placeholder='Service Total'>
                      Service Total
                    </span>
                  </div>
                  <div className='parallelInp'>
                    <input
                      type='text'
                      name='ServiceFee'
                      className='inputTxt my-4'
                      onChange={this.props.handleInputChange}
                      value={this.props.valueChange.ServiceFee}
                      placeholder='Flat Fee'
                    />
                  </div>
                </div>
                {this.state.services}
                <div className='addNewService' onClick={this.addServiceHandler}>
                  + Add New Service
                </div>
              </div>
            </div>
          </div>
          <div className='my-5 billingSchedule p-0'>
            <div className='services'> Billing Schedule</div>
            <div className='servicesDesc'>
              Set deposit amount, invoice dates, and reminders.
            </div>
            <div className='billingDetails'>
              <div className='timeStamp'>Once</div>
              <div className='timeStamp'>Weekly</div>
              <div className='timeStamp'>Monthly</div>
              <div className='timeStamp'>Custom</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-8 col-sm-10'>
              <button type='submit' className='addClient-btn py-2 '>
                Create Project
              </button>
            </div>
          </div>
        </form>

        <div className='backnext'>
          <div className='backDisabled my-5'>Back</div>
          <div className='movePageReview my-5' onClick={this.routeChangeNext}>
            Next
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SubmitContract);
