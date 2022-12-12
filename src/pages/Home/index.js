import React,  { Component } from "react"
import { AddTransaksi, Header } from "../../component"
import {Form, Button} from "react-bootstrap";
import './home.scss'


export default class Home extends Component{
    render(){
        return(
            <div className = "home-page">
                <div className = "header">
                    <Header/>
                </div>
                <div className = "content-page">
                    <h1>FORM</h1>
                    <div className = "container-page">
                        <AddTransaksi/>
                    </div>
                </div>
            </div>
        )
    }
}