import React, { Component } from 'react';

import backImg from '../img/backImg2.svg';
import groupImg from '../img/groupImg.png';



export default class About extends Component {
    render(){
        return(
        <div className=" text-center">
            <div className="row about">
                <div className="col-sm-12">
                    <h2>Helping  small business <br/> collect Money</h2>
                    <p className="my-2">we help small business collect Money and automatically send them reminders when it's time to pay.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="company mx-5 "></div>
                </div>
                <div className="col-sm-6 text-justify">
                    <h3>Our company</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit. Sit egestas enim massa <br/>
                    urna varius. Cursus etiam sem nec enim <br/>
                    et vitae.
                    </p>
                </div>
            </div>
            
            <div className="row pt-5">
                <div className="col-sm-12">
                    <h5 className="benefits">We're on a mission to help the world<br/> be a Better Place</h5>
                </div>
              
            </div>
            <div className="row">
                <div className="col-sm-12 py-5">
                    <img className="img-fluid" src={ groupImg } alt="" />
                </div>
                <img className="backImg img-fluid" src={ backImg} alt="" /> 
            </div>
        </div>
        )
    }
}