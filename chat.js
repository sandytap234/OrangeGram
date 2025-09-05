// Базовый функционал чата
class Chat {
    constructor() {
        this.messages = [];
        this.init();
    }

    init() {
        console.log('Chat initialized on', window.location.hostname);
        this.loadMessages();
    }

    addMessage(text) {
        const message = {
            id: Date.now(),
            text: text,
            time: new Date().toLocaleTimeString(),
            user: 'User' + Math.floor(Math.random() * 1000)
        };

        this.messages.push(message);
        this.displayMessage(message);
    }

    displayMessage(message) {
        const messagesDiv = document.getElementById('messages');
        const messageEl = document.createElement('div');
        messageEl.innerHTML = `<strong>${message.user}:</strong> ${message.text} <em>(${message.time})</em>`;
        messagesDiv.appendChild(messageEl);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    loadMessages() {
        // Заглушка - потом заменим на реальные сообщения
        this.addMessage('Добро пожаловать в OrangeGram Chat!');
        this.addMessage('Чат находится в разработке...');
    }
}

// Инициализация чата
const chat = new Chat();

function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();

    if (text) {
        chat.addMessage(text);
        input.value = '';
    }
}