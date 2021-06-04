import { Router } from 'express'
import { especificationsController } from '../loaders/especifications.loaders'

const especificationsRoutes = Router()

especificationsRoutes.route('/especifications')
    .get((request, response) => {
        return especificationsController.index(request, response)
    })
    .post((request, response) => {
        return especificationsController.store(request, response)
    })

export { especificationsRoutes }