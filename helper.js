module.exports = {
    playMessages : ['aaj koi khelega?', 'val val val', 'val?', 'You\'re invited to play!', 'let\'s not play today.', 'hey there sexy'],
    remind(message, users, data){
        var index = Math.floor(Math.random() * this.playMessages.length)
        for(let i = 0; i < users.length; i++){
            data += `<@${users[i]}> `;
        }
        data += this.playMessages[index];
        return message.channel.send(data);
    },
    isValidHourOrMinute(minOrHour){
        if(parseInt(minOrHour) >= 0 &&
        parseInt(minOrHour) <= 59){
            return true;
        }
        return false;
    },
    timeZoneOffset : {
        ist : 5.5,
        bst : 3,
        cet : 1,
        utc : 0 
    },
    calcTime(timeZone){
        let date = new Date();
        let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        return new Date(utc + (3600000 * this.timeZoneOffset[timeZone]));
    },
    // uniquely encodes two natural numbers into a single natural number.
    getCantorPair(num1, num2){
        return (num1 + num2) * (num1 + num2 + 1) / 2 + num2;
    }
};
