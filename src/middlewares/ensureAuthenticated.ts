import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { UsersRepository } from "../api/repositories/UsersRepository";
import { AppError } from "../errors/AppError";

interface IPayload {
    sub: string
}



export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {

        const { sub: userEmail } = verify(token, "6825bdfbbb24ce60f816b8e5757e40cf") as IPayload

        const usersRepository = new UsersRepository()

        const user = await usersRepository.findByEmail(userEmail)

        if (!user) {
            throw new AppError("User does not exists!", 401)
        }

        next()
    } catch {
        throw new AppError("Invalid token!", 401)

    }

}