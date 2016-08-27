import React, {Component} from 'react'
import {
  StyleSheet,
  Navigator,
  PropTypes,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

import login from '../actions/Login'

class App extends Component {
  constructor(props) {
    super(props)
  }

  _login {
    login();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>uMaster</Text>
        <Image source={require('../../res/logo-color.png')} style={styles.image}/>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this._login}>
          <Text style={styles.buttonText}>Become uMaster</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#70AA74',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height:200,
    width:200,
    marginBottom: 40
  },
  button: {
    height: 36,
    backgroundColor: '#A76F94',
    borderColor: '#A76F94',
    borderWidth: 30,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});

export default App
