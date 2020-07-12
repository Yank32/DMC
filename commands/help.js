const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = require("../config.json");


module.exports.run = async (client, message, args) => {

    if(args[0] == "help") return message.channel.send(`coloque ${prefix}help.`)

    if(args[0]) {
        let command = args[0];
        if(client.commands.has(command)) {
            command = client.commands.cache.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor("cyan")
            .setAuthor(`DualityMC`, message.guild.iconURL)
            .setThumbnail(client.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();

        let embed = new Discord.MessageEmbed()
        .setAuthor(`Comandos Rocket Host!`, message.guild.iconURL)
        .setColor("#f94343")
        .setDescription(`${message.author.username} ***Mandei no seu privado !***`)

        let Sembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`🌠DualityMC🌠`, message.guild.iconURL)
        .setThumbnail(client.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`***Esses são meus comandos atuais!***\n**Meu prefix é: -**`)
        .addField(`Comando#1:`, "``d!Avatar <@usuario> (Para ver a foto de alguem)``")
        .addField(`Comando#2:`, "``d!Info (Para ver as informações do servidor)``")
        .addField(`Comando#3:`, "``d!Jokempo (Jokempo com o Bot)``")
        .addField(`Comando#4:`, "``d!Moeda (Cara ou coroa com o Bot)``")
        .addField(`Comando#5:`, "``d!Uptime (Para ver o tempo on do bot)``")
        .addField(`Comando#6:`, "``d!User (Para ver suas informações)``")
        .addField(`Comando#7:`, "``d!Roleta (Roleta Russa kkk)``")
        .addField(`Comando#8:`, "``d!Socar <@usuario> (Dar uma porrada em alguem)``")
        .addField(`Comando#9:`, "``d!Palmas <@usuario> (Bater balmas para alguem)``")
        .addField(`Comando#10:`, "``d!Pergunta <Sua pergunta> (Para fazer uma pergunta com resposta aleatoria do bot) ``")
        .addField(`Comando#11:`, "``d!Kiss <@usuario> (Para beijar alguem)``")
        .addField(`Comando#12:`, "``d!Casar <@usuario> (Para se casar com alguem)``")
        .addField(`Comando#13:`, "``d!Divorcio <@usuario> (Para se divorciar de alguem)``")
        .addField(`Comando#14:`, "``d!Reportar (Para reportar alguem)``")
        .setFooter("DualityMC", client.user.displayAvatarURL)
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "!usage",
    description: "",
    accessableby: "Members"
}
