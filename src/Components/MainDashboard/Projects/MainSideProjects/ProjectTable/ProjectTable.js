import React, {Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import sortby from "../../../../../Assets/Images/sortby.svg";
import "./ProjectTable.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import filterFactory, {
  // selectFilter,
  dateFilter,
  Comparator,
} from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

export default class ProjectTable extends Component {
  state = {
    field: null,
    order: null,
  };

  render() {
    //let qualityFilter;
    let inStartkDateFilter;

    // const handleSortByStatus = (e) => {
    //   qualityFilter([e.target.value]);
    // };

    const handleSort = (field, order) => {
      this.setState({
        field,
        order,
      });
    };

    const handleSortById = (e) => {
      let term = "ProjectName";
      e.target.value === "asc"
        ? this.setState({field: term, order: "asc"})
        : this.setState({field: term, order: "desc"});
    };

    const handleDateRange = (e) => {
      inStartkDateFilter({
        date: new Date(e.target.value, 0, 1),
        comparator: Comparator.GE,
      });
    };

    const indication = () => {
      return (
        <div className='row custom-noData'>
          <div className='col'>
            <div className='EmptyData'>There are no Projects yet</div>
            <div className='importFrom'>IMPORT FROM CSV</div>
          </div>
        </div>
      );
    };

    const columns = [
      {
        dataField: "ProjectName",
        text: "Name",
        classes: "col-classData",
        sort: true,
        onSort: handleSort,
      },
      {
        dataField: "ClientName",
        text: "Client Name",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
      },
      {
        dataField: "StartDate",
        text: "Start Date",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
        filter: dateFilter({
          getFilter: (filter) => {
            inStartkDateFilter = filter;
          },
        }),
      },
      {
        dataField: "EndDate",
        text: "End Date",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
      },
      {
        dataField: "Status",
        text: "Status",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
      },
      {
        dataField: "id",
        text: "Actions",
        classes: "col-data-align",
        headerClasses: "col-classData-header",
        formatter: (cellContent, row) => {
          return (
            <div className='actionsClass'>
              <div
                className='editAction'
                onClick={() => this.props.update(row.id)}>
                Edit &nbsp;
              </div>
              /&nbsp;
              <div
                className='editAction'
                onClick={() => this.props.deleteItem(row.id)}>
                Delete
              </div>
            </div>
          );
        },
      },
    ];
    const items = this.props.members;
    return (
      <div className='m-5'>
        <div className='sortBy d-flex mb-3'>
          <div className='sortBy d-flex mr-5'>
            <select onChange={(e) => handleDateRange(e)} className='searchBar'>
              <option defaultValue>Date range</option>
              <option value='2018'>{">"} 2018</option>
              <option value='2019'>{">"} 2019</option>
              <option value='2020'>{">"} 2020</option>
            </select>
          </div>
          <div className='sortBy d-flex'>
            <img src={sortby} alt='sortby' className='sortbySvg' />
            <select onChange={(e) => handleSortById(e)} className='searchBar'>
              <option defaultValue>Sort By Name</option>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </select>
          </div>
        </div>
        <BootstrapTable
          keyField='id'
          data={items}
          columns={columns}
          condensed
          filter={filterFactory()}
          bordered={false}
          noDataIndication={indication}
          wrapperClasses='borderTable'
          sort={{
            dataField: this.state.field,
            order: this.state.order,
          }}
        />
      </div>
    );
  }
}
