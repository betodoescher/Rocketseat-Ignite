import { Router } from 'express'
import usersController from '../loaders/users.loaders'

const usersRoutes = Router()

usersRoutes.route('/users')
    .get((request, response) => {
        return usersController().index(request, response)
    })
    .post((request, response) => {
        return usersController().store(request, response)
    })

export { usersRoutes }