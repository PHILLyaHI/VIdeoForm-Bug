// components/layout/Header.js

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className='ui inverted menu' style={{ borderRadius: '0' }}>
        <a className='header item'>VideoCRUD</a>
        <a className='item'>Home</a>
        <div className="navbar">
        <Link to="/login" className="nav-link">Login</Link><br/>
        <Link to="/register" className="nav-link">Register</Link>
        </div>
      </div>
    );
  }
}

export default Header;