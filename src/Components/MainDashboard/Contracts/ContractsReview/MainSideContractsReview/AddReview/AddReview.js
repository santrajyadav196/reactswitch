import React, {Component} from "react";
import SubmitContractReview from "../SubmitContractReview/SubmitContractReview";

class AddReview extends Component {
  wrapperRefName = React.createRef();
  wrapperRefAgreement = React.createRef();
  wrapperRefClientName = React.createRef();
  wrapperRefClient = React.createRef();
  wrapperRefClientEmail = React.createRef();
  wrapperRefClientAddress = React.createRef();
  wrapperRefContractorName = React.createRef();
  wrapperRefContractor = React.createRef();
  wrapperRefContractorEmail = React.createRef();

  state = {
    isEditEnableName: false,
    isEditEnableAgreement: false,
    isEditEnableClient: false,
    isEditEnableContractor: false,
    ContractorNameValue: "Edit Contract Name Here!!",
    Agreement:
      "This contract (the “Agreement”) is entered into by and between the below named parties (the “Parties”). This offer will expire at the close of business on 01/25/2021. if not accepted in writing by counter-signing this Agreement by the aforementioned date.",
    ClientName: "Web Design",
    Client: "Rajat",
    ClientEmail: "Rajat12@gmail.com",
    ClientAddress: "20 15New york, OH, 64521, US",
    ContractorName: "Digitalogy",
    Contractor: "Anurag Rai",
    ContractorEmail: "rai.anurag@gmail.com",
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRefName.current !== null &&
      this.wrapperRefName.current.value !== event.target.value
    ) {
      this.updateValueName();
    }
    if (
      this.wrapperRefAgreement.current !== null &&
      this.wrapperRefAgreement.current.value !== event.target.value
    ) {
      this.updateValueAgreement();
    }
    if (
      this.wrapperRefClientName.current !== null &&
      this.wrapperRefClientName.current.value !== event.target.value &&
      this.wrapperRefClient.current !== null &&
      this.wrapperRefClient.current.value !== event.target.value &&
      this.wrapperRefClientEmail.current !== null &&
      this.wrapperRefClientEmail.current.value !== event.target.value &&
      this.wrapperRefClientAddress.current !== null &&
      this.wrapperRefClientAddress.current.value !== event.target.value
    ) {
      this.updateValueClient();
    }
    if (
      this.wrapperRefContractorName.current !== null &&
      this.wrapperRefContractorName.current.value !== event.target.value &&
      this.wrapperRefContractor.current !== null &&
      this.wrapperRefContractor.current.value !== event.target.value &&
      this.wrapperRefContractorEmail.current !== null &&
      this.wrapperRefContractorEmail.current.value !== event.target.value
    ) {
      this.updateValueContractor();
    }
  };

  changeEditModeName = () => {
    this.setState({isEditEnableName: !this.state.isEditEnableName});
  };

  changeEditModeAgreement = () => {
    this.setState({isEditEnableAgreement: !this.state.isEditEnableAgreement});
  };

  changeEditModeClientDetails = () => {
    this.setState({isEditEnableClient: !this.state.isEditEnableClient});
  };

  changeEditModeContractorDetails = () => {
    this.setState({isEditEnableContractor: !this.state.isEditEnableContractor});
  };

  updateValueName = () => {
    this.setState({
      isEditEnableName: false,
      ContractorNameValue: this.wrapperRefName.current.value,
    });
  };

  updateValueAgreement = () => {
    this.setState({
      isEditEnableAgreement: false,
      Agreement: this.wrapperRefAgreement.current.value,
    });
  };

  updateValueClient = () => {
    this.setState({
      isEditEnableClient: false,
      ClientName: this.wrapperRefClientName.current.value,
      Client: this.wrapperRefClient.current.value,
      ClientEmail: this.wrapperRefClientEmail.current.value,
      ClientAddress: this.wrapperRefClientAddress.current.value,
    });
  };

  updateValueContractor = () => {
    this.setState({
      isEditEnableContractor: false,
      ContractorName: this.wrapperRefContractorName.current.value,
      Contractor: this.wrapperRefContractor.current.value,
      ContractorEmail: this.wrapperRefContractorEmail.current.value,
    });
  };

  render() {
    return (
      <div>
        <SubmitContractReview
          state={this.state}
          changeEditModeName={this.changeEditModeName}
          updateValueName={this.updateValueName}
          wrapperRefName={this.wrapperRefName}
          changeEditModeAgreement={this.changeEditModeAgreement}
          updateValueAgreement={this.updateValueAgreement}
          wrapperRefAgreement={this.wrapperRefAgreement}
          changeEditModeClientDetails={this.changeEditModeClientDetails}
          updateValueClient={this.updateValueClient}
          wrapperRefClientName={this.wrapperRefClientName}
          wrapperRefClient={this.wrapperRefClient}
          wrapperRefClientEmail={this.wrapperRefClientEmail}
          wrapperRefClientAddress={this.wrapperRefClientAddress}
          changeEditModeContractorDetails={this.changeEditModeContractorDetails}
          updateValueContractor={this.updateValueContractor}
          wrapperRefContractorName={this.wrapperRefContractorName}
          wrapperRefContractor={this.wrapperRefContractor}
          wrapperRefContractorEmail={this.wrapperRefContractorEmail}
        />
      </div>
    );
  }
}

export default AddReview;
