module.exports = {
    name: 'ping',
    description: 'Ping!',
    excecute(message, args){
        message.channel.send('Pong');
    }
};