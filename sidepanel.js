
const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');

    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addMessage(messageInput.value, 'user');
        messageInput.value = '';
    });

    function addMessage(text, sender) {
        const message = document.createElement('div');
        message.classList.add('message');
        const messageContent = document.createElement('div');
        messageContent.classList.add(sender);
        messageContent.textContent = text;
        message.appendChild(messageContent);
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
        console.log(text , message);
    }

    addMessage('Hello! I am an AI chatbot. How can I help you today?', 'bot');