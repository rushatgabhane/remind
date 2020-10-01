module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: false
    execute(message, args){
        f(5, message);
        return message.channel.send('ping 🏓');
    }
};
f(num, message){
    while(num--){
        message.author.reply('pong');
    }
}
