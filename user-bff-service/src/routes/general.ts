import { Router } from 'express'

import packageJson from '../../package.json'
import Config from '../config'

const router = Router()

const serviceName = Config.SERVICE_NAME

/**
 * @openapi
 * /:
 *   get:
 *     tags:
 *      - general
 *     description: Welcome to user-bff-service!
 *     responses:
 *       200:
 *         description: Returns a hello message.
 */
router.get('/', (_req, res) => {
  res.send(`Hello from ${serviceName}`)
})

/**
 * @openapi
 * /ping:
 *   get:
 *     description: Ping
 *     responses:
 *       200:
 *         description: Returns pong.
 */
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
