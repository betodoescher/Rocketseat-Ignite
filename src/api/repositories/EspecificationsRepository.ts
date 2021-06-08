import { getRepository, Repository } from 'typeorm'
import { ICreateEspecificationDTO } from '../interfaces/EspecificationsInterface'
import { Especification } from '../models/Especification'



class EspecificationsRepository {
    private repository: Repository<Especification>

    constructor() {
        this.repository = getRepository(Especification)
    }

    async create({ name, description }: ICreateEspecificationDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description
        })

        await this.repository.save(category)
    }

    async list(): Promise<Especification[]> {
        return await this.repository.find()
    }

    async findByName(name: string): Promise<Especification> {
        return await this.repository.findOne({ name })
    }
}

export { EspecificationsRepository }
