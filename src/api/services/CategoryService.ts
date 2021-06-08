
import { CategoriesInterface } from '../interfaces/CategoriesInterface';

import { Category } from '../models/Category';

interface IRequest {
    name: string
    description: string
}

class CategoryService {
    constructor(private categoriesRepository: CategoriesInterface) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }

        await this.categoriesRepository.create({ name, description })
    }

    async list(): Promise<Category[]> {
        return await this.categoriesRepository.list()
    }
}

export { CategoryService }