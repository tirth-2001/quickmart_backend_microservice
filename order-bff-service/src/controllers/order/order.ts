import { asyncHandler } from '../../middlewares'
import { OrderData, OrderPayload } from '../../@entity'

export const getOrders = asyncHandler(async (req, res, next) => {
  //TODO: Call CORE client for getting orders
  const results: OrderData[] = []

  res.status(200).json(results)
})

export const createOrder = asyncHandler(async (req, res, next) => {
  const createOrderPayload: OrderPayload = { ...req.body }

  const order: Partial<OrderData> = {}

  res.status(201).json({
    success: true,
    message: 'Order Created Successfully',
    data: order,
  })
})
