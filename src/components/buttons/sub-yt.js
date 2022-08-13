module.exports = {
    data: {
        name: "sub-yt"
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `https://www.youtube.com/channel/UCiolC_G44S78mIRFpi8D6Gw`
        });
    }
}