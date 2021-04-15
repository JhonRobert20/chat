const socket = io('http://localhost:3000');

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const name = prompt('What is your name?');
appendMessage('Joined');
socket.emit('new-user', name);

userConnected = userAction("connected");
userConnected = userAction("disconnected");

socket.on('chat-message', data => {
  if (data.message.length === 0) return;
  appendMessage(`${data.name} : ${data.message}`, false)
});

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value;
  if(message.length === 0) return;
  appendMessage(message)
  socket.emit('send-chat-message', message);
  messageInput.value = '';
});