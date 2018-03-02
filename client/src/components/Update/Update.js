import React, { Component } from 'react';
import Input from '../../components/Input';

class Signup extends Component {
  state = {
    password: '',
    username: '',
    name: '',
    profilePic: '',
    email: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div>
        <Input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
        <br />
        <Input placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
        <br />
        <Input placeholder="Profile Pic" name="profilePic" value={this.state.profilePic} onChange={this.handleChange} />
        <br />
        <Input placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
        <br />
        <Input placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />

        <button onClick={() => this.props.handleSignup(this.state)}>Login</button>
      </div>
    );
  }
}

export default Signup;