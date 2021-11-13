import React, {Component} from "react";
import SideBar from "../../SideBar/SideBar";
import AddProject from "./AddProject/AddProject";
import ProjectTable from "./ProjectTable/ProjectTable";

export default class MainSideProjects extends Component {
  state = {
    isNewProject: true,
    currentIndex: -1,
    list: this.returnList(),
  };

  myDivToFocus = React.createRef();

  AddProjectsHandler = () => {
    this.setState((prevState) => ({
      isNewProject: !prevState.isNewProject,
    }));
  };

  discardProjectHandler = () => {
    this.setState({
      isNewProject: true,
    });
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.location.reload();
  };

  returnList() {
    if (localStorage.getItem("projects") == null) {
      localStorage.setItem("projects", JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem("projects"));
  }

  handleEdit = (index) => {
    const Index = this.state.list.findIndex((s) => {
      return s.id === index;
    });
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    const lead = {...this.state.list[Index]};
    lead.projectNameError = "";
    lead.emailError = "";
    lead.zipError = "";
    const leads = [...this.state.list];
    leads[Index] = lead;
    this.setState({
      isNewProject: false,
      currentIndex: index,
      list: leads,
    });
  };

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(list));
    this.setState({currentIndex: -1, list});
  };

  onAddOrEdit = (data, id) => {
    var list = this.returnList();
    if (this.state.currentIndex === -1) {
      data.id = id;
      list.push(data);
    } else list[this.state.currentIndex] = data;
    localStorage.setItem("projects", JSON.stringify(list));
    this.setState({currentIndex: -1, list});
  };
  render() {
    return (
      <div className='container-fluid px-0'>
        <div className='d-flex'>
          <SideBar />
          <div className='px-0 w-100'>
            <div className='p-5 mt-2'>
              <span className='DashMarg'>Projects</span>
              <div className='col-12 pt-5 navBelowHead'></div>
            </div>
            {this.state.isNewProject ? (
              <button
                className='ml-5 px-4 py-3 addClients d-inline-block'
                onClick={this.AddProjectsHandler}>
                <span>Add New</span>
              </button>
            ) : (
              <AddProject
                currentIndex={this.state.currentIndex}
                list={this.state.list}
                onAddOrEdit={this.onAddOrEdit}
                discard={this.discardProjectHandler}
                myDivToFocus={this.myDivToFocus}
              />
            )}
            <ProjectTable
              members={this.state.list}
              deleteItem={this.handleDelete}
              update={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
