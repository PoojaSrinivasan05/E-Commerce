import { Router } from 'express'
import { registerUserController, verifyEmailController, loginUserController, getMeController } from '../controllers/user.controller.js';
 
const userRouter = Router()
userRouter.post('/register', registerUserController)
userRouter.post('/verify-email', verifyEmailController)
userRouter.post('/login', loginUserController)
userRouter.get('/me', getMeController)
 
export default userRouter