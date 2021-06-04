import { Router } from 'express'

import { CategoriesController } from '../api/controllers/CategoriesController'


const categoriesRoutes = Router()
const categoriesController = new CategoriesController()


categoriesRoutes.route('/categories')
    .get(categoriesController.index)
    .post(categoriesController.store)

export { categoriesRoutes }