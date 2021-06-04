import { ICreateCategoryDTO } from '../interfaces/CategoriesInterface'
import { Category } from '../models/Category'



class CategoriesRepository {
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

    findByName(name: String): Category {
        return this.categories.find((category) => category.name === name)
    }
}

export { CategoriesRepository }
