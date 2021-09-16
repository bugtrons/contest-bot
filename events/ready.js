module.exports = async (client) => {
    console.log(`==== Bot ready :: ${client.user.username} =====`)
    const setStatus = () => client.user.setActivity(`with code!`, {
        type: "PLAYING",
    })
    setStatus()
}
