module.exports = (error, extra = {}) => {
    let err = `${'=== Begin Error ===\n---\n'
        + 'Error: '}${error.message}\n`
    const extraArray = Object.keys(extra).map((e) => `${e} : ${extra[e]}`).join('\n')
    err += extraArray
    err += `\nStack: ${error.stack}\n---\n=== End Error ===`

    console.log(err)
}
