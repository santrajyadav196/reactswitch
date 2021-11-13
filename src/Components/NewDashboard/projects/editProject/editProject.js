import React, { useState } from "react";
import SideNavDrawer from "../../../../Components/NewDashboard/sidedrawer/SideNavDrawer";
import Header from "../../header/header";
import Terms from "./terms";
import Tasks from "./task/task";
import Timer from "./timer/timer";
import Notes from "./Notes/notes";
import Files from "./files/file";
import WeekView from "./weekview/weekview";

export default function editProject() {
  const [postionTopSelector, setPostionTopSelector] = useState("Terms");
  const updateTopSelector = (value) => {
    setPostionTopSelector(value);
  };
  const UiRender = () => {
    switch (postionTopSelector) {
      case "Terms":
        return (
          <>
            <Terms />
          </>
        );
      case "Tasks":
        return (
          <>
            <Tasks />
          </>
        );
      case "Timer":
        return (
          <>
            <Timer />
          </>
        );

      case "Notes":
        return (
          <>
            <Notes />
          </>
        );
      case "Files":
        return (
          <>
            <Files />
          </>
        );
      case "Week View":
        return (
          <>
            <WeekView />
          </>
        );

      default:
        return <>Not Selected</>;
    }
  };

  return (
    <div>
      {" "}
      <div className="row">
        <SideNavDrawer />
        <div className="col-lg-9 col-md-9 col-sm-9  bg">
          <Header title={"Projects"}></Header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="boxmenuclent d-flex justify-content-between align-items-center tasks in_width">
                  <div
                    className={
                      postionTopSelector === "Terms"
                        ? "selected_head_item"
                        : "not_selected_first"
                    }
                    onClick={() => {
                      updateTopSelector("Terms");
                    }}
                  >
                    Terms
                  </div>
                  <div
                    className={
                      postionTopSelector === "Tasks"
                        ? "selected_head_item"
                        : "mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Tasks");
                    }}
                  >
                    Tasks
                  </div>
                  <div
                    className={
                      postionTopSelector === "Timer"
                        ? "selected_head_item"
                        : "mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Timer");
                    }}
                  >
                    TImer
                  </div>
                  <div
                    className={
                      postionTopSelector === "Week View"
                        ? "selected_head_item"
                        : "mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Week View");
                    }}
                  >
                    Week View
                  </div>
                  <div
                    className={
                      postionTopSelector === "Reports"
                        ? "selected_head_item"
                        : "mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Reports");
                    }}
                  >
                    Reports
                  </div>
                  <div
                    className={
                      postionTopSelector === "Invoices"
                        ? "selected_head_item"
                        : "mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Invoices");
                    }}
                  >
                    Invoices
                  </div>
                  <div
                    className={
                      postionTopSelector === "Transactions"
                        ? "selected_head_item"
                        : "mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Transactions");
                    }}
                  >
                    Transactions
                  </div>
                  <div
                    className={
                      postionTopSelector === "Files"
                        ? "selected_head_item"
                        : "mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Files");
                    }}
                  >
                    Files
                  </div>
                  <div
                    className={
                      postionTopSelector === "Notes"
                        ? "selected_head_item"
                        : "not_selected_last mrgin-left"
                    }
                    onClick={() => {
                      updateTopSelector("Notes");
                    }}
                  >
                    Notes
                  </div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>

            <UiRender />
          </div>
        </div>
      </div>
    </div>
  );
}
