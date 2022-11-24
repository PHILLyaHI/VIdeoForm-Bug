import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './videos/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './layout/Header';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./users/Login";
import Register from "./users/Register";
import { loadUser } from '../actions/auth';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
        <Provider store={store}>
          <Router>
          <Header />
          <hr/>
            <Switch>
            <React.StrictMode>
              <Route excat path="/" component={Dashboard} />
              <Route excat path="/login" component={Login} />
              <Route excat path="/register" component={Register} />
              </React.StrictMode>
            </Switch>
          </Router>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));