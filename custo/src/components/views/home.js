import React, { Component } from 'react';

import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import womanImg from '../img/womanImg.png';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';


export default class Home extends Component {
    render(){
        return(
        <div className="conatiner text-center">
            <div className="row hero ">
                <div className="col-sm-12 ">
                    <h2>Keep track of your <b>debtors</b></h2>
                    <p className="my-2">Custo is an on-demand, scalable ledger solution for small and<br/> 
                        medium sized businesses globally.</p>
                    <button className="btn btn-outline-primary px-5 py-2 my-5">Create a free account</button>
                </div>
            </div>
            <div className="row offer">
                <div className="col-sm-12 my-5">
                    <h3>Here's is everything Custo<br/> offers just for you!</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <h4>Invoice <br/>reminders</h4>
                    <p>This solution helps<br/> business owners send<br/> overdue invoice reminders<br/> to customers</p>
                    <img src={img1} alt="" />
                </div>
                <div className="col-sm-4">
                    <h4>Debt <br/>Collection</h4>
                    <p>It makes it easier to<br/> keep track and manage<br/> debt collection</p>
                    <img src={img2} alt=""/>
                </div>
                <div className="col-sm-4">
                    <h4>Sales <br/>Messaging</h4>
                    <p>Provides a way for business<br/> owners to push unique sales<br/> messaging directly to their<br/> customers.</p>
                    <img src={img3} alt=""/>
                </div>
            </div>
            <div className="row trust py-5">
                <div className="col-sm-6">
                    <div className="rect mx-5"></div>
                </div>
                <div className="col-sm-6 my-5">
                   <h5 className="benefits text-justify py-2"><small className="small mx-5">01</small>Trustworthy</h5>
                    <h5 className="benefits text-justify   py-2"><small className="small mx-5">02</small>Easy to use</h5> 
                    <h5 className="benefits text-justify  py-2"><small className="small mx-5">03</small>Fast</h5>
                </div>
            </div>
            <div className="row impact py-5">
                <div className="col-sm-6 px-5 test py-5 text-justify ">
                    <h5 className="lives">See how Custo <br/>is impacting lives</h5>
                    <p>We have reached a wide number of small buisness<br/> 
                        owners in NIgeria and  our goal is to reach small <br/>
                        buisness owners all over Africa and keep impacting <br/>
                        on their lives.</p>
                </div>
                <div className="col-sm-6">
                    <img src={ womanImg } alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row download py-5">
                <div className="col-sm-12">
                    <h5 className="lives">Download the app <br/>and get started</h5>
                    <div className="row py-3">
                        <div className="col-sm-12">
                        <button className="btn btn-outline-secondary m-2  px-4 py-2"><img src={ logo1 } className="img-fluid mx-3" alt="" />Get it on <span className="store">Play Store</span></button>
                        <button className="btn btn-outline-secondary m-2 px-3 py-2"><img src={ logo2 } className="img-fluid mx-3"  alt="" />Download on the <span className="store">Apple Store</span></button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}