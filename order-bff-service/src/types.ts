import { Request } from 'express'
import { OrderData } from './@entity'

export interface RequestInfo extends Request {
  user?: OrderData | null
}
