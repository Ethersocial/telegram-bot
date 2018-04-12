//copy and paste at app.js
//modify variables strMsg...s


/*
=============================================================
Telegram bot - Auto Responding Service
=============================================================
*/
//include
var TelegramBot = require('node-telegram-bot-api');

//login
var token = '[Input Your Bot Token Here]';
var bot = new TelegramBot(token, {polling: true});

//outputmsg
var strMsgstart = "<b>*Welcome!!</b>\nEtherSocial was developed to provide a reward system for online forums and blogs. At Jan. 2018, Mainnet has been launched. Miners and developers are so active now.\nDetails :  http://blog.ethersocial.org/esn-info/\n/help : How to use ESN_Info_bot";
var strMsgmining = "<b>*Mining ESN</b>\nTo mine ESN, you need to download ESN mining program.\n For detailed explanations, click on the link below.\nhttps://blog.ethersocial.org/esn-mining-guide/";
var strMsglinks = "<b>*Links</b>\nOfficial homepage\n   https://www.ethersocial.org/\nDiscord\n   https://discord.gg/epYskZd\nESN Blog\n   https://blog.ethersocial.org/\nBitcointalk ANN\n   https://bitcointalk.org/index.php?topic=3126487.0\nDdengle\n   http://ddengle.com\n   (Ddengle.com is the biggest online\nblockchain forum in Korea)";
var strMsghelp = "<b>*Bot commands</b>\n/mining : About ESN mining\n/links : ESN helpful links\n/discord : Join ESN discord channel\n/help : How to use ESN_Info_bot"; 
var strMsgdiscord = "<b>*Discord</b>\nJoin ESN discord channel!\nYou can interact with active developers interested in ESN,\nand get interesting news about ESN.\nhttp://discord.gg/JzHUJrF";

//when new user joins
bot.on('message', (msg) => {
     if (msg.new_chat_members != undefined) {bot.sendMessage(msg.chat.id, strMsgstart, {parse_mode: 'HTML'});
     }
   });

//Print
//when user inputs '/start'
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, strMsgstart, {parse_mode: 'HTML'})
    });

//when user inputs '/help'
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, strMsghelp, {parse_mode: 'HTML'});
    });

//when user inputs '/mining'
bot.onText(/\/mining/, (msg) => {
    bot.sendMessage(msg.chat.id, strMsgmining, {parse_mode: 'HTML'});
    });

//when user inputs '/links'
bot.onText(/\/links/, (msg) => {
    bot.sendMessage(msg.chat.id, strMsglinks, {parse_mode: 'HTML', disable_web_page_preview: 'true'});
    });
   
//when user inputs '/discord'
bot.onText(/\/discord/, (msg) => {
    bot.sendMessage(msg.chat.id, strMsgdiscord, {parse_mode: 'HTML', disable_web_page_preview: 'true'});
    });
