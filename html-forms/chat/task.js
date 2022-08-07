const chatWidget = document.querySelector('.chat-widget');
const openChatWidget = document.querySelector('.chat-widget__side-text');
const closeChatWidget = document.querySelector('.chat-widget__messages-container');
const messageInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

openChatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));
closeChatWidget.addEventListener('click', () => chatWidget.classList.remove('chat-widget_active'));
messageInput.addEventListener('keyup', onKeyUp);

function onKeyUp(e) {
    if(e.key !== 'Enter' || (e.key === 'Enter' && messageInput.value === '')) return;
    sendMessageFromClient();
    sendMessageFromBot();
}

function sendMessageFromClient() {
	if(messageInput.value) {
		const msgTemplate = messageTemplate(messageInput.value, 'message message_client');
		messages.innerHTML += msgTemplate;
		messageInput.value = '';
	}
}

function sendMessageFromBot() {
	const botMessage = generateBotMessage();
    const msgTemplate = messageTemplate(botMessage);
    setTimeout(() => {
        messages.innerHTML += msgTemplate;
    }, 1000);
}

function messageTemplate(botMessage, type = 'message') {
    return `
        <div class="${type}">
            <div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
            <div class="message__text">
                ${botMessage}
            </div>
        </div>
    `
}

function generateBotMessage() {
    const botMessages = [
        'Удача – штука капризная, не стоит ее искушать.',
        'Без голоса ревет, Без крыльев летит, Без зубов грызет, Без языка говорит.',
		'Ты еще скажи, что всем своим богатством обязан одной удаче, опекавшей тебя всю дорогу!',
        'Дорога – это надо знать — Всегда на край земли!',
        'Ведь путь всегда таков — Коль нету облаков!',
        'Ноги, танцуйте, не стойте на месте!',
        'Дикий Край оставался все таким же диким',
        'Но мне уже все равно, я покидаю его таким, каков он есть.',
        'Прощай!',
        'По-твоему, на закате у меня на уме одно, а на восходе – другое?',
        'Он ничего другого не заслуживает',
        'Не знаю, мудро ли ты решил, но сделаю, что смогу.',
        'Следующий шаг был величайшим подвигом в его жизни.',
        'В конце концов терпение истощилось.'
        ];
        const botMessageIndex = Math.floor(Math.random() * botMessages.length);
        return botMessages[botMessageIndex]
}