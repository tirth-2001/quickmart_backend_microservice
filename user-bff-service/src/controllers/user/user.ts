import { asyncRequestHandler } from 'quickmart-shared-service'
import { UserPayload } from '../../@entity'
import { RedisCacheClient, UserCoreClient } from '../../client'
import { ErrorResponse } from '../../utils'

export const getUsers = asyncRequestHandler(async (req, res, next) => {
  const results = await UserCoreClient.getAllUsers()

  res.status(200).json({
    success: true,
    message: 'Users fetched Successfully',
    data: results,
  })
})

export const getUserById = asyncRequestHandler(async (req, res, next) => {
  const { id } = req.body

  if (!id) throw new ErrorResponse('id is mandatory', 400)

  const cachedData = await RedisCacheClient.getUserById(id)

  console.log('BFF cached data', cachedData)

  if (cachedData) {
    res.status(200).json({
      success: true,
      message: 'User fetched successfully by cache',
      data: cachedData,
    })
  } else {
    const result = await UserCoreClient.getUserById({ id })

    if (!result) throw new ErrorResponse('User not found with given ID', 404)

    await RedisCacheClient.setUserById(id, result)

    res.status(200).json({
      success: true,
      message: 'User fetched Successfully',
      data: result,
    })
  }
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
