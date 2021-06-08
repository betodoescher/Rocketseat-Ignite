import { User } from "../models/User"

// DTO = Data Transfer Object
interface ICreateUserDTO {
    name: string,
    password: string
    email: string
    driver_license: string
}

interface UsersInterface {
    findByName(name: string): Promise<User>
    findByEmail(email: string): Promise<User>
    list(): Promise<User[]>
    create({
        name,
        password,
        email,
        driver_license
    }: ICreateUserDTO): Promise<void>
}

export { ICreateUserDTO, UsersInterface }