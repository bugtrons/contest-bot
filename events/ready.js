module.exports = async (client) => {
    console.log(`==== Bot ready :: ${client.user.username} =====`)
    const status = process.env.BOT_STATUS || 'with code!'
    const setStatus = () => client.user.setActivity(status, { type: 'PLAYING' })
    setStatus()
}
