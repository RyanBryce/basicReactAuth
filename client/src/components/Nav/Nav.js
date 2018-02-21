import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Loging</Link>
      <Link to="/profiles">Profiles</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Nav;