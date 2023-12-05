import { Router } from 'express'

import packageJson from '../../package.json'
import Config from '../config'

const router = Router()

const serviceName = Config.SERVICE_NAME

router.get('/', (_req, res) => {
  res.send(`Hello from ${serviceName}`)
})

router.get('/ping', (_req, res) => {
  res.send('Pong 🏓')
})

router.get('/version', (_req, res) => {
  res.send({
    serviceName: Config.SERVICE_NAME,
    version: packageJson.version,
    dateString: new Date().toString(),
    timestamp: Date.now(),
    status: 'OK',
  })
})

export { router as generalRouter }
