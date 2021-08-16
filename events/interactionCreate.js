const errorPrint = require('../util/errorPrint')

module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return
    const command = client.slashCommands.get(interaction.commandName)
    if (command) {
        try {
            await command.exec(interaction)
        } catch (err) {
            errorPrint(err, { description: `command error :: ${interaction.commandName} | ${interaction.guild.name} | ${interaction.channel.name} | ${interaction.user.tag}` })
        }
    }
}
