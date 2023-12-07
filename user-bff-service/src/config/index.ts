import dotenv from 'dotenv'
import path from 'path'

const configEnvPath = path.resolve(__dirname, '../../.env')

dotenv.config({
  path: configEnvPath,
})

enum ConfigVariables {
  SERVICE_NAME = 'SERVICE_NAME',
  NODE_ENV = 'NODE_ENV',
  PORT = 'PORT',
  ORDER_CORE_SERVICE_URL = 'ORDER_CORE_SERVICE_URL',
}

const requiredConfigVariables: ConfigVariables[] = [
  ConfigVariables.PORT,
  ConfigVariables.SERVICE_NAME,
  ConfigVariables.ORDER_CORE_SERVICE_URL,
]

const Config: Record<ConfigVariables, string> = {
  PORT: process.env.PORT ?? '8080',
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  SERVICE_NAME: process.env.SERVICE_NAME ?? '',
  ORDER_CORE_SERVICE_URL: process.env.ORDER_CORE_SERVICE_URL ?? '',
}

let missingConfigVariables = requiredConfigVariables.filter((item) => !Boolean(Config[item]))
if (missingConfigVariables.length) {
  throw new Error(`Missing Config Variables: ${missingConfigVariables.join(',')}`)
}

console.log('CONFIG LOADED...', Config)

export default Config
