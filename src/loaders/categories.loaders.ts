import { CategoriesRepository } from '../api/repositories/CategoriesRepository'
import { CategoryService } from '../api/services/CategoryService'
import { CategoriesController } from '../api/controllers/CategoriesController'

const categoriesRepository = CategoriesRepository.getInstance()
const categoryService = new CategoryService(categoriesRepository)
const categoriesController = new CategoriesController(categoryService)

export { categoriesController }