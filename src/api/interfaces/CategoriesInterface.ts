import { Category } from "../models/Category"

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
    name: String,
    description: String
}

interface CategoriesInterface {
    findByName(name: String): Promise<Category>
    list(): Promise<Category[]>
    create({ name, description }: ICreateCategoryDTO): Promise<void>
}

export { ICreateCategoryDTO, CategoriesInterface }