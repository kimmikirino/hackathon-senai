setTimeout(sendWellcome, 500)

const e = query => document.querySelector(query)

function sendWellcome () {
    sendMessage('Olá, Mariazinha\nSeu produto Bolacha tem validade até 20/12/2017.\nVocê já consumiu o alimento?', 'bot')
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
        sendMessage(`- Bolacha Trakinas (2 unidades);
- Arroz Integral (28 unidades);
        `, 'bot')
    },
    'olá': () => setTimeout(() => sendMessage('Olá Mariazinha', 'bot'), 600),
    'sim': () => setTimeout(() => sendMessage('Ok. Seu produto foi excluído', 'bot'), 600),
    'não': () => setTimeout(() => sendMessage('Que tal doá-lo agora, assim estará colocando sorrisos em muitas pessoas :)', 'bot'), 600),
    'ok': () => setTimeout(() => sendMessage('Legal, obrigado por contribuir por mais sorrisos! :) \n O ponto de entrega mais próximo é: <a class="chat-link" href="https://goo.gl/maps/nsrzkpkNdv52">Alameda barão de limeira, 539</a>', 'bot'), 600)
}