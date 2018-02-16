import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Loging</Link>
    </div>
  );
};

export default Nav;