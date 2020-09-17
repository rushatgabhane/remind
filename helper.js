module.exports = {
    getNameFromId (id){
        return 'Jim';
    },
    remind(message, users, data){
        for(i=0; i<users.length; i++){
            const User = Client.fetchUser(users[i]);
            console.log(User);
            data.push(`@${User.username}${User.discriminator} `);
        }
        return message.channel.send(data);
    },
    isValidHourOrMinute(minOrHour){
        if(parseInt(minOrHour) >= 0 &&
        parseInt(minOrHour) <= 60){
            return true;
        }
        return false;
    }
}
