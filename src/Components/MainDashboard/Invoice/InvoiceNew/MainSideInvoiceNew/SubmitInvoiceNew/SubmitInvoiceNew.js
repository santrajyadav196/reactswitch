import React, {Component} from "react";
import "./SubmitInvoiceNew.css";
import AddInvoice from "../AddInvoice/AddInvoice";
import {withRouter} from "react-router-dom";

class SubmitInvoiceNew extends Component {
  state = {
    isOldClient: true,
  };

  setClient = (e) => {
    if (e.target.value === "old") {
      this.setState({isOldClient: !this.state.isOldClient});
    } else {
      this.setState({isOldClient: true});
      let path = "/main/clients";
      this.props.history.push(path);
    }
  };

  onChangeRouteHandler = (e) => {
    if (e.target.innerHTML === "1. Setup") {
      this.props.history.push("setup");
    } else if (e.target.innerHTML === "2. Review") {
      this.props.history.push("review");
    } else {
      this.props.history.push("send");
    }
  };

  routeChangeBack = () => {
    this.props.history.push("setup");
  };

  routeChangeNext = () => {
    this.props.history.push("review");
  };

  selectedValueClients = (e) => {
    console.log("Selected Client ---- ", e.target.value);
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
            <div className='addClient'>What are you invoicing?</div>
          </div>
          <div className='descriptionInvoice mt-5'>Description</div>
          <AddInvoice />
          <div className='addNewOrOld'>
            <div className='addClient'>Who's you client?</div>
            <div>
              <div className='mt-5 row d-flex'>
                <div className='previousClient row d-fex col-xl-8 col-lg-8 col-md-8 col-sm-8 my-3'>
                  <input
                    type='radio'
                    name='site_name'
                    value='old'
                    className='newClientinvoice'
                    onChange={(e) => this.setClient(e)}
                  />
                  <div className='detailClient'>
                    <div className='checkNewClient mb-3'>
                      A client I already have
                    </div>
                    Choose an existing project and client to populate your
                    invoice. If you used time tracking, you can invoice your
                    tracked time.
                  </div>
                </div>
                <div className='selectedClientinvoice col-xl-4 col-lg-4 col-md-4 col-sm-4 my-3 px-4'>
                  <select
                    name='ClientName'
                    disabled={this.state.isOldClient ? true : false}
                    className='selectClientOptionsInvoice'
                    onChange={(e) => this.selectedValueClients(e)}>
                    <option defaultValue>Select Client</option>
                    {optionTemplate}
                  </select>
                </div>
              </div>
              <div className='previousClient row d-flex mt-5'>
                <input
                  type='radio'
                  name='site_name'
                  value='new'
                  onChange={(e) => this.setClient(e)}
                  className='newClientinvoice'
                />
                <div className='detailClient'>
                  <div className='checkNewClient'>A new client</div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className='backnext'>
          <div
            className='movePageReviewBack my-5'
            onClick={this.routeChangeBack}>
            Back
          </div>
          <div className='movePageReview my-5' onClick={this.routeChangeNext}>
            Next
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SubmitInvoiceNew);
