import { Router } from 'express'
import { OrderController } from '../controllers'

const router = Router()

router.route('/').get(OrderController.getOrders).post(OrderController.createOrder)

export { router as orderRouter }
