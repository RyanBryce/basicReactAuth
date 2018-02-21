import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from "./components/Nav";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    user: {}
  }

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checkloging state")
      console.log(res)
      this.setState({ user: res.data});
      console.log(this.state)
    })
  }
  
  componentWillMount() {
    this.checkLogin()
    console.log(this.state)
  }

  userDidLogin = (userData) => {
    console.log(userData)
    axios.post("/api/login", userData).then((res) => {
      console.log(res)
      this.checkLogin()
    })
  }
  userLogOut = () => {
    axios.get("/api/logout").then((res) => {
      console.log(res)
      this.setState({ user: res.data });
    })
  }
  
  render() {
    return (
       <Router>
        <div>
          <Nav userinfo={this.state.user}/>
          <Switch>  
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" render={() => (
               <Login handleLogin={this.userDidLogin} /> 
              )} />
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
              <Route exact path="/profiles" render={() => {
                console.log(this.state.user.LoggedIn, "this is in path for /profiles")
                return this.state.user.loggedIn ? (
                  <Profile /> 
                ) : (
                    <Redirect to="/login"/>
                  )
              }} />
          </Switch>
        </div>
       </Router>
    );
  }
}

export default App;
