
import { CategoriesInterface } from '../interfaces/CategoriesInterface';


interface IRequest {
    name: String
    description: String
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesInterface) { }

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService }