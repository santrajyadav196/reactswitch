import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import sortby from "../../../../../Assets/Images/sortby.svg";
import "./ClientsTable.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import filterFactory from "react-bootstrap-table2-filter";
//import filterFactory, {selectFilter} from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

class ClientsTable extends Component {
  state = {
    field: null,
    order: null,
  };

  render() {
    let qualityFilter;
    //const selectOptions = {India: "India", USA: "USA", UK: "UK"};

    const handleSortByStatus = (e) => {
      qualityFilter([e.target.value]);
    };

    const handleSort = (field, order) => {
      this.setState({
        field,
        order,
      });
    };

    const handleSortById = (e) => {
      let term = "ClientName";
      e.target.value === "asc"
        ? this.setState({ field: term, order: "asc" })
        : this.setState({ field: term, order: "desc" });
    };

    const indication = () => {
      return (
        <div className="row custom-noData">
          <div className="col">
            <div className="EmptyData">There are no clients yet</div>
            <div className="importFrom">IMPORT FROM CSV</div>
          </div>
        </div>
      );
    };

    const columns = [
      {
        dataField: "ClientName",
        text: "Name",
        classes: "col-classData",
        sort: true,
        onSort: handleSort,
      },
      // {
      //   dataField: "Country",
      //   text: "Country",
      //   classes: "col-data-align",
      //   headerClasses: "col-classData-header",
      //   formatter: (cell) => selectOptions[cell],
      //   filter: selectFilter({
      //     options: selectOptions,
      //     getFilter: (filter) => {
      //       qualityFilter = filter;
      //     },
      //   }),
      // },
      {
        dataField: "City",
        text: "City",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
      },
      {
        dataField: "lastEmail",
        text: "Last Email Sent",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
      },
      {
        dataField: "projectCount",
        text: "Total Projects",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
      },
      {
        dataField: "Income",
        text: "Income Recieved",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
      },
      // {
      //   dataField: "Zip",
      //   text: "Zip Code",
      //   classes: "col-data-align",
      //   headerClasses: "col-classData-header",
      // },
      // {
      //   dataField: "ClientEmail",
      //   text: "Client Email",
      //   classes: "col-data-align",
      //   headerClasses: "col-classData-header",
      // },
      {
        dataField: "id",
        text: "Actions",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
        formatter: (cellContent, row) => {
          return (
            <div className="actionsClass">
              <div
                className="editAction"
                onClick={() => this.props.update(row.id)}
              >
                Edit &nbsp;
              </div>
              /&nbsp;
              <div
                className="editAction"
                onClick={() => this.props.deleteItem(row.id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];
    const items = this.props.members;
    return (
      <div className="m-5">
        <div className="sortBy d-flex mb-3">
          <div
            className="sortByStatus select-filter placeholder-selected"
            onClick={(e) => e.stopPropagation()}
          >
            <select
              onChange={(e) => handleSortByStatus(e)}
              className="searchBar"
            >
              <option defaultValue>Status</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="sortBy d-flex">
            <img src={sortby} alt="sortby" className="sortbySvg" />
            <select onChange={(e) => handleSortById(e)} className="searchBar">
              <option defaultValue>Sort By Name</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <BootstrapTable
          keyField="id"
          data={items}
          columns={columns}
          condensed
          filter={filterFactory()}
          bordered={false}
          noDataIndication={indication}
          wrapperClasses="borderTable"
          sort={{
            dataField: this.state.field,
            order: this.state.order,
          }}
        />
      </div>
    );
  }
}

export default ClientsTable;
