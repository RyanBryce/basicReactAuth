import React from 'react';
import { Link } from "react-router-dom";
import "../../index.css";

const Nav = (props) => {

  return (
    <div className="navColor">
      <Link to="/">Home</Link>
      <Link to="user/profile">Profile</Link>
      {!props.userInfo.loggedIn ? <Link to="/login">Login</Link> : <Link to="/" onClick={props.logout}> Logout</Link>}
      {props.userInfo.isAdmin && <Link to="/admin">Admin</Link> }
    </div>
  );
};

export default Nav;