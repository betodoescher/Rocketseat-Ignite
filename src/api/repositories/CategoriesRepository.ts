import { getRepository, Repository } from 'typeorm'
import { ICreateCategoryDTO, CategoriesInterface } from '../interfaces/CategoriesInterface'
import { Category } from '../models/Category'




class CategoriesRepository implements CategoriesInterface {
    private repository: Repository<Category>


    constructor() {
        this.repository = getRepository(Category)
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description
        })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        return await this.repository.find()
    }

    async findByName(name: String): Promise<Category> {
        return await this.repository.findOne({ name })
    }
}

export { CategoriesRepository }
