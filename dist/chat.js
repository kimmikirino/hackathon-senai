setTimeout(sendWellcome, 500)

const e = query => document.querySelector(query)

function sendWellcome () {
    sendMessage('Olá, Mariazinha! Seja bem vinda!\nTemos a missão de proporcionar o bem estar ao próximo através de doações de alimentos próximos a validade, utilizando a plataforma para controlar a situação dos seus alimentos. Deseja saber mais?', 'bot')
}

function sendMessage (text, sender) {
    const message = document.createElement('li')
    message.classList.add('chat-message')
    message.classList.add('-' + sender)
    message.innerHTML = text.replace(/\n\r?/g, '<br>')
    const messages = e('.chat-messages')
    messages.appendChild(message)
}

e('.chat-send').addEventListener('click', () => {
    const text = e('.chat-field').value
    if (!text.trim())
        return
    e('.chat-field').value = ''
    sendMessage(text, 'user')
    roteiro[text](text)
})

const roteiro = {
    'cadastrar produto': () => window.location = 'cadastro.html',
    'produtos a vencer': () => {
        sendMessage(`
- Bicoitos Trakinas (2 unidades);
- Arroz Integral (3 unidades);
        `, 'bot')
    },
    'Olá': () => setTimeout(() => sendMessage('Olá Mariazinha', 'bot'), 600),
    'Sim': () => setTimeout(() => sendMessage('Obrigado pela parceria, a validade dos seus produtos serão lembrados e se quiser pode doá-los. Vamos cadastrar um produto? ', 'bot'), 600),
    'sim': () => setTimeout(() => window.location = 'cadastro.html', 200)
}