const {prefix, meaningOfLife} = require('./config.json');
const env = require('dotenv').config();
cosnt fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) return;
    
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
    
});

client.login(token);