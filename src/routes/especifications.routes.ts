import { Router } from 'express'

import { EspecificationsController } from '../api/controllers/EspecificationsController'

const especificationsRoutes = Router()
const especificationsController = new EspecificationsController()


especificationsRoutes.route('/especifications')
    .get(especificationsController.index)
    .post(especificationsController.store)

export { especificationsRoutes }