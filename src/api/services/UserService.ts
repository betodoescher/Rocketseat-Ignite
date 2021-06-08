
import { UsersInterface } from '../interfaces/UsersInterface';

import { User } from '../models/User';


interface IRequest {
    name: string
    password: string
    email: string
    driver_license: string
}

class UserService {
    constructor(private usersRepository: UsersInterface) { }

    async execute({
        name,
        password,
        email,
        driver_license
    }: IRequest): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByName(name)

        if (userAlreadyExists) {
            throw new Error("User Already Exists!");
        }

        await this.usersRepository.create({
            name,
            password,
            email,
            driver_license
        })
    }

    async list(): Promise<User[]> {
        return await this.usersRepository.list()
    }
}

export { UserService }