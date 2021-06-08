
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { UsersInterface } from '../interfaces/UsersInterface';

interface IRequest {
    email: string
    password: string
}
interface IResponse {
    user: {
        name: string,
        email: string,
    }
    token: string
}

class AuthService {
    constructor(private usersRepository: UsersInterface) { }

    async execute({
        email,
        password,
    }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new Error("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email or password incorrect!");
        }

        const token = sign({}, "6825bdfbbb24ce60f816b8e5757e40cf", {
            subject: user.email,
            expiresIn: "1d"
        })

        return {
            user,
            token,
        }

    }


}

export { AuthService, IResponse }