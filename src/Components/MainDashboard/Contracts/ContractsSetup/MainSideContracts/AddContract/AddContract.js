import React, {Component} from "react";
import SubmitContract from "../SubmitContract/SubmitContract";

export default class AddContract extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        id: "",
        ClientName: "",
        ClientEmail: "",
        City: "",
        Zip: "",
        Country: "",
        State: "",
        Suite: "",
        Street: "",
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
    const isValid = this.validate();
    const index = this.props.list.length;
    if (isValid) {
      this.props.onAddOrEdit(this.state, index);
    }
  };

  render() {
    return (
      <div>
        <SubmitContract
          valueChange={this.state}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          discard={this.props.discard}
        />
      </div>
    );
  }
}
