import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from "./components/Nav";
import Login from "./Pages/Login";
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() {
    return (
      
       <Router>
         <Switch>
          <div>
            <Nav />
            <Route exact path="/" component={Login}/>
          </div>
         </Switch>
       </Router>
    );
  }
}

export default App;
