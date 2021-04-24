const Discord = require('discord.js');
const client = new Discord.Client();
////////
/*
client.on('ready', () => {
    client.user.setActivity(`Shtak Lera Bnusa`,{ type: 'STREAMING' });
})*/

client.on("ready", () => {
  console.log(
    `bot is online`
  );
  let statuses = [
    `💔🙂زۆرم خۆش ویستی بەڵام قەدرت نەزانیم`,
    `کە بەڵێنی مانەوەیان دا دڵنیابە دەڕۆن💔😀`,
  `دەبێت ڕۆشتنێک بڕۆم هەواڵی مردنم بکەم بە دیاری بۆت`,
      `kurd.gg خاوەنی`,
`🙂من لە ناسینی تۆ پەشیمان نیم`,
`💔😀ئەگەر خۆشت ئەوێت دەی بیسەلمێنە`, 
`💔😀باوەڕناکەم هێندەی من ئاشقی خۆت بیت`,
`یەکەمین بۆت لیستی کوردی دروستکراوی خۆمە نامە بنێرن`
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
client.login("Mzg2MTg4NDkxOTUzNzk5MTc4.YIQnmQ.Vf5DfUMq96bLf86oNeTGW5TQTn4");
