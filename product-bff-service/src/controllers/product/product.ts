import { asyncHandler } from '../../middlewares'
import { ProductData, ProductPayload } from '../../@entity'

export const getProducts = asyncHandler(async (req, res, next) => {
  //TODO: Call CORE client for getting Products
  const results: ProductData[] = []

  res.status(200).json(results)
})

export const createProduct = asyncHandler(async (req, res, next) => {
  const createPayload: ProductPayload = { ...req.body }

  const product: Partial<ProductData> = {}

  res.status(201).json({
    success: true,
    message: 'Product Created Successfully',
    data: product,
  })
})
