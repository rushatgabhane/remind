module.exports = {
    playMessages : ['aaj koi khelega?', 'val val val', 'val?', 'You\'re invited to play!', 'let\'s play?.', 'hey there sexy', 'game on!', 'aao, biggy ki rating decrease karte hai.', 'wanna hear dxts cry about shots not being registered?', 'this bot is an example of creating solutions to non existent problems', 'pew pew pew :gun:', 'we are fighters, we are valorant.'],
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
        cet : 2,
        utc : 0 
    },
    calcTime(timeZone, minutes, hours){
        let date = new Date(2020, 1, 5, hours, minutes, 0, 0);
        let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        let nd = new Date(utc - (3600000 * this.timeZoneOffset[timeZone]));
        return nd;
    },
    // uniquely encodes two natural numbers into a single natural number.
    getCantorPair(num1, num2){
        return (num1 + num2) * (num1 + num2 + 1) / 2 + num2;
    }
};
