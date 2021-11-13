import React, {Component} from "react";
import HomePage from "./Components/HomePage/HomePage";
import Invoicing from "./Components/ServicesWeOffer/Invoicing/Invoicing";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import Layout from "./HOC/Layout/Layout";
import Pricing from "./Components/Pricing/Pricing";
import Reviews from "./Components/Reviews/Reviews";
import AboutUs from "./Components/AboutUs/AboutUs";
import Proposals from "./Components/ServicesWeOffer/Proposals/Proposals";
import Contracts from "./Components/ServicesWeOffer/Contracts/Contracts";
import ExpenseTracking from "./Components/ServicesWeOffer/ExpenseTracking/ExpenseTracking";
import TimeTracking from "./Components/ServicesWeOffer/TimeTracking/TimeTracking";
import TaskManager from "./Components/ServicesWeOffer/TaskManager/TaskManager";
import Payments from "./Components/ServicesWeOffer/Payments/Payments";
import ReccuringPayments from "./Components/ServicesWeOffer/ReccuringPayments/ReccuringPayments";
import Reports from "./Components/ServicesWeOffer/Reports/Reports";
import Dashboard from "./Components/MainDashboard/Dashboard/dashboard";
import Clients from "./Components/MainDashboard/Clients/Clients";
import Projects from "./Components/MainDashboard/Projects/Projects";
import ContractsSetup from "./Components/MainDashboard/Contracts/ContractsSetup/ContractsSetup";
import ScrollTop from "./HOC/ScrollTop/ScrollTop";
import ContractsReview from "./Components/MainDashboard/Contracts/ContractsReview/ContractsReview";
import ContractsSend from "./Components/MainDashboard/Contracts/ConstractsSend/ContractsSend";
import InvoiceSetup from "./Components/MainDashboard/Invoice/InvoiceSetup/InvoiceSetup";
import InvoiceReview from "./Components/MainDashboard/Invoice/InvoiceReview/InvoiceReview";
import InvoiceSend from "./Components/MainDashboard/Invoice/InvoiceSend/InvoiceSend";
import InvoiceNew from "./Components/MainDashboard/Invoice/InvoiceNew/InvoiceNew";
import Statements from "./Components/MainDashboard/Statements/Statements";
// new dashboard import
import DashboardDb from "./Components/NewDashboard/dashboard/dashboard";
import ClientsDb from "./Components/NewDashboard/clients/clients";
import EditClient from "./Components/NewDashboard/clients/editClient/editClient";

import ProjectsDb from "./Components/NewDashboard/projects/projects";
import EditProject from "./Components/NewDashboard/projects/editProject/editProject";

import Proposal from "./Components/NewDashboard/proposal/proposal";
import {MBDProvider} from "./Components/NewDashboard/MDBContext/MBDContext";
// import Transcation from "./Components/NewDashboard/Transaction/Transcation";

import Transaction from "./Components/NewDashboard/Transaction/Transaction";
import TimeTrackingTimer from "./Components/NewDashboard/TimeTracking/TimeTrackingTimer";
import Setting from "./Components/NewDashboard/Settings/Setting";

import ContractsDB from "./Components/NewDashboard/contracts/ContractDB";
import LaunchDB from "./Components/NewDashboard/DB/LaunchDB";
import Subscriptions from "./Components/NewDashboard/subscriptions/Subscriptions";
import Statement from "./Components/NewDashboard/statement/Statement";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Layout>
              <ScrollTop />

              <Route path='/' exact component={LaunchDB} />
              <Route path='/app-co/' exact component={HomePage} />
              <Route path='/app-co/services/invoicing' component={Invoicing} />
              <Route path='/app-co/services/proposals' component={Proposals} />
              <Route path='/app-co/services/contract' component={Contracts} />
              <Route path='/app-co/' exact component={HomePage} />
              <Route path='/app-co/services/invoicing' component={Invoicing} />
              <Route path='/app-co/services/proposals' component={Proposals} />
              <Route path='/app-co/services/contract' component={Contracts} />
              <Route
                path='/app-co/services/expense-tracking'
                component={ExpenseTracking}
              />
              <Route
                path='/app-co/services/time-tracking'
                component={TimeTracking}
              />
              <Route
                path='/app-co/services/task-management'
                component={TaskManager}
              />
              <Route
                path='/app-co/services/reccuring-payments'
                component={ReccuringPayments}
              />
              <Route path='/app-co/services/payments' component={Payments} />
              <Route path='/app-co/services/reports' component={Reports} />
              <Route path='/app-co/pricing' component={Pricing} />
              <Route path='/app-co/reviews' component={Reviews} />
              <Route path='/app-co/aboutUs' component={AboutUs} />
              <Route path='/main/dashboard' component={Dashboard} />
              <Route path='/main/clients' component={Clients} />
              <Route path='/main/projects' component={Projects} />
              <Route path='/main/contracts/setup' component={ContractsSetup} />
              <Route
                path='/main/contracts/review'
                component={ContractsReview}
              />
              <Route path='/main/contracts/send' component={ContractsSend} />
              <Route path='/main/invoices/setup' component={InvoiceSetup} />
              <Route path='/main/invoices/new' component={InvoiceNew} />
              <Route path='/main/invoices/review' component={InvoiceReview} />
              <Route path='/main/invoices/send' component={InvoiceSend} />
              <Route path='/main/statements' component={Statements} />

              {/* new dashboard */}
              <MBDProvider>
                <Route path='/db/home' exact component={DashboardDb} />
                <Route path='/db/clients' exact component={ClientsDb} />
                <Route path='/db/clients/editclient' component={EditClient} />
                <Route path='/db/projects' exact component={ProjectsDb} />
                <Route
                  path='/db/projects/editproject'
                  component={EditProject}
                />
                {/* <Route path="/db/transaction" exact component={Transcation} /> */}

                <Route path='/db/transaction' exact component={Transaction} />
                <Route
                  path='/db/timetracking'
                  exact
                  component={TimeTrackingTimer}
                />
                <Route path='/db/setting' exact component={Setting} />

                <Route path='/db/proposal' exact component={Proposal} />
                <Route path='/db/contract' exact component={ContractsDB} />
                <Route path='/db/proposal' exact component={Proposal} />
                <Route
                  path='/db/subscription'
                  exact
                  component={Subscriptions}
                />
                <Route path='/db/statements' exact component={Statement} />
              </MBDProvider>
            </Layout>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
