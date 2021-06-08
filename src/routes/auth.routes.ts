import { Router } from 'express'
import authController from '../loaders/auth.loaders'

const authRoutes = Router()

authRoutes.route('/login')
    .post((request, response) => {
        return authController().store(request, response)
    })

export { authRoutes }