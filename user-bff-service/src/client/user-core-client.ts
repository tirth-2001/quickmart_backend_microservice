import { ServiceClient } from 'quickmart-shared-service'
import { UserData, UserPayload } from '../@entity'
import Config from '../config'

const userCoreServiceClient = new ServiceClient(Config.ORDER_CORE_SERVICE_URL as string) // Replace with the actual URL of your user-core-service

export const getAllUsers = async () => {
  return userCoreServiceClient.post<UserData[]>('/getUsers')
}

export const createUser = async (userPayload: UserPayload) => {
  return userCoreServiceClient.post<UserData>('/createUser', userPayload)
}
