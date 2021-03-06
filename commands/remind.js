const helper = require('../helper.js');
const help = require('./help.js');
const CronJobManager = require('cron-job-manager');
var cronJobManager = new CronJobManager();
let tasks =  {};

module.exports = {
    name: 'remind',
    description: 'Remind to game.',
    usage: 'hours minutes [timezone] | now | stop | list',
    aliases: ['val', 'play'],
    args: true,
    execute(message, args){
        let data = '';
        users = ['726865904595632179', '260390293881356294', '361140440361205772', '617322295685283875'];
        
        if(args.length == 0) return help.execute(message, [this.name]);

        if(args[0].toLowerCase() == 'now'){
            return helper.remind(message, users, data);
        }
        else if(args[0].toLowerCase() == 'list'){
            return message.channel.send(cronJobManager.listCrons());
        }
        else if(args[0].toLowerCase() == 'clear' || args[0].toLowerCase() == 'stop'){
            cronJobManager.stopAll();
            return message.reply('i feel useless now :pensive:\nwhat is my purpose?');
        }
        else if(args.length >= 2 && helper.isValidHourOrMinute(args[0]) && helper.isValidHourOrMinute(args[1])){
            let minutes = args[1], hours = args[0];
            if(args.length == 3){
                const timeZone = args[2].toLowerCase();
                const time = helper.calcTime(timeZone, minutes, hours);
                if(time != undefined){
                    hours = time.getHours();
                    minutes = time.getMinutes();
                }
            }
            console.log(hours, minutes);
            const uniqueNum = helper.getCantorPair(minutes, hours);
            cronJobManager.add(`${uniqueNum + message.channel.id}`, 
            `${minutes} ${hours} * * *`, () => {
                helper.remind(message, users, data)
            }, {start: true});
            return message.react('👍');
        }
        else {
            return help.execute(message, [this.name]);
        }
    }
};


  
