import { Request } from 'express'
import { ProductData } from './@entity'

export interface RequestInfo extends Request {
  product?: ProductData | null
}
