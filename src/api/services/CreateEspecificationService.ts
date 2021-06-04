
import { EspecificationsInterface } from '../interfaces/EspecificationsInterface';


interface IRequest {
    name: String
    description: String
}

class CreateEspecificationService {
    constructor(private especificationsRepository: EspecificationsInterface) { }

    execute({ name, description }: IRequest) {
        const especificationAlreadyExists = this.especificationsRepository.findByName(name)

        if (especificationAlreadyExists) {
            throw new Error("Especification Already Exists!");
        }

        this.especificationsRepository.create({ name, description })
    }
}

export { CreateEspecificationService }