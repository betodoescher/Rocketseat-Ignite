
import { EspecificationsInterface } from '../interfaces/EspecificationsInterface';

import { Especification } from '../models/Especification';


interface IRequest {
    name: string
    description: string
}

class EspecificationService {
    constructor(private especificationsRepository: EspecificationsInterface) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const especificationAlreadyExists = await this.especificationsRepository.findByName(name)

        if (especificationAlreadyExists) {
            throw new Error("Especification Already Exists!");
        }

        await this.especificationsRepository.create({ name, description })
    }

    async list(): Promise<Especification[]> {
        return await this.especificationsRepository.list()
    }
}

export { EspecificationService }