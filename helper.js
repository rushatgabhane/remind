
module.exports = {
    playMessages : ["aaj koi khelega", "val val val", "val?", "You're invited to play!", "let's not play today."],
    remind(message, users, data){
        var index = Math.floor(Math.random() * this.playMessages.length)
        for(let i = 0; i < users.length; i++){
            // const User = client.users.cache.get(users[i]);
            data += `<@${users[i]} >`;
        }
        data += this.playMessages[index];
        return message.channel.send(data);
    },
    isValidHourOrMinute(minOrHour){
        if(parseInt(minOrHour) >= 0 &&
        parseInt(minOrHour) <= 60){
            return true;
        }
        return false;
    }
};
