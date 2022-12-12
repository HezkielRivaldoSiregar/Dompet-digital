import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from 'react'
import {Home, Dashboard} from '../../pages'
import { AddTransaksi } from "../../component";

export class Router extends Component{
    DefaultContainer = () => (
        <>
            <div>
                <Route exact strict path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route>    
                <Route path="/dashboard">
                    <Dashboard
                        onSubMenu={(value) => this.handleSubMenu(value)}
                    />
                </Route> 
            </div>
        </>
    )

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route component={this.DefaultContainer} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router
