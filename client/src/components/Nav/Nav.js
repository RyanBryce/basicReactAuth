import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "../../index.css";

const Nav = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to="/">Awesome React Auth</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            {props.userInfo.loggedIn && <NavLink exact className="nav-link" to={`/user/${props.userInfo.username}`}>Profile</NavLink>}
          </li>
          <li className="nav-item">
            {props.userInfo.isAdmin && <NavLink exact className="nav-link"  to="/admin">Admin</NavLink>}
          </li>
          <li className="nav-item">
            {!props.userInfo.loggedIn ? <NavLink exact className="nav-link" to="/login">Login</NavLink> : <a  className="nav-link" onClick={props.logout}> Logout</a>}
          </li>
          <li className="nav-item">
            {!props.userInfo.loggedIn && <NavLink exact className="nav-link" to="/signup">Sign Up</NavLink>}
          </li>
        </ul>
      </div>
    </nav>
    // <div classNameName="navColor">
    //   <Link to="/">Home</Link>
    //   <Link to="user/profile">Profile</Link>
    //   {!props.userInfo.loggedIn ? <Link to="/login">Login</Link> : <Link to="/" onClick={props.logout}> Logout</Link>}
    //   {props.userInfo.isAdmin && <Link to="/admin">Admin</Link> }
    // </div>
  );
};

export default Nav;