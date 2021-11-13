import React, {Component} from "react";
import SubmitProject from "../SubmitProject/SubmitProject";

export default class AddProject extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        id: "",
        ProjectName: "",
        ClientName: "",
        StartDate: "",
        EndDate: "",
        ProjectTotal: "",
        ProjectCurr: "",
        ServiceName: "",
        ServiceRs: "",
        ServiceFee: "",
        ServiceTotal: "",
        ServiceDescription: "",
        BillingSchedule: "",
        count: 0,
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list !== this.props.list
    ) {
      this.setState({...this.returnStateObject()});
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //const isValid = this.validate();
    const index = this.props.list.length;

    //if (isValid) {
    this.props.onAddOrEdit(this.state, index);
    this.props.discard();
    //}
  };

  digits_only = (string) => [...string].every((c) => "0123456789".includes(c));

  validate = () => {
    let nameError = "";
    let zipError = "";
    let emailError = "";
    let count = 0;

    if (!this.state.projectName) {
      nameError = "Name is Mandatory";
      count = count + 1;
    }
    if (!this.state.ClientEmail.includes("@")) {
      emailError = "Invalid Email";
      count = count + 1;
    }
    let checkInt = this.digits_only(this.state.Zip);
    if (this.state.Zip.length !== 6 || !checkInt) {
      zipError = "Must be a 6 digit Numeral Code";
      count = count + 1;
    }

    if (emailError || nameError || zipError) {
      this.setState({emailError, nameError, zipError, count: count});
      return false;
    }
    return true;
  };

  render() {
    return (
      <div>
        <SubmitProject
          valueChange={this.state}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          discard={this.props.discard}
          myDivToFocus={this.props.myDivToFocus}
        />
      </div>
    );
  }
}
