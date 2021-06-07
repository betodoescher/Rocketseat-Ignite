import { Router } from 'express'
import Multer from 'multer'
import categoriesController from '../loaders/categories.loaders'

const categoriesRoutes = Router()

const upload = Multer({
    dest: 'storage'
})

categoriesRoutes.route('/categories')
    .get((request, response) => {
        return categoriesController().index(request, response)
    })
    .post((request, response) => {
        return categoriesController().store(request, response)
    })
categoriesRoutes.route('/categories/import')
    .post(upload.single('file'), (request, response) => {
        return categoriesController().import(request, response)
    })

export { categoriesRoutes }