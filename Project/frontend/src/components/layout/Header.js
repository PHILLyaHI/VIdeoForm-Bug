import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <button onClick={this.props.logout}>Logout</button>
    )

    const guestLinks = (
      <div class="auth">
        <Link to="/login" className="nav-link">Login</Link><br/>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    )

    return (
      <div className='ui inverted menu' style={{ borderRadius: '0' }}>
        <a className='header item'>VideoCRUD</a>
        <a className='item'>Home</a>
        <div className="navbar">
        </div>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout }) (Header);