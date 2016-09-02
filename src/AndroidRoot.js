import React, {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import {View} from 'react-native'

import App from './containers/AppAndroid'
import AppRouter from './router'

const store = configureStore()

class AndroidRoot extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default AndroidRoot
