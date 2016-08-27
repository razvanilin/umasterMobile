var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: 'GmY1xY6QGIeeqJC9Ivi8s5LXII5fhan6', domain: 'razvanilin.eu.auth0.com'});

export function login() {
  lock.show({}, (err, profile, token) => {
    if (err) {
      console.log(err);
      return;
    }
    // Authentication worked!
    console.log('Logged in with Auth0!');
  });
}
