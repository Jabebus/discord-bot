const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', (message) => {
        if(message.content == 'honk') {
            message.reply('honk');
        }
});
bot.on('message', (message) => {
        if(message.content == '!s') {
            message.reply('hey i like that song!');
        }
});
bot.on('message', (message) => {
        if(message.content == '@𝓖𝓾𝓼𝓮, Honk') {
            message.reply('@𝓖𝓾𝓼𝓮, honk');
        }
});

bot.login('');
//client secret goes here
