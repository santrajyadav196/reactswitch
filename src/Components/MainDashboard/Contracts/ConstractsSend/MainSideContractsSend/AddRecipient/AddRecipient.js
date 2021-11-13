import React, {Component} from "react";
import Auxillary from "../../../../../../HOC/Auxillary/Auxillary";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default class AddRecipient extends Component {
  state = {
    recipientList: [
      {
        index: Math.random(),
        nameReci: "",
        emailReci: "",
      },
    ],
  };
  handleChange = (e) => {
    if (["nameReci", "emailReci"].includes(e.target.name)) {
      let recipientList = [...this.state.recipientList];
      recipientList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      recipientList: [
        ...prevState.recipientList,
        {
          index: Math.random(),
          nameReci: "",
          emailReci: "",
        },
      ],
    }));
  };

  clickOnDelete(record) {
    this.setState({
      recipientList: this.state.recipientList.filter((r) => r !== record),
    });
  }

  render() {
    let {recipientList} = this.state;
    return recipientList.map((val, idx) => {
      let nameReci = `nameReci-${idx}`,
        emailReci = `emailReci-${idx}`;
      return (
        <Auxillary key={val.index}>
          <div className='nameEmail d-flex' key={val.index}>
            <div className='nameEmailWidth'>
              <input
                type='text'
                className='nameReci'
                placeholder='Name'
                name='nameReci'
                data-id={idx}
                id={nameReci}
              />
              <input
                type='text'
                className='emailReci'
                placeholder='Email Address'
                name='emailReci'
                id={emailReci}
                data-id={idx}
              />
            </div>
            <div className='addRecipient'>
              {idx === 0 ? (
                <div className='addRecipient' onClick={() => this.addNewRow()}>
                  Add Recipient
                </div>
              ) : (
                <div
                  className='removeReci'
                  onClick={() => this.clickOnDelete(val)}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    size='1x'
                    color='red'
                    className='senderAddIcon'
                  />
                </div>
              )}
            </div>
          </div>
          <div className='lineBottom'></div>
        </Auxillary>
      );
    });
  }
}
