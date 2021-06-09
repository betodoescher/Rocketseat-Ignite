
import { AppError } from '../../errors/AppError';
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
            throw new AppError("Especification Already Exists!", 401);
        }

        await this.especificationsRepository.create({ name, description })
    }

    async list(): Promise<Especification[]> {
        return await this.especificationsRepository.list()
    }
}

export { EspecificationService }