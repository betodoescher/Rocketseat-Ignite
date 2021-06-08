import { Router } from 'express'
import usersController from '../loaders/users.loaders'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const usersRoutes = Router()

usersRoutes.use(ensureAuthenticated)

usersRoutes.route('/users')
    .get((request, response) => {
        return usersController().index(request, response)
    })
    .post((request, response) => {
        return usersController().store(request, response)
    })

export { usersRoutes }