# Ethersocial-bot
It is easy to use node.js Telegram Bot library.
Feel free to ask anything.

## Ethersocial Telegram bot
* Visit Ethersocial telegram chat room : https://t.me/ethersocialofficial
* [Code](https://github.com/dgson/ethersocial-bot/blob/master/examples/Ethersocial.js)


## Intro
Your telegram-bot can answer many questions
even when you are asleep.
For example your bot can answer pre-designed questions.
If you ask the bot about "What is your name?", the bot has no idea who he is. 
Only you can give him a name.





## Requirements
* Server
* Node.js module
* Bot Token : Contact [@botfather](https://telegram.me/BotFather) on Telegram




## Install
```bash
npm install --save node-telegram-bot-api
```



## Sample Usage

```js
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
```




## Documentation

* [Usage][usage]
* [Examples][examples]
* [Tutorials][tutorials]
* [Help Information][help]
* API Reference ([release][api-release] / [development][api-dev] / [experimental][api-experimental])
* [Contributing to the Project][contributing]
* [Experimental Features][experimental]



_**Note**: Development is done against the **master** branch.
Code for the latest release resides on the **release** branch
Experimental features reside on the **experimental** branch._


## Community

We thank all the developers in the Open-Source community who continuously
take their time and effort in advancing this project.


[usage]:https://github.com/yagop/node-telegram-bot-api/tree/master/doc/usage.md
[examples]:https://github.com/yagop/node-telegram-bot-api/tree/master/examples
[help]:https://github.com/yagop/node-telegram-bot-api/tree/master/doc/help.md
[tutorials]:https://github.com/yagop/node-telegram-bot-api/tree/master/doc/tutorials.md
[api-dev]:https://github.com/yagop/node-telegram-bot-api/tree/master/doc/api.md
[api-release]:https://github.com/yagop/node-telegram-bot-api/tree/release/doc/api.md
[api-experimental]:https://github.com/yagop/node-telegram-bot-api/tree/experimental/doc/api.md
[contributing]:https://github.com/yagop/node-telegram-bot-api/tree/master/CONTRIBUTING.md
[contributors]:https://github.com/yagop/node-telegram-bot-api/graphs/contributors
[experimental]:https://github.com/yagop/node-telegram-bot-api/tree/master/doc/experimental.md
[tg-channel]:https://telegram.me/node_telegram_bot_api


## Details
[Telegram Bot API](https://core.telegram.org/bots/api)
