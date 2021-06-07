import { Especification } from "../models/Especification"

// DTO = Data Transfer Object
interface ICreateEspecificationDTO {
    name: String,
    description: String
}

interface EspecificationsInterface {
    findByName(name: String): Promise<Especification>
    list(): Promise<Especification[]>
    create({ name, description }: ICreateEspecificationDTO): Promise<void>
}

export { ICreateEspecificationDTO, EspecificationsInterface }