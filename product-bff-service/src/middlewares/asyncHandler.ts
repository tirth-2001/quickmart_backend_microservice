import { NextFunction, Request, Response } from 'express'
import { RequestInfo } from '../types'

export const asyncHandler =
  (fn: (req: RequestInfo, res: Response, next: NextFunction) => void) =>
  (req: RequestInfo, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)
