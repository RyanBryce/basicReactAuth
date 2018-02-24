import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

    state = {
      tempUser: {}
    }
    componentDidMount() {
      console.log(this.props.match.params.username)
      axios.get(`/api/profile/${this.props.match.params.username}`).then((response) => {
      console.log(response);
      this.setState({
        tempUser: response.data
      });
      })
    }
    
  render() {
    return (
      <div>
        Profile
        <h1>{this.state.tempUser.username}</h1>
      </div>
    );
  }
}

export default Profile;