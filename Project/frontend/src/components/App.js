// frontend/src/components/App.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './videos/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './layout/Header';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Dashboard />
            <Header />
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));