let socket;
let username;

function login() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('chat-window').style.display = 'block';

        // Подключись к серверу
        socket = io('https://api.orangegram.dpdns.org');

        // Слушай сообщения
        socket.on('message-history', (messages) => {
            messages.forEach(msg => addMessage(msg));
        });

        socket.on('new-message', (message) => {
            addMessage(message);
        });
    }
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const text = input.value.trim();

    if (text && socket) {
        socket.emit('send-message', {
            text: text,
            user: username
        });
        input.value = '';
    }
}

function addMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const messageEl = document.createElement('div');
    messageEl.innerHTML = `<strong>${message.user}:</strong> ${message.text} <em>(${message.time})</em>`;
    messagesDiv.appendChild(messageEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}