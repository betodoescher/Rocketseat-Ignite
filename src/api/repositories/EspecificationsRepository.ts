import { ICreateEspecificationDTO } from '../interfaces/EspecificationsInterface'
import { Especification } from '../models/Especification'



class EspecificationsRepository {
    private especifications: Especification[]

    // Singleton Pattern
    private static INSTANCE: EspecificationsRepository

    private constructor() {
        this.especifications = []
    }

    public static getInstance(): EspecificationsRepository {

        if (!EspecificationsRepository.INSTANCE) {
            EspecificationsRepository.INSTANCE = new EspecificationsRepository()
        }

        return EspecificationsRepository.INSTANCE

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
