const { MessageActionRow, MessageButton } = require('discord.js')
const humanizeDuration = require('humanize-duration')
const contest = require('../model/contest')
const errorPrint = require('../util/errorPrint')

module.exports = {
    name: 'contest',
    exec: async (interaction) => {
        // Extract platform from options
        const platform = interaction.options.get('platform').value
        // Set offset for pagination
        let offset = 1
        // Prepare contest message
        const getContest = async () => {
            // Fetch random meme from db
            const [con] = await contest.getContest(platform, offset)

            return `> **${con.event}**\n`
                + `> Start Time: \`${con.start}\`\n`
                + `> End Time: \`${con.end}\`\n`
                + `> Duration: ${humanizeDuration(con.duration * 1000)}\n`
                + `> ${con.href}`
        }

        const getRow = () => {
            // Prepare buttons
            const nextContest = new MessageButton().setCustomId('nextContest').setLabel('Next Contest').setStyle('PRIMARY')
            const prevContest = new MessageButton().setCustomId('prevContest').setLabel('Previous Contest').setStyle('PRIMARY')
            if (offset === 1) prevContest.setDisabled(true)

            return new MessageActionRow().addComponents(nextContest, prevContest)
        }

        // Send Initial reply
        const message = await interaction.reply({ content: await getContest(), components: [getRow(true)], fetchReply: true })

        // Start main collector
        const collector = message.createMessageComponentCollector({ componentType: 'BUTTON', time: 30000 })
        collector.on('collect', async (buttonInteraction) => {
            if (buttonInteraction.user.id !== interaction.user.id) {
                return buttonInteraction.reply({ content: `These buttons aren't for you!`, ephemeral: true })
            }
            if (buttonInteraction.customId === 'nextContest') {
                try {
                    offset += 1
                    await buttonInteraction.update({ content: await getContest(), components: [getRow(true)] })
                } catch (err) {
                    errorPrint(err, { description: `command error :: ${interaction.commandName} | ${interaction.guild.name} | ${interaction.channel.name} | ${interaction.user.tag}` })
                }
            }
            if (buttonInteraction.customId === 'prevContest') {
                try {
                    offset -= 1
                    await buttonInteraction.update({ content: await getContest(), components: [getRow(true)] })
                } catch (err) {
                    errorPrint(err, { description: `command error :: ${interaction.commandName} | ${interaction.guild.name} | ${interaction.channel.name} | ${interaction.user.tag}` })
                }
            }

            return null
        })
        collector.on('end', () => {
            interaction.editReply({ components: [] })
        })
    },
}
