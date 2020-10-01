module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: false,
    aliases : ['pingg', 'test']
    execute(message, args){
        message.channel.send('ping 🏓');
        message.channel.send('pong 🏓');
        message.channel.send('ping 🏓');
        message.channel.send('pong 🏓');
    }
};
