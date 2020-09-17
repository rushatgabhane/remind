const getNameFromId = (id) => {
    return 'Jim';
};
  
const remind = (message, users, data) => {
    for(i=0; i<users.length; i++){
        const User = Client.fetchUser(users[i]);
        console.log(User);
        data.push(`@${User.username}${User.discriminator} `);
    }
    return message.channel.send(data);
};

const isValidHourOrMinute = (minOrHour) => {
    if(parseInt(minOrHour) >= 0 &&
    parseInt(minOrHour) <= 60){
        return true;
    }
    return false;
}

  
exports.getName = this.getNameFromId;
exports.message = this.message;
exports.isValidHourOrMinute = this.isValidHourOrMinute;