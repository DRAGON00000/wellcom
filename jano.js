const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const Discord = require ("discord.js")
const moment = require ("moment")
const DarkMan = new Discord.Client();
const prefix = "D!";


DarkMan.login("");
DarkMan.on("ready", async () => {
  console.log(`Logged in as ${DarkMan.user.username}!`);
  DarkMan.user.setStatus("ONLINE");
  DarkMan.user.setActivity(`${prefix}help`, { type: "WATCHING" });
  DarkMan.guilds.cache.forEach(g => {
    if (g.member(DarkMan.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

DarkMan.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setThumbnail("https://media.tenor.com/images/85500641e177bccfc805cac8a2805e3f/tenor.gif")
.setAuthor("Prefix [ D! ]","https://i.imgur.com/Y9N3OCy.gif?noredirect")
.setDescription(` 
**
𝐖𝐞𝐥𝐜𝐨𝐦𝐞 [change channel]
𝐋𝐞𝐟𝐭 [change channel]
**
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/3wykSpqjZq)**
 `)
    
    .setFooter(` System bot ✨ | Coded by , DarkMan`, DarkMan.user.avatarURL)
    .setURL("https://discord.gg/3wykSpqjZq")
      
    message.channel.send(embed);
      message.react("<a:jano_27:799630916820795422>");
  }
});
//////////////

/////////// code welcome
DarkMan.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "・┊welcome"
  );
  let DarkMan = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(``)
    .setAuthor(`Welcome Bot`, `https://cdn.discordapp.com/avatars/828218881989935105/479953e51dadf4f38c5bc72c912193c5.webp?size=1024`)
    .setColor("RANDOM")
    .setThumbnail(DarkMan)
    .addField(
      "**name** : ",
      `${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "**Welcome**",
      `Welcome to the server, ${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "**ID** :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "**All Member**",
      `${member.guild.memberCount}
      · · • • • ✤ • • • · ·`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
////////////// code left
DarkMan.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "・┊left"
  );
  let DarkMan = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(``)
    .setAuthor(`Welcome Bot`, `https://cdn.discordapp.com/avatars/828218881989935105/479953e51dadf4f38c5bc72c912193c5.webp?size=1024`)
    .setImage(
      "https://thumbs.gfycat.com/ChiefBiodegradableAmericanalligator-size_restricted.gif"
    )
    .setColor("RANDOM")
    .setThumbnail(DarkMan)
    .addField("**name :**", `${member}`)
    .addField("Bye Bye", `!`)
    .addField("✶⊶⊷⊶⊷❍⊶⊷⊶⊷✶;(",   "bye bye")
    .addField(
      "⳺☟مــیــمــبەرەکــان ماوە⳻",
      `${member.guild.memberCount}` + "member"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
/////////////// code embed
DarkMan.on("guildMemberAdd", member => {
  const joinembed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      `__**A new member just arrived!**__`
    )
    .addField(
      " name : ",
      `${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "Welcome",
      `Welcome to the server, ${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      " User :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "Your are the member",
      `${member.guild.memberCount}
      · · • • • ✤ • • • · ·`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      ""
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  member.send(joinembed);
});
/////////////////
