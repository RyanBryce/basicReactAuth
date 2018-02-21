import React, { Component } from 'react';
import Input from '../../components/Input';

class Login extends Component {
    state = {
      password: "",
      username: ""
    }
    
    handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
    }


  render() {
    return (
      <div>
        <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        <br />
        <Input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={() => this.props.handleLogin(this.state)}>Login</button>
      </div>
    );
  }
}

export default Login;