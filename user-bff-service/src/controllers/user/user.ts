import { asyncHandler } from '../../middlewares'
import { UserData, UserPayload } from '../../@entity'

export const getUsers = asyncHandler(async (req, res, next) => {
  //TODO: Call CORE client for getting Users
  const results: UserData[] = []

  res.status(200).json(results)
})

export const createUser = asyncHandler(async (req, res, next) => {
  const createUserPayload: UserPayload = { ...req.body }

  const user: Partial<UserData> = {}

  res.status(201).json({
    success: true,
    message: 'User Created Successfully',
    data: user,
  })
})
