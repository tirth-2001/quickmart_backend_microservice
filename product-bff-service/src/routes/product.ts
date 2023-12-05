import { Router } from 'express'
import { ProductController } from '../controllers'

const router = Router()

router.route('/').get(ProductController.getProducts).post(ProductController.createProduct)

export { router as productRouter }
