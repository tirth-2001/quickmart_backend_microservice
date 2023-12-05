import { Request } from 'express'
import { UserData } from './@entity'

export interface RequestInfo extends Request {
  user?: UserData | null
}
