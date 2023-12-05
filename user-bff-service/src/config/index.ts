import dotenv from 'dotenv'
import path from 'path'

const configEnvPath = path.resolve(__dirname, '../../.env')

dotenv.config({
  path: configEnvPath,
})

const Config = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  SERVICE_NAME: process.env.SERVICE_NAME || '',
}

console.log('CONFIG LOADED...', Config)

export default Config
