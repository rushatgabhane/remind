const {prefix, meaningOfLife} = require('./config.json');
const env = require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

client.on('ready', () => {
    console.log('hello');
});

client.on('message', message => {
    // if(message.content.startsWith(`${prefix}setName`)){
        
    // }
    if (message.content === `${prefix}ping`) {
        message.reply('pong');
        message.channel.send('pong');
    }
});

client.login(token);