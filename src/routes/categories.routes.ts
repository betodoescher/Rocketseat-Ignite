import { Router } from 'express'

import { CategoriesController } from '../api/controllers/CategoriesController'

// import { CategoriesRepository } from '../api/repositories/CategoriesRepository'

const categoriesRoutes = Router()
// const categoriesRepository = new CategoriesRepository()
const categoriesController = new CategoriesController()


categoriesRoutes.route('/categories')
    .get(categoriesController.index)
    .post(categoriesController.store)
    .put((req, res) => {

    });

export { categoriesRoutes }