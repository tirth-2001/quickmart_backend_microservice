import express, { Request, Response } from 'express'
import cors from 'cors'

// Router files & Local Middlewares
import { generalRouter, productRouter } from './routes'

import { errorHandler } from './middlewares'
import Config from './config'

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
app.use('/api/product', productRouter)

app.use((req, res, _next) => {
  const endpoint = req.url
  res.status(404).json({
    success: false,
    message: `Route not found. The requested endpoint ${endpoint} is not configured yet!`,
  })
})

// Global error handler middleware
app.use((err: Error, _req: Request, res: Response, _next: any): void => {
  console.error(err.stack)
  res.status(500).json({ success: false, message: `Internal server error. ${err.message}` })
})

// Custom Error Handler
app.use(errorHandler)

app.listen(port, () => {
  console.log(`${serviceName} running on port : ${port}`)
})
