import React, {Component} from "react";
import Auxillary from "../../../../../../HOC/Auxillary/Auxillary";
import "./AddUnitItem.css";

export default class AddUnitItem extends Component {
  state = {
    invoiceFeeList: [
      {
        index: Math.random(),
        indx: "",
        itemName: "",
        unitPrice: 0,
        unit: 0,
        cost: 0,
      },
    ],
    totalCost: 0,
    VATPer: 0,
    VatCost: 0.0,
    grandTotal: 0,
  };

  static getDerivedStateFromProps(props, state) {
    let newlist = state.invoiceFeeList.map((val) => {
      return (val.cost = val.unitPrice * val.unit);
    });
    let sum = state.invoiceFeeList
      .map((datum) => datum.cost)
      .reduce((a, b) => a + b);
    parseInt(sum);
    let VatCost = parseFloat(
      ((state.VATPer / 100) * state.totalCost).toFixed(2)
    );
    let grandTotal = parseFloat(sum + VatCost);
    return {
      newlist,
      totalCost: sum,
      VATPer: state.VATPer,
      VatCost: VatCost,
      grandTotal: grandTotal,
    };
  }

  onChangeVAT = (e) => {
    let VATPer;
    VATPer = e.target.value;
    parseInt(VATPer);
    this.setState({VATPer});
  };

  onChangeUnitPrice = (e) => {
    let unitPrice;
    if (e.target.name === "unitPrice") {
      unitPrice = e.target.value;
      parseInt(unitPrice);
      let invoiceFeeList = [...this.state.invoiceFeeList];
      invoiceFeeList[e.target.dataset.id][e.target.name] = unitPrice;
      this.setState({invoiceFeeList});
    }
  };

  clickOnDelete(record) {
    if (this.state.invoiceFeeList.length !== 1) {
      this.setState({
        invoiceFeeList: this.state.invoiceFeeList.filter((r) => r !== record),
        VATPer: 0,
        VatCost: 0,
      });
    } else alert("First row cannot be deleted");
  }

  onChangeUnit = (e) => {
    let unit;
    if (e.target.name === "unit") {
      unit = e.target.value;
      parseInt(unit);
      let invoiceFeeList = [...this.state.invoiceFeeList];
      invoiceFeeList[e.target.dataset.id][e.target.name] = unit;
      this.setState({invoiceFeeList});
    }
  };

  handleChange = (e) => {
    if (
      ["indx", "itemName", "unitPrice", "unit", "cost"].includes(e.target.name)
    ) {
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
          indx: "",
          itemName: "",
          unitPrice: 0,
          unit: 0,
          cost: 0,
        },
      ],
    }));
  };

  render() {
    let {invoiceFeeList} = this.state;

    let dis = invoiceFeeList.map((val, idx) => {
      let indx = `indx-${idx}`,
        itemName = `itemName-${idx}`,
        unitPrice = `unitPrice-${idx}`,
        unit = `unit-${idx}`,
        cost = `cost-${idx}`;

      return (
        <Auxillary key={val.index}>
          <div className='invoiceRevItemListUpper my-5' key={val.index}>
            <div className='invoiceRevItemList'>
              <div className='indexId' id={indx}>
                {idx + 1}
              </div>
              <input
                type='text'
                className='inpInvoiceRev'
                placeholder='Item Name'
                name='itemName'
                data-id={idx}
                id={itemName}
              />
              <input
                type='text'
                className='inpInvoiceRev'
                placeholder='0'
                name='unitPrice'
                data-id={idx}
                id={unitPrice}
                onChange={(e) => this.onChangeUnitPrice(e)}
              />
              <input
                type='text'
                className='inpInvoiceRev'
                placeholder='0'
                name='unit'
                id={unit}
                data-id={idx}
                onChange={(e) => this.onChangeUnit(e)}
              />
              <div className='costInv' id={cost} name='cost'>
                {val.cost}
              </div>
            </div>
            <div
              className='d-flex removeRowInvoiceRev'
              onClick={() => this.clickOnDelete(val)}>
              Delete
            </div>
          </div>
        </Auxillary>
      );
    });

    return (
      <div>
        <div className='tableFormOver'>
          <div className='d-flex itemInvoiceHeader my-5'>
            <div className='invoiceHeaderColID'>#</div>
            <div className='invoiceHeaderColName'>Item Name</div>
            <div className='invoiceHeaderColPrice'>Unit Price</div>
            <div className='invoiceHeaderColUnit'>Unit</div>
            <div className='invoiceHeaderColCost'>Cost</div>
          </div>
          {dis}
        </div>
        <div className='addItemInvoice'>
          <div className='addNewItem my-5' onClick={() => this.addNewRow()}>
            Add Item
          </div>
        </div>
        <div className='totalCostInvoice'>
          <div className='totalInvoice my-4'>
            <span>Sub Total : </span>
            <span className='totalNumeric'>{this.state.totalCost}</span>
          </div>
          <div className='invoiceVAT my-4'>
            <span>VAT(%) : </span>
            <div className='justifyVat'>
              <input
                type='text'
                placeholder='0'
                className='vatPerc'
                value={this.state.VATPer}
                onChange={(e) => this.onChangeVAT(e)}
              />
              <span className='totaVatlNumeric'>{this.state.VatCost}</span>
            </div>
          </div>
          <div className='grandTotalInvoice my-4'>
            <span>Grand Total : </span>
            <span className='grandTotalNumeric'>{this.state.grandTotal}</span>
          </div>
        </div>
      </div>
    );
  }
}
