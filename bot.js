/* eslint-disable global-require,import/no-dynamic-require */
const { Client, Collection } = require('discord.js')
const { readdirSync } = require('fs')
const path = require('path')
const commandsDefinition = require('./commandsDefinition')

module.exports = class extends Client {
    constructor(opts) {
        super(opts)
        this.commands = new Collection()
        this.slashCommands = new Collection()

        this.inviteLink = process.env.BOT_INVITE_LINK
        this.prefix = process.env.PREFIX
        this.supportServer = process.env.SUPPORT_SERVER_INVITE_LINK
        this.config = process.env
    }

    async build() {
        this.loadSlashCommands()
        this.loadEventListeners()
        await this.login(process.env.TOKEN)
        await this.application.commands.set(commandsDefinition)
        // await (await this.guilds.fetch(process.env.HOME_GUILD_ID)).commands.set(commandsDefinition) // Enable this when testing
        await this.application.fetch()
        await this.application.commands.set([])
    }

    loadSlashCommands() {
        const commands = readdirSync(path.join(__dirname, 'commands'))
        // eslint-disable-next-line no-restricted-syntax
        for (const commandFile of commands) {
            const command = require(`./commands/${commandFile}`)
            this.slashCommands.set(command.name, command)
        }
    }

    loadEventListeners() {
        readdirSync(`${__dirname}/events/`)
            .filter((file) => file.endsWith('.js'))
            .map((file) => this.on(file.split('.js')[0], require(`${__dirname}/events/${file}`).bind(null, this)))
    }
}
