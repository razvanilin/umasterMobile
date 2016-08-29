import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Modal, Reducer } from 'react-native-router-flux'

import {
  Navigator,
  PropTypes,
  View
} from 'react-native';

import LoginPage from "../components/LoginPage"
import Dashboard from "../components/Dashboard"

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="modal" component={Modal}>
          <Scene key="root" hideNavBar={true}>
            <Scene key="loginPage" component={LoginPage} title="Login" initial={true} />
            <Scene key="dashboard" component={Dashboard} title="Dashboard" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default connect()(App)
