const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const db = require('./mongodb/db');
const Msg = require('./mongodb/model/message.js');
db.connect();

server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    const message = new Msg({isFall:true})
    console.log('message: ' + msg);
    message.save().then(() => {
      io.emit('chat message', "Người nhà của bạn đang bị ngã");
    })
  });
  socket.broadcast.emit('hi');
});

