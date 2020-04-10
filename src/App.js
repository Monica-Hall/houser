import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'; 
import {HashRouter as Router} from "react-router-dom"
import routes from './routes'; 


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="App">
            <Header/> 
            {/* <div>
              <Link to="/" >NAME/Link>
            </div> */}
          </nav>
            {routes}
        </div>
      </Router>
    );
  }
}