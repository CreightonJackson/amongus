const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("CJ")
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available more commands will be added soon.")
      .addField(" Sign Up ","start [channel-name] [Time] [winners] [title]\nreroll [sign up name]\nend [sign up name]")
      .addField("Examples", "!start #giveaway 5m 1 Testing\n!end Testing\n!reroll Testing")
      .addField("😁 Fun 😁", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**You've Got a Mail 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
