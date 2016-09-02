import React, {Component, PropTypes} from 'react'
import {
  StyleSheet,
  Navigator,
  Text,
  Image,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';


import { connect } from 'react-redux'

import ActivityCards from '../containers/ActivityCards'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {user} = this.props;

    return (
      <ScrollView style={styles.container}>
      <ActivityCards />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A8E4E',
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
  user: PropTypes.object.isRequired,
  token: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    token: state.token,
    activities: state.activities
  }
}

export default connect(mapStateToProps)(Dashboard)
// export default LoginPage
