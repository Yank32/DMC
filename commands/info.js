const { MessageEmbed } = require("discord.js")

module.exports = { 


    run: async (client, message, args) => {
        let sEmbed = new MessageEmbed()
            .setColor('RAMDOM')
            .setTitle("Server DualityMC Info")
            .setThumbnail(message.guild.iconURL)
            .addField("🧾 Nome do servidor", message.guild.name)
            .addField('👑 Criador do servidor', message.guild.owner, true)
            .addField('🌎 Região do servidor', message.guild.region.charAt(0).toUpperCase() + message.guild.region.slice(1), true)
            .addField('🔹 Nível de boost', message.guild.verificationLevel, true)
        message.channel.send(sEmbed);
        }
    }


module.exports.help = {
    name: 'info'
};