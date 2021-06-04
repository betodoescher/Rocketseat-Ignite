
import { CategoriesInterface } from '../interfaces/CategoriesInterface';
import { Category } from '../models/Category';


interface IRequest {
    name: String
    description: String
}

class CategoryService {
    constructor(private categoriesRepository: CategoriesInterface) { }

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }

        this.categoriesRepository.create({ name, description })
    }

    list(): Category[] {
        return this.categoriesRepository.list()
    }
}

export { CategoryService }