const fetch = require("node-fetch");
const url = "http://localhost:8000/messages";

var body = {
  message : "h", 
  time : actualTime(),
  username : "ad"
};

function readMessages(socket) {
  fetch(url)
    .then(messages => messages.json())
    .then(messages => socket.emit('messages', messages))
    .catch(error => console.log(error.message))
};

function addMessage(socket, users, message) {
  body.username = users[socket.id];
  body.message = message;
  fetch("http://localhost:8000/messages", {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  })

  .then(res => res.json())
  .catch(error => console.log(error.message))
};

function actualTime() {
  const date = new Date();
  return date.getHours() + ':' + date.getMinutes();
};

module.exports.readMessages = readMessages;
module.exports.addMessage = addMessage;