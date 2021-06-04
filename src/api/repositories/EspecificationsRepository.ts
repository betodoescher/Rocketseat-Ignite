import { ICreateEspecificationDTO } from '../interfaces/EspecificationsInterface'
import { Especification } from '../models/Especification'



class EspecificationsRepository {
    private especifications: Especification[]

    constructor() {
        this.especifications = []
    }

    create({ name, description }: ICreateEspecificationDTO): Especification {
        const especification = new Especification()

        Object.assign(especification, {
            name,
            description,
            created_at: new Date()
        })

        this.especifications.push(especification)

        return especification
    }

    list(): Especification[] {
        return this.especifications
    }

    findByName(name: String): Especification {
        return this.especifications.find((especification) => especification.name === name)
    }
}

export { EspecificationsRepository }
