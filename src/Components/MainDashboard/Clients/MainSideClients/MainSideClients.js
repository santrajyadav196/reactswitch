import React, { Component } from "react";
import "./MainSideClients.css";
import ClientsTable from "./ClientsTable/ClientsTable";
import AddClient from "./AddClient/AddClient";
import SideBar from "../../SideBar/SideBar";

import TopRightToast from "../../../Common/TopRightToast/TopRightToast";

class MainSideClients extends Component {
  state = {
    isNewClient: true,
    currentIndex: -1,
    list: [],
    toast: {
      title: "Client Added!",
      time: "0s ago",
      message: "Client has been added successfully",
      show: false,
    },
  };

  myDivToScroll = React.createRef();

  AddClientsHandler = () => {
    this.setState((prevState) => ({
      ...this.state,
      isNewClient: !prevState.isNewClient,
      currentIndex: this.state.currentIndex,
      list: this.state.list,
    }));
  };

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
    const lead = { ...this.state.list[Index] };
    lead.nameError = "";
    lead.emailError = "";
    lead.zipError = "";
    const leads = [...this.state.list];
    leads[Index] = lead;
    this.setState({
      ...this.state,
      currentIndex: index,
      list: leads,
      isNewClient: false,
    });
  };

  handleDelete = (index) => {
    const list = [ ...this.state.list ];
    list.splice(index, 1);
    const toastObj = {
      title: "Client Deleted!",
      time: "0s ago",
      message: "Clien has been deleted successfully",
      show: true,
    };
    this.setState({ ...this.state, currentIndex: -1, list, toast: toastObj });
  };

  onAddOrEdit = (data, id) => {
    const list = [ ...this.state.list ];
    const toastObj = {
      title: "",
      time: "0s ago",
      message: "",
      show: true,
    };
    if (this.state.currentIndex === -1) {
      data.id = id;
      list.push(data);
      toastObj.title = "Client Added!";
      toastObj.message = "Client has been added successfully";
    } else {
      list[this.state.currentIndex] = data;
      toastObj.title = "Client Updated!";
      toastObj.message = "Client has been updated successfully";
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        currentIndex: -1,
        list,
        isNewClient: !prevState.isNewClient,
        toast: toastObj,
      };
    });
  };

  onToastClosed = () => {
    this.setState({
      ...this.state,
      toast: {
        title: "Client Added!",
        time: "0s ago",
        message: "Client has been added successfully",
        show: false,
      },
    });
  };

  render() {
    return (
      <div className="container-fluid px-0">
        <div className="d-flex">
          <SideBar />
          <div className="px-0 w-100">
            <div className="p-5 mt-2">
              <span className="DashMarg">Clients</span>
              <div className="col-12 pt-5 navBelowHead"></div>
            </div>
            {this.state.isNewClient ? (
              <button
                className="ml-5 px-4 py-3 addClients d-inline-block"
                onClick={this.AddClientsHandler}
              >
                <span>Add Clients</span>
              </button>
            ) : (
              <AddClient
                currentIndex={this.state.currentIndex}
                list={this.state.list}
                onAddOrEdit={this.onAddOrEdit}
                discard={this.AddClientsHandler}
                myDivToScroll={this.myDivToScroll}
              />
            )}
            <ClientsTable
              members={this.state.list}
              deleteItem={this.handleDelete}
              update={this.handleEdit}
            />
            <TopRightToast
              classes="position-absolute topRight"
              {...this.state.toast}
              onToastClosed={this.onToastClosed}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainSideClients;
