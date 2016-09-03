import React, {Component,PropTypes} from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
} = MK;

import { connect } from 'react-redux'

import {login} from '../actions/Login'

var dispatch;

const ColoredRaisedButton = MKButton.coloredButton()
.withBackgroundColor('#A76F94')
.build();

class Login extends Component {
  constructor(props) {
    console.log(props);
    super(props)
  }

  componentWillMount() {
    dispatch = this.props.dispatch;
  }

  _login() {
    login(this.props.dispatch);
  }

  render() {
    return (
      <View>
      <ColoredRaisedButton onPress={() => {this._login()}}>
        <Text pointerEvents="none"
        style={styles.buttonText}>Become uMaster</Text>
        </ColoredRaisedButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    backgroundColor: '#4A8E4E',
    borderColor: '#A76F94',
    borderWidth: 30,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 25,
    padding: 10,
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
