const { Client, Collection } = require("discord.js");
const Discord = require('discord.js');
const emoji = require('./botconfig/emoji.json')

const client = new Client();
require('discord-buttons')(client);
const chalk = require("chalk");
const fs = require("fs");

client.commands = new Collection();

fs.readdir(__dirname + "/botcmd/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let event = require(__dirname + "/botcmd/events/" + file);
        let eventName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading event ") + chalk.magenta.bold(`"${eventName}"`)
        );
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir(__dirname + "/botcmd/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(__dirname + "/botcmd/commands/" + file);
        let commandName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading command ") + chalk.red.bold(`"${commandName}"`)
        );
        client.commands.set(commandName, props);
    });
});

client.on('guildCreate', guild => {
   const botownerid = "1170412281704755302";
   const botownerid2 = "592742911263899649";
   const serverjoinch = client.channels.cache.get("878005964014485584")
   //const botownerfix = client.users.fetch(botownerid);
   const botowner = client.users.cache.get("946522988214382662");
   const botowner2 = client.users.cache.get("946522988214382662");
   if(!botowner) console.log("Ne mogu naci vlasnika bota!")
   console.log(botowner)
    const join = new Discord.MessageEmbed()
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .setTitle(`Zdravo, hvala na koristenju Aquatic Tickets u, ${guild.name}`)
    .setDescription("Pogledao sam okolo i otkrio da nemam baš sve dozvole koje su mi potrebne da bih ispravno funkcionisao. Da biste ovo popravili tako da možete pravilno da koristite bota, generisana je veza koja će dati sve relevantne dozvole botu\n\n")
    .setFooter("Hvala na koristenju!")
    .setColor("RANDOM")
    .setTimestamp();
    const ownerembed = new Discord.MessageEmbed()
    .setTitle(`${emoji.join} Joined A New Server | ${guild.name}`)
    .setDescription(`${emoji.members} **${guild.name}** | (\`${guild.id}\`)`)
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .addField("> Server Owner", `> ${emoji.dot} ${guild.owner}`)
    .addField("> Membercount", `> ${emoji.dot} ${guild.memberCount}`)
    .addField("> Server Bot Is In", `> ${emoji.dot} ${client.guilds.cache.size}`)
    .addField(`${emoji.leave} Get Bot Out Of There -`, `\`\`\`leaveserver ${guild.id}\`\`\``)
    .setFooter("Hvala na koristenju!")
    .setColor("RANDOM")
    .setTimestamp()
  try {
  botowner.send(ownerembed)
  botowner2.send(ownerembed)
  serverjoinch.send(ownerembed)
  } catch(err) {
    return;
  }
})
///////////////////////////////////////////
client.on('guildDelete', guild => {
  const owneridforleave = '693553429380857978';
  const owneridforleave2 = "700185351318405232";
  const serverleavech = client.channels.cache.get("878005964014485584")
  const botownerforleave = client.users.cache.get(owneridforleave);
  const botownerforleave2 = client.users.cache.get(owneridforleave2);
  const leaveembed = new Discord.MessageEmbed()
    .setTitle(`${emoji.leave} Left a Guild | ${guild.name}`)
    .setDescription(`${emoji.members} **${guild.name}** | (\`${guild.id}\`)`)
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .addField("> Server Owner", `> ${emoji.dot}  ${guild.owner}`)
    .addField("> MemberCount", `> ${emoji.dot} ${guild.memberCount}`)
    .addField("> Server Bot Is In", `> ${emoji.dot} ${client.guilds.cache.size}`)
    .setColor("RANDOM")
    .setTimestamp()
  try{
    //console.log(botownerforleave)
    botownerforleave.send(leaveembed)
    botownerforleave2.send(leaveembed)
    serverleavech.send(leaveembed)
  } catch (err) {
    return;
  }
});

client.login(require("./config/bot").token).catch(err => console.log(chalk.red.bold(err)))
require("http").createServer((_, res) => res.end("Napravljeno od 50cd\n\n")).listen(8080)

client.on('ready', () => {
    client.user.setPresence({
        activity: {
            name: 'Aquatic Survival',
            type: "STREAMING",
        }
    });
});
/**********************************************************
 * @INFO
 * Bot Coded by R J#4407 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 *********************************************************/