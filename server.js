const Discord = require('discord.js');
const client = new Discord.Client();
////////
/*
client.on('ready', () => {
    client.user.setActivity(`Shtak Lera Bnusa`,{ type: 'STREAMING' });
})*/

client.on("ready", () => {
  console.log(
    `Online In  on ${client.guilds.cache.size}`
  );
  let statuses = [
    `💔🙂زۆرم خۆش ویستی بەڵام قەدرت نەزانیم`,
    ` کە بەڵێنی مانەوەیان دا دڵنیابە دەڕۆن💔😀`,
  ` دەبێت ڕۆشتنێک بڕۆم هەواڵی مردنم بکەم بە دیاری بۆت `,
      ` kurd.gg خاوەنی`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "http://www.twitch.tv/faith"
    });
  }, 1000);
});
//////
client.login("");
