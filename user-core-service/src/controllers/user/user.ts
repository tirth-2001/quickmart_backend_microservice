import { asyncRequestHandler } from 'quickmart-shared-service'
import { UserData, UserPayload } from '../../@entity'
import { usersList } from '../../data'

export const getUsers = asyncRequestHandler(async (req, res, next) => {
  const results: UserData[] = usersList

  res.status(200).send(results)
})

export const createUser = asyncRequestHandler(async (req, res, next) => {
  const createUserPayload: UserPayload = { ...req.body }

  const user: Partial<UserData> = createUserPayload

  res.status(201).send(user)
})
