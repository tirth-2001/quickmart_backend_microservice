import { asyncHandler } from '../../middlewares'
import { ProductData, ProductPayload } from '../../@entity'

export const getUsers = asyncHandler(async (req, res, next) => {
  //TODO: Call CORE client for getting Users
  const results: ProductData[] = []

  res.status(200).json(results)
})

export const createUser = asyncHandler(async (req, res, next) => {
  const createUserPayload: ProductPayload = { ...req.body }

  const user: Partial<ProductData> = {}

  res.status(201).json({
    success: true,
    message: 'User Created Successfully',
    data: user,
  })
})
