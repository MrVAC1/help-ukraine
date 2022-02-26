const TelegramBot = require('node-telegram-bot-api');

const token = '5083479641:AAFPzgVT2z1TNBDaB99sVBv5HeU0J2me500';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Получили твое сообщение! Спасибо!');
});

