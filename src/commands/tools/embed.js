const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed'),

    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`This is an EMBED.`)
            .setDescription("EMBED description")
            .setColor(client.color)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: "https://www.youtube.com/channel/UCiolC_G44S78mIRFpi8D6Gw",
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL("https://github.com/z1chh")
            .addFields([
                {
                    name: "Field1 here",
                    value: "Value1 here, description blablabla",
                    inline: true
                },
                {
                    name: "Field2 here",
                    value: "Value2 here, description blablabla",
                    inline: false
                },
                {
                    name: "Field3 here",
                    value: "Value3 here, description blablabla",
                    inline: true
                }
            ]);

            await interaction.reply({
                embeds: [embed]
            });
    },
};