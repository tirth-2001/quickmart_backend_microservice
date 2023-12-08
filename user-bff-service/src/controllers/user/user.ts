import { asyncRequestHandler } from 'quickmart-shared-service'
import { UserPayload } from '../../@entity'
import { UserCoreClient } from '../../client'

export const getUsers = asyncRequestHandler(async (req, res, next) => {
  const results = await UserCoreClient.getAllUsers()

  res.status(200).json({
    success: true,
    message: 'Users fetched Successfully',
    data: results,
  })
})

export const createUser = asyncRequestHandler(async (req, res, next) => {
  const createUserPayload: UserPayload = { ...req.body }

  const user = await UserCoreClient.createUser(createUserPayload)

  res.status(201).json({
    success: true,
    message: 'User Created Successfully',
    data: user,
  })
})
