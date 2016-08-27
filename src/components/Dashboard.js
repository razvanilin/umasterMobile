import React, {Component, PropTypes} from 'react'
import {
  StyleSheet,
  Navigator,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux'


class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {user} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DashBoard</Text>
        <Image source={require('../../res/logo-color.png')} style={styles.image}/>
        {user && user.email && <Text>Welcome, {user.email}</Text>}
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
  }
});

Dashboard.propTypes = {
  user: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard)
// export default LoginPage
