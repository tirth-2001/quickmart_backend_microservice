import { Router } from 'express'

import packageJson from '../../package.json'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World! This is DevCamper API.')
})

router.get('/ping', (req, res) => {
  res.send('Pong 🏓 ')
})

router.get('/version', (req, res) => {
  res.send({
    version: packageJson.version,
    dateString: new Date().toString(),
    timestamp: Date.now(),
    status: 'OK',
  })
})

export { router as generalRouter }
