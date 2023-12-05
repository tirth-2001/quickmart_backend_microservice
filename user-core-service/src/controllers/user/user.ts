import { asyncHandler } from '../../middlewares'
import { UserData, UserPayload } from '../../@entity'
import { usersList } from '../../data'

export const getUsers = asyncHandler(async (req, res, next) => {
  const results: UserData[] = usersList

  res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  })
})

export const createUser = asyncHandler(async (req, res, next) => {
  const createUserPayload: UserPayload = { ...req.body }

  const user: Partial<UserData> = createUserPayload

  res.status(201).json({
    success: true,
    message: 'User Created Successfully',
    data: user,
  })
})
