const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config()
if (process.env.NODE_ENV) {
    const envConfig = `${process.cwd()}/.env.${process.env.NODE_ENV.toLowerCase()}`
    if (fs.existsSync(envConfig)) dotenv.config({ path: envConfig })
}

