import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import AddUnitItem from "../AddUnitItem/AddUnitItem";
import "./SubmitInvoiceReview.css";

class SubmitInvoiceReview extends Component {
  routeChangeNext = () => {
    this.props.history.push("send");
  };

  routeChangeBack = () => {
    this.props.history.push("setup");
  };

  onChangeRouteHandler = (e) => {
    if (e.target.innerHTML === "1. Setup") {
      this.props.history.push("setup");
    } else if (e.target.innerHTML === "3. Send") {
      this.props.history.push("send");
    } else {
    }
  };
  render() {
    return (
      <div className='mx-5'>
        <div className='setupReview row'>
          <div className='contractSetup_review'>
            <div
              className='cursorOnChange'
              onClick={(e) => this.onChangeRouteHandler(e)}>
              1. Setup
            </div>
          </div>
          <div className='contractReview_review'>
            <div
              className='cursorOnChange'
              onClick={(e) => this.onChangeRouteHandler(e)}>
              2. Review
            </div>
          </div>
          <div className='contractSend_review'>
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
          <div className='floatRightBtn mb-4'>
            <div className='cancelInvoiceReview'>Cancel</div>
            <div className='nextInvoiceReview'>Next</div>
          </div>
          <div className='invoiceDetail my-5'>Invoice</div>
          <div className='totalDetail py-5 mb-4'>
            <div className='serialInvoice'>1</div>
            <div className='detailQuan'>
              <div className='priceInvoice'>$222</div>
              <div className='mt-4'>
                <span className='spanIssue'>Due: </span>
                <span className='spanIssueDate'>Upon receipt</span>
              </div>
              <div className='mb-3'>
                <span className='spanIssue'>Issued: </span>
                <span className='spanIssueDate'>10/12/2019</span>
              </div>
            </div>
          </div>
          <div className='lineBottomInvoice mt-5 mb-5'></div>
          <div className='row billInvoiceData'>
            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12'>
              <div className='billFrom mb-5'>Bill From</div>
              <div className='projectInvoiceName mb-4'>Web Design</div>
              <div className='projectInvoiceAddress'>
                2015
                <p className='mt-2'>New york, Ohio 64521, United States</p>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-1'></div>
            <div className='col-xl-4 col-lg-4 col-md-5 col-sm-12'>
              <div className='billTo mb-4'>Bill To</div>
              <div className='imputPlaceholders'>
                <input
                  type='text'
                  placeholder='Bill From'
                  className='billFromInp'
                />
                <input
                  type='text'
                  placeholder='Bill From Address'
                  className='billFromAddressInp'
                />
              </div>
            </div>
          </div>

          <AddUnitItem />
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

export default withRouter(SubmitInvoiceReview);
