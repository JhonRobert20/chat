const socket = io('http://localhost:3000', { 'forceNew': true });

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const thisName = prompt('What is your name?');
appendMessage('Joined');
socket.emit('new-user', thisName);

userConnected = userAction("connected");
userConnected = userAction("disconnected");
socket.on('messages', data => {
  for(dataMessage of data.data) {
    var you = false;
    if( thisName === dataMessage.username) you = true;
    appendMessage(`${dataMessage.username} : ${dataMessage.message} ${dataMessage.time}`, you, true)
  }
});

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