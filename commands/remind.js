module.exports = {
    name: 'remind',
    description: 'Remind to game every interval',
    args: false,
    execute(message, args){
        return message.channel.send('pong 🏓');
    }
};