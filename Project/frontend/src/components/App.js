import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './videos/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './layout/Header';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./users/Login";
import Register from "./users/Register";
import PrivateRoute from "./common/PrivateRoute";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Fragment>
          <Router>
            <Switch>
              <PrivateRoute excat path="/" component={Dashboard} />
              <Route excat path="/login" component={Login} />
              <Route excat path="/register" component={Register} />
            </Switch>
            <Header />
          </Router>
          </Fragment>
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));