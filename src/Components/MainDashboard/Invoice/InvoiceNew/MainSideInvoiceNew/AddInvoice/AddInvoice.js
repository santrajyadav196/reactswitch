import React, {Component} from "react";
import Auxillary from "../../../../../../HOC/Auxillary/Auxillary";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default class AddInvoice extends Component {
  state = {
    invoiceFeeList: [
      {
        index: Math.random(),
        fees: "",
        feeType: "",
        totalFees: "",
      },
    ],
  };
  handleChange = (e) => {
    if (["fees", "feeType", "totalFees"].includes(e.target.name)) {
      let invoiceFeeList = [...this.state.invoiceFeeList];
      invoiceFeeList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      invoiceFeeList: [
        ...prevState.invoiceFeeList,
        {
          index: Math.random(),
          fees: "",
          feeType: "",
          totalFees: "",
        },
      ],
    }));
  };

  clickOnDelete(record) {
    if (this.state.invoiceFeeList.length !== 1) {
      this.setState({
        invoiceFeeList: this.state.invoiceFeeList.filter((r) => r !== record),
      });
    } else alert("First row cannot be deleted");
  }

  render() {
    let {invoiceFeeList} = this.state;
    let dis = invoiceFeeList.map((val, idx) => {
      let fees = `fees-${idx}`,
        feeType = `feeType-${idx}`,
        totalFees = `totalFees-${idx}`;
      return (
        <Auxillary key={val.index}>
          <div className='nameEmail my-5 row' key={val.index}>
            <div className='nameEmailWidth col-xl-8 col-lg-8 col-md-12'>
              <input
                type='text'
                className='fees my-3 col-xl-4 col-lg-4 col-md-12'
                placeholder='$0.00'
                name='fees'
                data-id={idx}
                id={fees}
              />
              <select
                id={feeType}
                data-id={idx}
                name='feeType'
                className='feeType my-3 col-xl-4 col-lg-4 col-md-12 px-3'>
                <option value='FlatFees'>Flat Fees</option>
                <option value='Hourly'>Hourly</option>
                <option value='Monthly'>Monthly</option>
              </select>
              <input
                type='text'
                className='totalFee my-3 col-xl-4 col-lg-4 col-md-12'
                placeholder='$0.00'
                name='totalFees'
                id={totalFees}
                data-id={idx}
              />
            </div>
            <div
              className='d-flex removeRow my-3 col-xl-4 col-lg-4 col-md-12'
              onClick={() => this.clickOnDelete(val)}>
              <FontAwesomeIcon
                icon={faTrash}
                size='2x'
                color='#fa6e31'
                className='trashIcon'
              />
              <div className=''>Remove the row</div>
            </div>
          </div>
          <div className='lineBottom'></div>
        </Auxillary>
      );
    });
    return (
      <div>
        {dis}
        <div className='addRecipient my-5' onClick={() => this.addNewRow()}>
          + Add Another Line
        </div>
      </div>
    );
  }
}
