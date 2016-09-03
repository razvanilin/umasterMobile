import { Actions } from 'react-native-router-flux';
import axios from 'axios';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: 'cYRmkEJu68e2OuKKQj371CaPLR5ZYLio', domain: 'razvanilin.eu.auth0.com'});

export function login(dispatch) {
  lock.show({}, (err, profile, token) => {
    if (err) {
      console.log(err);
      return;
    }

    // dispatch the token
    dispatch({
      type: "CREATE_TOKEN",
      response: token
    });

    var authorization = token.type + " " + token.idToken;
    console.log(authorization);
    // Authentication worked!
    axios({
      method: 'post',
      url: 'http://192.168.0.5:3031/user',
      data: profile,
      headers: {
        "Authorization": authorization
      }
    })
    .then(response => {
      console.log("Hello");
      dispatch({
        type: "GET_USER",
        response: response.data.user
      });

      Actions.drawer();

    })
    .catch(error => {
      console.log(error);
    });
  });
}
