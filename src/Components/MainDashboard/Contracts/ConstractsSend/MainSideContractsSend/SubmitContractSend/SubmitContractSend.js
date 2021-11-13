import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {faCheck, faPlus} from "@fortawesome/free-solid-svg-icons";
import "./SubmitContractSend.css";
import AddRecipient from "../AddRecipient/AddRecipient";

class SubmitContractSend extends Component {
  state = {
    sendTo: "Rajat Suri",
  };
  routeChangeBack = () => {
    this.props.history.push("review");
  };

  onChangeRouteHandler = (e) => {
    if (e.target.innerHTML === "1. Setup") {
      this.props.history.push("setup");
    } else if (e.target.innerHTML === "2. Review") {
      this.props.history.push("review");
    } else {
    }
  };

  render() {
    return (
      <div className='mx-5'>
        <div className='setupReview row'>
          <div className='contractSetup_send'>
            <div
              className='cursorOnChange'
              onClick={(e) => this.onChangeRouteHandler(e)}>
              1. Setup
            </div>
          </div>
          <div className='contractReview_send'>
            <div
              className='cursorOnChange'
              onClick={(e) => this.onChangeRouteHandler(e)}>
              2. Review
            </div>
          </div>
          <div className='contractSend_send'>
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
          <div className='mb-5'>
            <div className='addClient mb-4'>Compose Email</div>
            <div className='lineBottom'></div>
          </div>
          <div className='senders d-flex'>
            <div className='sendTo'>To:</div>
            <div className='senderBox d-flex'>
              <span className='senderName'>
                {this.state.sendTo.split(" ")[0]}
              </span>
              <FontAwesomeIcon
                icon={faCheck}
                size='2x'
                color='green'
                className='senderCheck'
              />
            </div>
            <div className='addSender'>
              <FontAwesomeIcon
                icon={faPlus}
                size='2x'
                color='#4c4c4c'
                className='senderAddIcon'
              />
            </div>
          </div>
          <div className='lineBottom mt-5 mb-5'></div>
          <div className='recipients'>
            <AddRecipient />
          </div>
          <div className='reviewProposalHeader'>
            Review proposal "checking" from {this.state.sendTo}
          </div>
          <textarea
            className='messageBody'
            defaultValue={`Hey Rajat!

Thanks a lot for the opportunity to work with you!
Please approve this scope to get started.

Thanks again!
            `}
          />
        </form>
        <div className='backnext'>
          <div
            className='movePageReviewBack my-5'
            onClick={this.routeChangeBack}>
            Back
          </div>
          <div className='sendMail'>
            <div className='previewMail my-5'>Preview</div>
            <div className='movePageReview my-5'>Send</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SubmitContractSend);
