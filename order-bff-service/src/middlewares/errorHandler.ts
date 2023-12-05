import { NextFunction, Request, Response } from 'express'
import { ErrorResponse } from '../utils'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let error = { ...err }
  error.message = err.message
  console.log(err.stack)

  // Handle Invalid Key Error
  if (err.name === 'CastError') {
    const message = `Resource not found with id ${error.value}`
    error = new ErrorResponse(message, 400)
  }

  // Duplicate field error
  if (err.code === 11000) {
    const message = `Duplicate field with found for ${JSON.stringify(error.keyValue)}`
    error = new ErrorResponse(message, 400)
  }

  // Validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors)
      .map((e: any) => e.message)
      .join(',')
    error = new ErrorResponse(`Validation Error: ${message}`, 400)
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: error.message || 'Something went wrong!',
  })
}
