import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./SubmitContractReview.css";

class SubmitContractReview extends Component {
  myDivToScrollFirst = React.createRef();
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
          <div className='d-flex justify-content-between mb-4'>
            <div className='addClient'>Service Contract</div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex'>
              {this.props.state.isEditEnableName ? (
                <div className='d-flex justify-space-between nameValueReview'>
                  <input
                    type='text'
                    name='ContractName'
                    autoFocus
                    className='ContractName padChange my-4'
                    defaultValue={this.props.state.ContractorNameValue}
                    ref={this.props.wrapperRefName}
                  />
                </div>
              ) : (
                <span className='ContractName my-4'>
                  {this.props.state.ContractorNameValue}
                </span>
              )}
              <div
                className='editReviewSvg'
                onClick={this.props.changeEditModeName}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='15pt'
                  viewBox='-15 -15 484.00019 484'
                  width='15pt'>
                  <path d='m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0' />
                </svg>
              </div>
            </div>
            <div className='col-12 d-flex'>
              {this.props.state.isEditEnableAgreement ? (
                <textarea
                  type='text'
                  autoFocus
                  name='ContractReviewInfo'
                  className='ContractReviewInfo padChange my-4'
                  ref={this.props.wrapperRefAgreement}
                  defaultValue={this.props.state.Agreement}
                />
              ) : (
                <p className='ContractReviewInfo my-4'>
                  {this.props.state.Agreement}
                </p>
              )}
              <div
                className='editReviewSvg'
                onClick={this.props.changeEditModeAgreement}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='15pt'
                  viewBox='-15 -15 484.00019 484'
                  width='15pt'>
                  <path d='m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0' />
                </svg>
              </div>
            </div>
            <div className='col-11 lineBottom mx-3'></div>
            <div className='row mx-2 my-4 w-100'>
              <div className='col-xl-4 col-lg-4 col-md-5 col-sm-10 d-flex mt-5'>
                <div className='ClientInputName reviewContractF'>
                  <div className=' reviewContractF'>
                    Client{'(the "Client")'}
                  </div>
                  {this.props.state.isEditEnableClient ? (
                    <input
                      type='text'
                      name='ClientName'
                      autoFocus
                      defaultValue={this.props.state.ClientName}
                      ref={this.props.wrapperRefClientName}
                      className='reviewContractF'
                    />
                  ) : (
                    <div className='reviewContractF'>
                      {this.props.state.ClientName}
                    </div>
                  )}
                  {this.props.state.isEditEnableClient ? (
                    <input
                      type='text'
                      name='Client'
                      defaultValue={this.props.state.Client}
                      ref={this.props.wrapperRefClient}
                      className='reviewContractF'
                    />
                  ) : (
                    <div className='reviewContractF'>
                      {this.props.state.Client}
                    </div>
                  )}
                  {this.props.state.isEditEnableClient ? (
                    <input
                      type='text'
                      name='ClientEmail'
                      defaultValue={this.props.state.ClientEmail}
                      ref={this.props.wrapperRefClientEmail}
                      className='reviewContractF'
                    />
                  ) : (
                    <div className='reviewContractF'>
                      {this.props.state.ClientEmail}
                    </div>
                  )}
                  {this.props.state.isEditEnableClient ? (
                    <input
                      type='text'
                      name='ClientAddress'
                      defaultValue={this.props.state.ClientAddress}
                      ref={this.props.wrapperRefClientAddress}
                      className='reviewContractF'
                    />
                  ) : (
                    <div className='reviewContractF'>
                      {this.props.state.ClientAddress}
                    </div>
                  )}
                </div>
                <div
                  className='editReviewSvg'
                  onClick={this.props.changeEditModeClientDetails}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='15pt'
                    viewBox='-15 -15 484.00019 484'
                    width='15pt'>
                    <path d='m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0' />
                  </svg>
                </div>
              </div>
              <div className='col-xl-2 col-lg-2 col-md-2 col-sm-0'></div>
              <div className='col-xl-4 col-lg-4 col-md-5 col-sm-10 d-flex mt-5'>
                <div className='ClientInputName reviewContractF'>
                  <div className=' reviewContractF'>
                    Contractor{'(the "Contractor")'}
                  </div>
                  {this.props.state.isEditEnableContractor ? (
                    <input
                      type='text'
                      autoFocus
                      name='ContractorName'
                      defaultValue={this.props.state.ContractorName}
                      ref={this.props.wrapperRefContractorName}
                      className='reviewContractF'
                    />
                  ) : (
                    <div className='reviewContractF'>
                      {this.props.state.ContractorName}
                    </div>
                  )}
                  {this.props.state.isEditEnableContractor ? (
                    <input
                      type='text'
                      name='Contractor'
                      defaultValue={this.props.state.Contractor}
                      ref={this.props.wrapperRefContractor}
                      className='reviewContractF'
                    />
                  ) : (
                    <div className='reviewContractF'>
                      {this.props.state.Contractor}
                    </div>
                  )}
                  {this.props.state.isEditEnableContractor ? (
                    <input
                      type='text'
                      name='ContractorEmail'
                      defaultValue={this.props.state.ContractorEmail}
                      ref={this.props.wrapperRefContractorEmail}
                      className='reviewContractF'
                    />
                  ) : (
                    <div className='reviewContractF'>
                      {this.props.state.ContractorEmail}
                    </div>
                  )}
                </div>
                <div
                  className='editReviewSvg'
                  onClick={this.props.changeEditModeContractorDetails}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='15pt'
                    viewBox='-15 -15 484.00019 484'
                    width='15pt'>
                    <path d='m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='col-11 ContractName'>Services</div>
            <div className='col-11 servicesReview mt-3'>
              Contractor agrees to perform services as described in Attachment A
              (the “Services”) and Client agrees to pay Contractor as described
              in Attachment A.
            </div>
            <div className='col-11 ContractName'>Signatures</div>
            <div className='col-12 servicesReview mt-3'>
              In witness whereof, the Parties, have executed this Agreement,
              inclusive of Attachment A and Attachment B, as of the later of the
              two dates below (the “Effective Date”).
            </div>
            <div className=' col-12 d-flex mt-5 p-0'>
              <div className='col-xl-7 col-lg-7 col-md-6 col-sm-5 mt-5 ClientInputName'>
                <div className='ClientInputName'>
                  <div className=' reviewContractfooter'>
                    Client({this.props.state.Client})
                  </div>
                  <div className='footerSig'>Signature</div>
                  <div className='footerDate'>Date</div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-5 col-sm-5 mt-5 ClientInputName'>
                <div className='ClientInputName'>
                  <div className=' reviewContractfooter'>
                    Contractor({this.props.state.Contractor})
                  </div>
                  <div className='footerSig'>Signature</div>
                  <div className='footerDate'>Date</div>
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

export default withRouter(SubmitContractReview);
