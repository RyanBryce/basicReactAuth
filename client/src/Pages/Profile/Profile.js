import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Update from '../../components/Update';
import axios from 'axios';

class Profile extends Component {

    state = {
      tempUser: {},
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

  checkLogin = () => {
    axios.get("/api/session").then((res) => {
      console.log(this.state, "this is checkloging state")
      console.log(res)
      this.setState({user: res.data});
      console.log(this.state)
    })
  }
    // componentWillMount() {
    //   this.props.checkLogin()
    // }
    
    componentWillMount() {
      console.log(this.props, "props from profile")
      console.log(this.state, "props from state")
      this.checkLogin()
      axios.get(`/api/profile/${this.props.match.params.username}`).then((response) => {
      console.log(response);
      this.setState({
        tempUser: response.data
      });
        console.log(this.props, "props from profile")
        console.log(this.state, "props from state")
      })
    }
    cardStyle = { width: "18rem"}
    
  render() {
    return (
      <div>
        <div className="card" style={this.cardStyle}>
          <img className="card-img-top" src={this.state.tempUser.profilePic} alt="" />
            <div className="card-body">
              <h5 className="card-title">{this.state.tempUser.username}</h5>
              <p className="card-text">Your Users Comments</p>
            {this.state.user.currentUser.username === this.state.tempUser.username &&
            <Link 
            to={`/user/${this.props.match.params.username}/update`} 
            className="btn btn-primary">Update</Link>}
            <Route path="/user/:username/update" component={Update} />
            </div>
        </div>
      </div>
    );
  }
}

export default Profile;