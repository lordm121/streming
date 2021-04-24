const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://name.glitch.me/`);
}, 280000);

////////
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('error', console.error);

client.on('ready', () => {
    client.user.setActivity(`Shtak Lera Bnusa`,{ type: 'STREAMING' });
})

//////
client.login("token");
