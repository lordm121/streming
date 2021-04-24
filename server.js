const Discord = require('discord.js');
const client = new Discord.Client();
////////

client.on('ready', () => {
    client.user.setActivity(`Shtak Lera Bnusa`,{ type: 'STREAMING' });
})

//////
client.login("token");
