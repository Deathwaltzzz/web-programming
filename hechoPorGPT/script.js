const chat = document.getElementById('chat');

const messages = [
    {
        sender: 'user1',
        text: '¡Hola! Me enteré que habrá un concierto de nu metal.',
    },
    {
        sender: 'user2',
        text: 'Sí, también escuché sobre eso. Estoy emocionado.',
    },
];

function addMessage(option) {
    switch (option) {
        case 1:
            messages.push({
                sender: 'user1',
                text: '¿Cuándo es el concierto?',
            });
            messages.push({
                sender: 'user2',
                text: 'El concierto es el próximo sábado.',
            });
            break;
        case 2:
            messages.push({
                sender: 'user1',
                text: '¿Dónde se lleva a cabo?',
            });
            messages.push({
                sender: 'user2',
                text: 'Se llevará a cabo en el Estadio Nacional.',
            });
            break;
        case 3:
            messages.push({
                sender: 'user1',
                text: '¿Cuál es el costo de las entradas?',
            });
            messages.push({
                sender: 'user2',
                text: 'Las entradas cuestan entre $50 y $100, dependiendo de la sección.',
            });
            break;
        default:
            break;
    }

    renderMessages();
}

function renderMessages() {
    chat.innerHTML = '';

    messages.forEach((message) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', message.sender);
        messageDiv.innerHTML = `<div class="text">${message.text}</div>`;
        chat.appendChild(messageDiv);
    });

    chat.scrollTop = chat.scrollHeight;
}

renderMessages();