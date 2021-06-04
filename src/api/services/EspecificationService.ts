
import { EspecificationsInterface } from '../interfaces/EspecificationsInterface';
import { Especification } from '../models/Especification';


interface IRequest {
    name: String
    description: String
}

class EspecificationService {
    constructor(private especificationsRepository: EspecificationsInterface) { }

    execute({ name, description }: IRequest) {
        const especificationAlreadyExists = this.especificationsRepository.findByName(name)

        if (especificationAlreadyExists) {
            throw new Error("Especification Already Exists!");
        }

        this.especificationsRepository.create({ name, description })
    }

    list(): Especification[] {
        return this.especificationsRepository.list()
    }
}

export { EspecificationService }