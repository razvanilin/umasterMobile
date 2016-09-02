import React, {Component, PropTypes} from 'react'
import {
  StyleSheet,
  Navigator,
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight,
  Linking
} from 'react-native';

import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

var listData = ["row1", "row2"]

class DrawerContent extends Component {
  constructor(props) {
    super(props)
  }

  _linkPressed(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err))
  }

  render() {

    const {user} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>uMaster</Text>

        <View>
          <Image source={{uri: user.profile.picture}} style={styles.image}/>
          <Text style={styles.instructions}>{user.profile.nickname}</Text>
        </View>

        <View style={styles.linksView}>
          <TouchableHighlight underlayColor='#99d9f4' onPress={() => {this._linkPressed("https://razvanilin.typeform.com/to/HtfKKN")}}>
            <Text style={styles.links}>Feedback</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#99d9f4' onPress={Actions.root}>
            <Text style={styles.links}>Logout</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A76F94',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    color: "white",
    top:10
  },
  linksView: {
    margin: 0,
    marginTop: 50,
    alignItems: "flex-start"
  },
  links: {
    fontSize:20,
    color:"white",
    margin:10,
    textAlign: 'left'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  image: {
    height:50,
    width:50,
    borderRadius:50,
  }
});

DrawerContent.propTypes = {
  user: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DrawerContent)
// export default LoginPage
