import { getRepository, Repository } from 'typeorm'
import { hash } from "bcrypt"
import { ICreateUserDTO } from '../interfaces/UsersInterface'
import { User } from '../models/User'

class UsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({ name,
        password,
        email,
        driver_license }: ICreateUserDTO): Promise<void> {

        const passwordHash = await hash(password, 8)

        const user = this.repository.create({
            name,
            password: passwordHash,
            email,
            driver_license
        })

        await this.repository.save(user)
    }

    async list(): Promise<User[]> {
        return await this.repository.find()
    }

    async findByName(name: string): Promise<User> {
        return await this.repository.findOne({ name })
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email })
    }
}

export { UsersRepository }
