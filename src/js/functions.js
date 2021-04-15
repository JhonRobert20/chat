function appendMessage(message, you = true) {
  const messageElement = document.createElement('div');

  message += " " + actualTime();
  messageElement.innerText = message;

  if (you === false) {
    messageElement.classList.add('not-you');
    
  } else {
    messageElement.classList.add('you')
  }
  messageContainer.appendChild(messageElement);
};

let userAction = function(action, you = false) {
  socket.on(`user-${action}`, name => {
    appendMessage(`${name} ${action}`, you)
  })
};

function actualTime() {
  const date = new Date();
  return date.getHours() + ':' + date.getMinutes();
};