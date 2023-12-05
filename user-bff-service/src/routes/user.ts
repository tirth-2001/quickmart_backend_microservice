import { Router } from 'express'
import { UserController } from '../controllers'

const router = Router()

router.route('/').get(UserController.getUsers).post(UserController.createUser)

export { router as userRouter }
