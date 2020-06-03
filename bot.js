// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
  if (msg.content === 'dan!mukuro') {
    msg.reply(' Mukuro Ikusaba. The sixteenth student, lying hidden somewhere in this academy. The one they call the Ultimate Despair. Watch out for her.');
  }
});

client.on('message', msg => {
  if (msg.content === 'dan!counter') {
    msg.reply("No, that's wrong!");
  }
});

client.on('message', msg => {
  if (msg.content === 'dan!rebuttal') {
    msg.reply("Allow me to cut through those words!");
  }
});

client.on('message', msg => {
  if (msg.content === 'dan!eureka') {
    msg.reply("Now I understand!");
  }
});

client.on("ready", () => {
    client.user.setActivity("you use dan!", { type: "WATCHING"})
})

