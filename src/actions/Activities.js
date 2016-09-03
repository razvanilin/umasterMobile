import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export function getActivities(props) {

  var authorization = props.token.type + " " + props.token.idToken;
  console.log(authorization);

  axios({
    method: 'get',
    url: 'http://192.168.0.5:3031/script?user=' + props.user.email,
    headers: {
      "Authorization": authorization
    }
  })
  .then(response => {
    console.log("Hello");
    props.dispatch({
      type: "GET_ACTIVITIES",
      response: response.data
    });
  })
  .catch(error => {
    console.log(error);
  });
}
