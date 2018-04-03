import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Input from '../../components/Input';

class Login extends Component {
    state = {
      password: "",
      username: "",
      redirect: false
    }
    
    handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
    }
    componentDidMount (){
      console.log(this.props);
    }


  render() {
    if (this.state.redirect) {
      return <Redirect to={`/user/${this.props.userInfo.username}`} />;
    }

    return (
      <div>
        <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        <br />
        <Input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={() => {
          this.props.handleLogin(this.state, () => {
            this.setState({ redirect: true });
          })
          }}>Login</button>
      </div>
    );
  }
}

export default Login;