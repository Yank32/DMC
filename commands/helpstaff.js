const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = require("../config.json");


module.exports.run = async (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`vc nao possui permissao para ver os comandos dos staffs.`)


    if(args[0] == "help") return message.channel.send(`coloque ${prefix}help.`)

    if(args[0]) {
        let command = args[0];
        if(client.commands.has(command)) {
            command = client.commands.cache.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`RedeDuper`, message.guild.iconURL)
            .setThumbnail(client.user.displayAvatarURL)
            .setDescription(`O Prefix do bot é: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(`🌀Comandos Dos Staffs RedeDuper!🌀`, message.guild.iconURL)
        .setColor("RANDOM")
        .setDescription(`${message.author.username} ***Mandei no seu privado <3!***`)

        let Sembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`🌠RedeDuper🌠`, message.guild.iconURL)
        .setThumbnail(client.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`***Esses são meus comandos atuais!***\n**Meu prefix é: d!**`)
        .addField(`Comando#1:`, "``d!Ban <@usuario> <motivo>``")
        .addField(`Comando#2:`, "``d!Kick <@usuario> <motivo>``")
        .addField(`Comando#3:`, "``d!Limpar <1 a 99> (para limpar mensagens)``")
        .addField(`Comando#4:`, "``d!Anuncio (siga os passos)``")
        .addField(`Comando#5:`, "``d!Aviso <@usuario> <msg de aviso para o usuario>``")
        .setFooter("RedeDuper", client.user.displayAvatarURL)
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
