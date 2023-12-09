import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Express } from 'express'
import { swaggerConfig } from './swaggerConfig'

export function generateSwaggerDocument(app: Express) {
  const options = {
    ...swaggerConfig,
    apis: ['./routes/*.ts'], // Adjust this based on your project structure
  }

  const swaggerSpec = swaggerJsdoc(options)

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
