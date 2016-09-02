import React, {Component, PropTypes} from 'react'
import {
  StyleSheet,
  Navigator,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

const MK = require('react-native-material-kit');
const {
  getTheme,
  MKButton
} = MK;
MK.setTheme({
  primaryColor: "#A76F94",
  accentColor: "#70AA74",
});
const theme = getTheme();

const FlatButton = MKButton.coloredFlatButton()
  .withText('LAUNCH ACTIVITY')
  .build();

import { connect } from 'react-redux'

import { getActivities } from '../actions/Activities'

class ActivityCards extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getActivities(this.props);
  }

  render() {

    const {user, activities} = this.props;

    return (
      <View style={styles.container}>
        {Object.keys(activities).map(child => {
          var activity = activities[child];

          return (
            <View key={activity._id} style={[theme.cardStyle, styles.card]}>
              <Image source={{uri : null}} style={theme.cardImageStyle}/>
              <Text style={styles.welcome}>{activity.name}</Text>
              <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
                style={{
                  padding : 15,
                }}
                >
                <Text style={[theme.cardContentStyle, {padding:0}]}>
                  {activity.description}
                </Text>
              </View>
              <View style={[theme.cardActionStyle]}>
                <FlatButton></FlatButton>
              </View>
            </View>
          )
        })}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 20,
    marginTop: 56
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 15
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
  card: {
    marginBottom: 10
  }
});

ActivityCards.propTypes = {
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

export default connect(mapStateToProps)(ActivityCards)
// export default LoginPage
