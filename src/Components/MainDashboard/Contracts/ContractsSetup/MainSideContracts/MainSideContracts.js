import React, {Component} from "react";
import SideBar from "../../../SideBar/SideBar";
import AddContract from "./AddContract/AddContract";

export default class MainSideContracts extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList(),
  };

  AddClientsHandler = () => {
    this.setState({
      currentIndex: this.state.currentIndex,
      list: this.state.list,
    });
  };

  returnList() {
    if (localStorage.getItem("contracts") == null) {
      localStorage.setItem("contracts", JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem("contracts"));
  }

  handleEdit = (index) => {
    const Index = this.state.list.findIndex((s) => {
      return s.id === index;
    });
    if (this.myDivToScroll.current) {
      this.myDivToScroll.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    const lead = {...this.state.list[Index]};
    const leads = [...this.state.list];
    leads[Index] = lead;
    this.setState({
      currentIndex: index,
      list: leads,
    });
  };

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("contracts", JSON.stringify(list));
    this.setState({currentIndex: -1, list});
  };

  onAddOrEdit = (data, id) => {
    var list = this.returnList();
    if (this.state.currentIndex === -1) {
      data.id = id;
      list.push(data);
    } else list[this.state.currentIndex] = data;
    localStorage.setItem("contracts", JSON.stringify(list));
    this.setState({currentIndex: -1, list});
  };

  render() {
    return (
      <div className='container-fluid px-0'>
        <div className='d-flex'>
          <SideBar />
          <div className='px-0 w-100'>
            <div className='p-5 mt-2'>
              <span className='DashMarg'>Contracts</span>
              <div className='col-12 pt-5 navBelowHead'></div>
            </div>
            <AddContract
              currentIndex={this.state.currentIndex}
              list={this.state.list}
              onAddOrEdit={this.onAddOrEdit}
              discard={this.AddClientsHandler}
              myDivToScroll={this.myDivToScroll}
            />
          </div>
        </div>
      </div>
    );
  }
}
