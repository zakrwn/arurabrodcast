const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "#";
client.on('message', async message => {
if(message.content.startsWith(prefix + "bcall")) {
  let i = client.users.size;
  if(message.author.id !== '295909228328255488') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
  var args = message.content.split(' ').slice(1).join(' ');
  if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
  setTimeout(() => {
    message.channel.send(`تم الارسال لـ ${i} شخص`)
  }, client.users.size * 500);
  client.users.forEach(s => {
    s.send(args).catch(e => i--);
  });
}
}); 

client.login(process.env.BOT_TOKEN);
