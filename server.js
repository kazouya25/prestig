require("express")().listen(1343);
var prefix = "pp";
//////
/*
require("express")().listen(1343);
app.get('/', (req, res) => res.send('Server is up.'));
*/
/*
const app = require('express')();

app.get('/', (req, res) => res.send('Server is up.'));

module.exports = () => {
  app.listen(3000);
}
*/
///////
const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login
("");
const fetch = require("node-fetch");
const fs = require("fs");

setInterval(() => {
  var links = db.get("links");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
      console.log("" + e);
    }
  });

  console.log("content Successfully.");
}, 60000);

client.on("ready", () => {
  if (!Array.isArray(db.get("links"))) {
    db.set("links", []);
  }
});
//// الاستاتس حقت البوت
client.on("ready", () => {
  client.user.setActivity(
    ` ${db.get("links").length} Bots / ${client.guilds.size} servers `, { type: "LISTENING" } );//التعديل علي البلاينج
  console.log(`entered`);
});
const log = message => {
  console.log(`${message}`);
};
/////امر اضافة بوت لسيستم البوت
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == prefix + "add") {
    var link = spl[1];
    fetch(link)
      .then(() => {
        if (
          db
            .get("links")
            .map(z => z.url)
            .includes(link)
        )
          return message.channel.send(
            "This is a link to the bulldozer system!! and not supprted"
          );
        message.reply("Done your Project now 24/7 :beers: ");
        db.push("links", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send("" + e);
      });
  }
});
// بيانات البوتات المتواجدة عالبوت
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == prefix + "say") {
    var link = spl[1];
    message.channel.send(
      `${db.get("links").length} Bot/Project pristejed In progress.!`
    );
  }
});

//بيانات الاتصال
client.on("message", message => {
  const moment = require("moment");
  require("moment-duration-format");
  if (message.content === prefix + "stats") {
    message.channel.send(`Bot Ping ** ${client.ping} ms**
Total Servers : ${client.guilds.size}
Total Users : ** ${client.users.size} **
Total channel :  ** ${client.channels.size} **
Total Bots :**${db.get("links").length} **
pristej time :** ${moment
      .duration(client.pristej)
      .format("D [day], H [hour], m [minute], s [second]")} **
`);
  }
});

///
////////////

const Discord = require("discord.js");
///////// قائمة المساعدة
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == prefix + "help") {
    let embed = new Discord.RichEmbed()
      .setColor("#b9f2ff")
      .setTitle("pristej Bot v1.0.0  Help includes a system that allows bot glitch sites to remain open 24/7. Connections in the system work 24/7 without maintenance"
      )
      .addField(
        `General Commands`,
        `\n\n
\`${prefix}help\` : Shows the help menu.\n
\`${prefix}add\`  :Adds your specified link to the system.\n
\`${prefix}say\`  : Shows Bots in the System.\n
\`${prefix}stats\`: Shows Bots **ping-servers-users-chanels**\n
\`${prefix}dev\`  : Shows Bot **Devloper Details**
`
      )
      .addField(
        `Links`,
        `[𝒱ℯ𝓇ℊ𝒾𝓁#3226](https://discord.gg/Jgg9B4D)
[Add our music bot to your server ](https://discord.com/api/oauth2/authorize?client_id=750298476147114084&permissions=8&scope=bot)
[Support Server](https://discord.gg/MUQQyh6)`
      )
      .setThumbnail(client.user.avatarURL)
      .setAuthor(`pristejbot`, client.user.avatarURL)
      .setFooter(`pristej Bot v1.0.0 Release`, client.user.avatarURL);
    return message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.channel.type == prefix + "dev") {
    let embed = new Discord.RichEmbed()
      .setTitle("devloper Details")
      .setdiscription(` Message BY :${message.author.tag}\n ID :${message.author.id}` )
      .setFooter(`**𝒱ℯ𝓇ℊ𝒾𝓁#3226**`);
  }
});

////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == prefix + "dev") {
    let embed = new Discord.RichEmbed()
      .setTitle("devloper Details"
      )
      .setColor("RANDOM")
      .addField(      
              `😎😎😎😎😎😎`, `

\`Name\`: Sabry Dawood.\n
\`Age\` : 26 Yaers.\n
\`Discord\` : 𝒱ℯ𝓇ℊ𝒾𝓁#3226.\n
\`instgram\`: **kairokygaming**
`
)
      .setThumbnail(client.user.avatarURL)
      .setAuthor(`pristejbot`, client.user.avatarURL)
      .setFooter(`pristej Bot v1.0.0 Release`, client.user.avatarURL);
    return message.channel.send(embed);
  }
});
////////////////////////

