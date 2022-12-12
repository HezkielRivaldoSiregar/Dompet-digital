import React, { Component } from "react";
import { Header, TransactionList } from "../../component";
import './dashboard.scss'

export default class Dashboard extends Component{
    render(){
        return(
            <div className = "dashboard-page">
                <div className = "header">
                    <Header/>
                </div>
                <div className = "content-page">
                    <h1>DASHBOARD</h1>
                    <div className = "container-page">
                        <TransactionList/>
                    </div>
                </div>
            </div>
        )
    }
}