import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
const auth = require('@feathersjs/authentication-client');
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// const socket = io('http://192.168.1.104:3030', {
const socket = io('https://31867f324421.ngrok.io', {
  // Change to API_BASE_URL
  transports: ['websocket'],
  forceNew: true,
});

const app = feathers();

app.configure(socketio(socket)).configure(
  auth({
    storage: AsyncStorage,
    // storageKey: 'auth',
  }),
);

// app.service('users').create({email: 'dorin', password: 'dorin'});

export {app as default};
