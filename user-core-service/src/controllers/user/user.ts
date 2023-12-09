import { asyncRequestHandler } from 'quickmart-shared-service'
import { UserData, UserPayload } from '../../@entity'
import { usersList } from '../../data'
import { ErrorResponse } from '../../utils'

export const getUsers = asyncRequestHandler(async (req, res, next) => {
  const results: UserData[] = usersList

  res.status(200).send(results)
})

export const getUserById = asyncRequestHandler(async (req, res, next) => {
  const { id } = req.body
  console.log('CORE id', id)

  const result = usersList.find((user) => user.id === id)

  if (!result) throw new ErrorResponse('No user found with given id', 404)

  res.status(200).send(result)
})

export const createUser = asyncRequestHandler(async (req, res, next) => {
  const createUserPayload: UserPayload = { ...req.body }

  const user: Partial<UserData> = createUserPayload

  res.status(201).send(user)
})
