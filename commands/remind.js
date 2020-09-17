const cron = require('node-cron');
const helper = require('../helper.js');

module.exports = {
    name: 'remind',
    description: 'Remind to game every interval',
    usage: '[hours] [minutes] OR now',
    args: true,
    execute(message, args){
        var data = "";
        users = ["726865904595632179", "260390293881356294", "361140440361205772", "617322295685283875"];
    
        // debug
        if(args[0] != null){
            console.log(args[0]);
        }

        if(args[0] == "now"){
            helper.remind(message, users, data);
        }
        else if(helper.isValidHourOrMinute(args[0]) && helper.isValidHourOrMinute(args[1])){
            var minute = args[1], hour = args[0];
            console.log(minute, hour);
            cron.schedule(`${minute} ${hour} * * *`, () => {
                helper.remind(message, users, data);
            });
            message.channel.send(`you'll now be forced to game everyday.`);
        }
    }
};


  
