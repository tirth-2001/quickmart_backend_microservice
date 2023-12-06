import { AxiosError } from 'axios'
import { NextFunction, Request, Response } from 'express'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let error = { ...err }
  error.message = err.message

  if (error && error.response) {
    // This is Axios Error instance
    error = err.response as AxiosError
    res.status(error.status || 500).json({
      success: false,
      message: error.data.message || 'Something went wrong!',
    })
  } else {
    res.status(err.statusCode || 500).json({
      success: false,
      message: error.message || 'Something went wrong!',
    })
  }
}
