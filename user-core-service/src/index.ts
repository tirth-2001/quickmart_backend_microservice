import express, { Request, Response } from 'express'
import cors from 'cors'

// Router files & Local Middlewares
import { generalRouter, userRouter } from './routes'

import Config from './config'
import { errorHandler as sharedErrorHandler } from 'quickmart-shared-service'

// Instatiate Express App
const app = express()
const port = Config.PORT
const serviceName = Config.SERVICE_NAME

app.use(express.json())
app.use(cors())

// Enable CORS
app.use(cors())

// Router
app.use('/', generalRouter)
app.use('/api/user', userRouter)

app.use((req, res, _next) => {
  const endpoint = req.url
  res.status(404).json({
    success: false,
    message: `Route not found. The requested endpoint ${endpoint} is not configured yet!`,
  })
})

// Custom Error Handler
app.use(sharedErrorHandler)

app.listen(port, () => {
  console.log(`${serviceName} running on port : ${port}`)
})
