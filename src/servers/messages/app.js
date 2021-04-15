const io = require('socket.io')(3000, { cors : {origin : "*" } });
const { checkName } = require('../../functions/functions')

const users = {};

io.on('connection', socket => {
  socket.on('new-user', name => {
    name = checkName(name);
    users[socket.id] = name;
    socket.broadcast.emit('user-connected', name)
  })

  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', {
      message : message, name : users[socket.id]
    })
  });

  socket.on('disconnect', name => {
    name = checkName(name);
    socket.broadcast.emit('user-disconnected', users[socket.id]);
    delete users[socket.id];
    users[socket.id] = name;
  })
});

module.exports.io = io;