import { Category } from "../models/Category"

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
    name: String,
    description: String
}

interface CategoriesInterface {
    findByName(name: String): Category
    list(): Category
    create({ name, description }: ICreateCategoryDTO): void
}

export { ICreateCategoryDTO, CategoriesInterface }