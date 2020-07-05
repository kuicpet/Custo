import React, { Component } from 'react';

import twitterImg from '../img/twitter.png';
import facebookImg from '../img/facebook.png';
import instagramImg from '../img/instagram.png';


export default class Footer extends Component {
    render(){
        return(
            <div className="row footer py-5">
                <div className="col-sm-6 p-5">
                    <h4>Custo</h4>
                    <p>custo.com</p>
                </div>
                <div className="col-sm-6 p-5">
                    <ul class="nav">
                        <li className="nav-item"><a className="nav-link px-4" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link px-4" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link px-4" href="/faq">FAQ</a></li>
                        <li className="nav-item"><a className="nav-link px-4" href="/contact">Contact</a></li>
                    </ul>
                    <div className="row px-5 py-3">
                        <div className="col-sm-12">
                        <ul class="nav">
                        <li className="nav-item"><a className="nav-link px-4" href="#"><img src={ twitterImg } className="img-fluid" alt="twitter"/></a></li>
                        <li className="nav-item"><a className="nav-link px-4" href="#"><img src={ facebookImg } className="img-fluid" alt="facebook"/></a></li>
                        <li className="nav-item"><a className="nav-link px-4" href="#"><img src={ instagramImg } className="img-fluid" alt="instagram"/></a></li>
                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}