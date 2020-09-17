const cron = require('node-cron');
const helper = require('../helper.js');
module.exports = {
    name: 'remind',
    description: 'Remind to game every interval',
    usage: '[hours] [minutes] OR now',
    args: true,
    execute(message, args){
        const data = [];
        var i;
        // "726865904595632179", "260390293881356294", "361140440361205772", 
        users = ["617322295685283875"];

        // debug
        if(args[0] != null){
            console.log(args[0]);
        }

        if(args[0] == "now"){
            helper.remind(message, users, data);
        }
        else if(helper.isValidHourOrMinute(args[0]) && isValidHourOrMinute(args[1])){
            cron.schedule(`${minute} ${hour} * * *`, () => {
                helper.remind(message, users, data);
            });
        }
        // data.push
        // message.channel.send(data, { split: true });
    }
};


  
