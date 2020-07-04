import React,{ Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.css';

import Header from './components/views/header';
import Home from './components/views/home';
import About from './components/views/about';
import Faq from './components/views/faq';
import Contact from './components/views/contact';




export default class App extends Component {
  render(){
    return (
      <Router>
        <Header/>
          <div className="container-fluid">
          <Switch>
              <Route path="/home" component={ Home }/>
              <Route path="/about" component={ About }/>
              <Route path="/faq" component={ Faq }/>
              <Route path="/contact" component={ Contact }/>
            </Switch>
          </div>
           
        
      </Router>
    );
  }
  }
  

