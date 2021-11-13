import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import taskManager from "../../../../Assets/Images/taskManager.png";

class TaskManagerTitle extends Component {
  render() {
    return (
      <div className="container-fluid back-service-img">
        <div className="row justify-content-center row-margin-t">
          <h1 className="col-xl-5 col-lg-5 col-md-6 px-5 pricing-title text-center">
            Task Manager for better delivery
          </h1>
        </div>
        <div className="row justify-content-center row-margin-b">
          <div className="col-xl-6 col-lg-6 col-md-8 px-5 text-center">
            <p className="pricing-desc">
              Manage your tasks more efficiently. My Desk magically creates the
              tasks that need your attention and helps you focus only on the
              stuff you need to do right now.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-xl-3 col-lg-3 col-md-4">
            <NavLink
              className="getStartedLink"
              style={{ textDecoration: "none" }}
              to="task-management/getStarted"
            >
              <div className="getStarted-Btn text-center">
                Let’s Get Started
              </div>
            </NavLink>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-xl-5 col-lg-6 col-md-12 img-container text-center p-5">
            <img
              src={taskManager}
              alt="taskManager"
              className="paymentRem-img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskManagerTitle;
