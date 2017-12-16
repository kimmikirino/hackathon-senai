setTimeout(sendWellcome, 500)

const e = query => document.querySelector(query)

function sendWellcome () {
    sendMessage('Olá, Mariazinha\nO que deseja fazer?', 'bot')
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
    'cadastrar produto': () => setTimeout(window.location = 'cadastro.html', 800),
    'produtos a vencer': () => {
        setTimeout(() => { sendMessage(`- Bolacha Trakinas (2 unidades);
- Arroz Integral (3 unidades);
        `, 'bot')
    },500)},
    'olá': () => setTimeout(() => sendMessage('Olá Mariazinha', 'bot'), 600),
    'saldo': () => setTimeout(() => sendMessage('Mariazinha, muito obrigado, vc tem 100 sorrisos de saldo', 'bot'), 600),
}