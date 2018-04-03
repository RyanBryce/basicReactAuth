import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../../components/Input';

class Signup extends Component {
  state = {
    password: '',
    username: '',
    name: '',
    profilePic: '',
    email: '',
    redirect: false
  }


  handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    if(this.state.redirect){
      return <Redirect to={`/user/${this.props.userInfo.username}`} />
    }
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
        
        <button onClick={() => this.props.handleSignup({
          password: this.state.password,
          username: this.state.username,
          name: this.state.name,
          profilePic: this.state.profilePic,
          email: this.state.email
        }, () => {
        this.setState({redirect: true});
        })}>Login</button>
      </div>
    );
  }
}

export default Signup;