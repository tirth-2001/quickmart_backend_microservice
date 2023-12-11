import { Router } from 'express'
import { generalRouter, userRouter } from '.'

const router = Router()

// Router
router.use('/', generalRouter)
router.use('/api/user', userRouter)

export { router as coreRouter }
