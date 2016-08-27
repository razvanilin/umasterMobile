import { Actions } from 'react-native-router-flux';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: 'GmY1xY6QGIeeqJC9Ivi8s5LXII5fhan6', domain: 'razvanilin.eu.auth0.com'});
// export function login(props) {
//   var dispatch = props.dispatch;
//
//   lock.show({}, (err, profile, token) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     // Authentication worked!
//     return dispatch({
//       type: "GET_USER",
//       response: profile
//     });
//   });
// }

export function login(dispatch) {
  lock.show({}, (err, profile, token) => {
    if (err) {
      console.log(err);
      return;
    }
    // Authentication worked!
    dispatch({
      type: "GET_USER",
      response: profile
    });

    Actions.dashboard({});

  });
}
