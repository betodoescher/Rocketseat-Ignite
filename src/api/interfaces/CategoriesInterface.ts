import { Category } from "../models/Category"

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface CategoriesInterface {
    findByName(name: string): Promise<Category>
    list(): Promise<Category[]>
    create({ name, description }: ICreateCategoryDTO): Promise<void>
}

export { ICreateCategoryDTO, CategoriesInterface }