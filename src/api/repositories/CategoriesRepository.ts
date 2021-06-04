import { Category } from '../models/Category'

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
    name: String,
    description: String
}

export class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateCategoryDTO): Category {
        const category = new Category()

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)

        return category
    }

    list(): Category[] {
        return this.categories
    }
}