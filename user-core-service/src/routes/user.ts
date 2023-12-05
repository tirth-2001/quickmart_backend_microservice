import { Router } from 'express'
import { UserController } from '../controllers'

const router = Router()

router.route('/getUsers').post(UserController.getUsers)

router.route('/createUser').post(UserController.createUser)

export { router as userRouter }
