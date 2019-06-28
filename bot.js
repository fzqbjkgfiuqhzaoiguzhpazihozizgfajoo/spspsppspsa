const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
const Discord3 = require('discord.js');
const Discord4 = require('discord.js');
const Discord5 = require('discord.js');
const Discord6 = require('discord.js');
const Discord7 = require('discord.js');
const Discord8 = require('discord.js');
const Discord9 = require('discord.js');
const Discord10 = require('discord.js');
///
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
const client6 = new Discord6.Client();
const client7 = new Discord7.Client();
const client8 = new Discord8.Client();
const client9 = new Discord9.Client();
const client10 = new Discord10.Client();
///
var ServerID = "593825354930454528"; 
var ChannelID = "593825354930454530";
var prefix = "L";
console.log('Taw2m :) Online.');
///
client1.on('ready', () => {
    function timerFunc() {
        client1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client2.on('ready', () => {
    function timerFunc() {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client3.on('ready', () => {
    function timerFunc() {
        client3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client4.on('ready', () => {
    function timerFunc() {
        client4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client5.on('ready', () => {
    function timerFunc() {
        client5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client6.on('ready', () => {
    function timerFunc() {
        client6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client7.on('ready', () => {
    function timerFunc() {
        client7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client8.on('ready', () => {
    function timerFunc() {
        client8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client9.on('ready', () => {
    function timerFunc() {
        client9.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client10.on('ready', () => {
    function timerFunc() {
        client10.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
///
client1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix1 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix2 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client3.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix3 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client4.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix4 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client5.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix5 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client6.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix6 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client7.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix7 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client8.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix8 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client9.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix9 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client10.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix10 + "say")) {
message.delete(3000);
    if(message.author.id !== "541614978319384597") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
///
client1.on("error", function(err) {
 return console.log(err);
});
client2.on("error", function(err) {
 return console.log(err);
});
client3.on("error", function(err) {
 return console.log(err);
});
client4.on("error", function(err) {
 return console.log(err);
});
client5.on("error", function(err) {
 return console.log(err);
});
client6.on("error", function(err) {
 return console.log(err);
});
client7.on("error", function(err) {
 return console.log(err);
});
client8.on("error", function(err) {
 return console.log(err);
});
client9.on("error", function(err) {
 return console.log(err);
});
client10.on("error", function(err) {
 return console.log(err);
});
///
var prefix1 = "1";
var prefix2 = "2";
var prefix3 = "3";
var prefix4 = "4";
var prefix5 = "5";
var prefix6 = "6";
var prefix7 = "7";
var prefix8 = "8";
var prefix9 = "9";
var prefix10 = "10";
///
client1.login(process.env.BOT1_TOKEN);
client2.login(process.env.BOT2_TOKEN);
client3.login(process.env.BOT3_TOKEN);
client4.login(process.env.BOT4_TOKEN);
client5.login(process.env.BOT5_TOKEN);
client6.login(process.env.BOT6_TOKEN);
client7.login(process.env.BOT7_TOKEN);
client8.login(process.env.BOT8_TOKEN);
client9.login(process.env.BOT9_TOKEN);
client10.login(process.env.BOT10_TOKEN);
