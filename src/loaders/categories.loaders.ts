import { CategoriesRepository } from '../api/repositories/CategoriesRepository'
import { CategoryService } from '../api/services/CategoryService'
import { ImportCategoryService } from '../api/services/ImportCategoryService'
import { CategoriesController } from '../api/controllers/CategoriesController'

export default (): CategoriesController => {

    const categoriesRepository = new CategoriesRepository()
    const categoryService = new CategoryService(categoriesRepository)
    const importCategoryService = new ImportCategoryService(categoriesRepository)
    const categoriesController = new CategoriesController(categoryService, importCategoryService)

    return categoriesController
}
