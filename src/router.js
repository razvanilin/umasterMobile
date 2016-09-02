import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Modal, Reducer } from 'react-native-router-flux'
import Drawer from './components/DrawerComponent'

import {
  Navigator,
  PropTypes,
  View,
  StyleSheet
} from 'react-native';

import LoginPage from "./components/LoginPage"
import Dashboard from "./components/Dashboard"

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
}

class AppRouter extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <Router createReducer={reducerCreate} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="root" hideNavBar={true}>
          <Scene key="loginPage" component={LoginPage} title="Login" initial={true} />
        </Scene>

        <Scene key="drawer" component={Drawer} open={false}>
          <Scene key="main" tabs={true}>
            <Scene key="dashboard" component={Dashboard} title="Dashboard" panHandlers={null}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#70AA74', // changing navbar color
  },
  navTitle: {
    color: 'white', // changing navbar title color
  },
  routerScene: {
    paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
  },
})

export default connect()(AppRouter)
