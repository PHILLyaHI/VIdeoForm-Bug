// components/todos/Dashboard.js

import React, { Component } from 'react';
import VideoList from './VideoList';
import VideoForm from './VideoForm';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <VideoForm />
        <VideoList />
      </div>
    );
  }
}

export default Dashboard;