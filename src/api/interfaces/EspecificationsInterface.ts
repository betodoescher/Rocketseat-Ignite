import { Especification } from "../models/Especification"

// DTO = Data Transfer Object
interface ICreateEspecificationDTO {
    name: string,
    description: string
}

interface EspecificationsInterface {
    findByName(name: string): Promise<Especification>
    list(): Promise<Especification[]>
    create({ name, description }: ICreateEspecificationDTO): Promise<void>
}

export { ICreateEspecificationDTO, EspecificationsInterface }