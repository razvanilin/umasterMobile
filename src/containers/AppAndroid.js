import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Modal, Reducer } from 'react-native-router-flux'

import {
  Navigator,
  PropTypes,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Text
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

  openDrawer() {
    this.refs['DRAWER'].openDrawer()
  }

  render() {
    return (
      <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        <TouchableHighlight onPress={this.openDrawer}>
          <Text>{'Open Drawer'}</Text>
        </TouchableHighlight>
      </View>
    </DrawerLayoutAndroid>
    );
  }
}

export default connect()(App)
