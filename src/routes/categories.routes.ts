import { Router } from 'express'
import { categoriesController } from '../loaders/categories.loaders'

const categoriesRoutes = Router()

categoriesRoutes.route('/categories')
    .get((request, response) => {
        return categoriesController.index(request, response)
    })
    .post((request, response) => {
        return categoriesController.store(request, response)
    })

export { categoriesRoutes }