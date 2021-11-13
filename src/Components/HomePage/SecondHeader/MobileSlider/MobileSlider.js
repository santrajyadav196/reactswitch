import React, { Component } from 'react';
import './MobileSlider.css';
import proposalImg from '../../../../Assets/Images/rectangle-6.png'; 



class MobileSlider extends Component{

    state = {
        isActiveProposal: false,
        isActiveInvoicing: false,
        isActivePayments: false,
        isActiveContracts:false,
        isActiveProposals1:false,
        isActiveProposals2:false
    }

    handleActiveClass = (event) =>{
        switch(event.target.outerText) {
            case 'Proposals':
                this.setState(prevState => ({
                isActiveProposal: !prevState.isActiveProposal}))
                break;
            case 'Invoicing':
                this.setState(prevState => ({
                isActiveInvoicing: !prevState.isActiveInvoicing}))
                break;
            case 'Payments':
                this.setState(prevState => ({
                isActivePayments: !prevState.isActivePayments}))
                break;
            case 'Contracts':
                this.setState(prevState => ({
                isActiveContracts: !prevState.isActiveContracts}))
                break;
            case 'Proposals1':
                this.setState(prevState => ({
                isActiveProposals1: !prevState.isActiveProposals1}))
                break;
            case 'Proposals2':
                this.setState(prevState => ({
                isActiveProposals2: !prevState.isActiveProposals2}))
                break;
            default:
              return 'foo';
        }
    };

    render(){
        return (
            <div className = "app-container is-mobile">
                <div className = "Features-content">
                    <section className = "Feature-slide" >
                        <div className = {this.state.isActiveProposal ? "Features-content-top is-active" : "Features-content-top"} onClick = {(e) =>this.handleActiveClass(e)}>
                            Proposals
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 9L17 1" stroke="#93A0AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className = "Feature-content-child" style = {this.state.isActiveProposal ? {display: "block"} : null}>
                            <img className = "img-mobile-view" src ={proposalImg} alt ="prop" />
                        </div>
                    </section>
                    <section className = "Feature-slide" >
                        <div className = {this.state.isActiveInvoicing ? "Features-content-top is-active" : "Features-content-top"} onClick = {(e) =>this.handleActiveClass(e)}>
                            Invoicing
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 9L17 1" stroke="#93A0AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className = "Feature-content-child" style = {this.state.isActiveInvoicing ? {display: "block"} : null}>
                            <img className = "img-mobile-view" src ={proposalImg} alt ="prop" />
                        </div>
                    </section>
                    <section className = "Feature-slide" >
                        <div className = {this.state.isActivePayments ? "Features-content-top is-active" : "Features-content-top"} onClick = {(e) =>this.handleActiveClass(e)}>
                            Payments
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 9L17 1" stroke="#93A0AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className = "Feature-content-child" style = {this.state.isActivePayments ? {display: "block"} : null}>
                            <img className = "img-mobile-view" src ={proposalImg} alt ="prop" />
                        </div>
                    </section>
                    <section className = "Feature-slide" >
                        <div className = {this.state.isActiveContracts ? "Features-content-top is-active" : "Features-content-top"} onClick = {(e) =>this.handleActiveClass(e)}>
                            Contracts
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 9L17 1" stroke="#93A0AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className = "Feature-content-child" style = {this.state.isActiveContracts ? {display: "block"} : null}>
                            <img className = "img-mobile-view" src ={proposalImg} alt ="prop" />
                        </div>
                    </section>
                    <section className = "Feature-slide" >
                        <div className = {this.state.isActiveProposals1 ? "Features-content-top is-active" : "Features-content-top"} onClick = {(e) =>this.handleActiveClass(e)}>
                            Proposals1
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 9L17 1" stroke="#93A0AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className = "Feature-content-child" style = {this.state.isActiveProposals1 ? {display: "block"} : null}>
                            <img className = "img-mobile-view" src ={proposalImg} alt ="prop" />
                        </div>
                    </section>
                    <section className = "Feature-slide" >
                        <div className = {this.state.isActiveProposals2 ? "Features-content-top is-active" : "Features-content-top"} onClick = {(e) =>this.handleActiveClass(e)}>
                            Proposals2
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 9L17 1" stroke="#93A0AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className = "Feature-content-child" style = {this.state.isActiveProposals2 ? {display: "block"} : null}>
                            <img className = "img-mobile-view" src ={proposalImg} alt ="prop" />
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default MobileSlider
