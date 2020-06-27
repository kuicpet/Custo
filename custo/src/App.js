import React,{ Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.css';

import Header from './components/views/header';



export default class App extends Component {
  render(){
    return (
      <Router>
         <Header/>
        <Container>
            <Switch>
              <Route/>
            </Switch>
        </Container>
      </Router>
    );
  }
  }
  
