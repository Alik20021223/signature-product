import TelegramBot from 'node-telegram-bot-api'

// Замените значение ниже на токен, который вы получили от @BotFather
const token = '7750952019:AAH5VhoGT7Y-9FaNzi_7NMGIqUy2Hn13srE';

// Создайте бота, который использует 'polling' для получения новых обновлений
const bot = new TelegramBot(token, { polling: true });

// Настройки кнопки для запуска приложения
const startOptions = {
    reply_markup: {
        inline_keyboard: [
            [{ text: 'Нажмите для запуска приложения', web_app: {url: 'https://ya.ru/'} }]
        ]
    }
};

// Устанавливаем команды для бота
bot.setMyCommands([
    { command: 'start', description: 'Начальное приветствие' },
    { command: 'start_app', description: 'Запуск приложения' },
]);


// Обработка сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    switch (text) {
        case '/start':
            bot.sendMessage(chatId, 'Добро пожаловать в тестовое приложение Alishers-tma');
            break;

        case '/start_app':
            bot.sendMessage(chatId, 'Нажмите кнопку для запуска', startOptions);
            break;

        default:
            bot.sendMessage(chatId, 'Команда не распознана. Попробуйте еще раз.');
    }
});
