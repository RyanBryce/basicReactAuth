import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from "./components/Nav";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import axios from 'axios';
import './App.css';

class App extends Component {
 state = {
    user: {
      loggedIn: false,
      isAdmin: false,
      currentUser: {
        id: null,
        name: '',
        username: '',
        email: '',
        profilePic: null
      }
    }
  }
  
  componentDidMount() {
    this.checkLogin()
    console.log(this.state)
  }

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checkloging state")
      console.log(res)
      this.setState({ user: res.data});
      console.log(this.state)
    })
  }
  
  userDidLogin = (userData) => {
    console.log(userData)
    axios.post("/api/login", userData).then((res) => {
      console.log(res)
      this.checkLogin()
    })
  }
  userDidSignup = (userData) => {
    console.log(userData)
    axios.post("/api/signUp", userData).then((res) => {
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
          <Nav userInfo={this.state.user} logout={this.userLogOut}/>
          <Switch>  
            <Route exact path="/" component={Home}/>
            <Route path="/user/:username" render={(props) => {
               return <Profile {...props} />
            }} />

            {/* 
            if you want to lock down user profile route to only show if they are logged in
            comment out the route above and uncomment the code below on lines 71
             */}
            {/* <Route path="/user/:username" render={(props) => {
              console.log(this.state.user.LoggedIn, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Profile {...props}/> 
              ) : (
                  <Redirect to="/login"/>
                )
            }} /> */}
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
            <Route exact path="/login" render={() => (
              <Login handleLogin={this.userDidLogin} />
            )} />
            <Route exact path="/signup" render={() => (
              <Signup handleSignup={this.userDidSignup} />
            )} />
            <Route exact path="/logout" render={() => (
              <button onClick={this.userLogOut}> logOut</button>
            )} />
            <Route exact path="/admin" render={(props) => {
              console.log(props, "this is match")
              console.log(this.state.user.isAdmin, "this is in path for /profiles")
              return this.state.user.loggedIn ? (
                <Admin {...props}/>
              ) : (
                  <Redirect to="/" />
                )
            }} />
          </Switch>
        </div>
       </Router>
    );
  }
}

export default App;
