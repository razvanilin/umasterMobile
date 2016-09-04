var SocketIO = require('react-native-socketio');

var socket = new SocketIO('http://192.168.0.5:3031', {query: "email=razvanilin@gmail.com&type=web"});

export default socket;
