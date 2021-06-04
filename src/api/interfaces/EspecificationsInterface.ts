import { Especification } from "../models/Especification"

// DTO = Data Transfer Object
interface ICreateEspecificationDTO {
    name: String,
    description: String
}

interface EspecificationsInterface {
    findByName(name: String): Especification
    list(): Especification[]
    create({ name, description }: ICreateEspecificationDTO): void
}

export { ICreateEspecificationDTO, EspecificationsInterface }