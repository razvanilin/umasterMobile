import React, {Component,PropTypes} from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

import {login} from '../actions/Login'

var dispatch;

class Login extends Component {
  constructor(props) {
    console.log(props);
    super(props)
  }

  componentWillMount() {
    dispatch = this.props.dispatch;
  }

  _login() {
    login(dispatch);
  }

  render() {
    return (
      <TouchableHighlight style={styles.button}
        underlayColor='#99d9f4'
        onPress={this._login}>
        <Text style={styles.buttonText}>Become uMaster</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
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

Login.propTypes = {
  user: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)
