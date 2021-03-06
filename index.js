const {prefix, meaningOfLife} = require('./config.json');
const env = require('dotenv').config();
const fs = require('fs');
 
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection();
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);    
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

    if (command.args && !args.length) {
    	let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
	f(6);
        message.reply('there was an error trying to execute that command!');
    }
});
function f(num){
	for(let i=1; i<num; i++){
		console.log(i*i);
	}
}
client.login(token);
