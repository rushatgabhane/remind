module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: false,
    execute(message, args, pgClient){
        return message.channel.send('pong 🏓');
    }
};