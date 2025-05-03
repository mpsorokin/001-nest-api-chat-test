// test-socket.js
const io = require('socket.io-client');

// socket.io-client figures out the protocol (ws/http)
// It will try ws://localhost:3070/socket.io/ by default
const socket = io('ws://localhost:3070');

socket.on('connect', () => {
  console.log('Connected to Socket.IO server!');
  socket.emit('test', { message: 'Hello from Node.js script!' });
});

socket.on('messages', (data) => {
  console.log('Received message:', data);
  // socket.disconnect(); // Optional: disconnect after receiving a message
});

socket.on('disconnect', (reason) => {
  console.log(`Disconnected: ${reason}`);
});

socket.on('connect_error', (err) => {
  console.error('Connection error:', err);
});

// Keep the script running
// setInterval(() => {}, 1000);
