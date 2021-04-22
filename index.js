const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const token = precess.env.tokens;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);