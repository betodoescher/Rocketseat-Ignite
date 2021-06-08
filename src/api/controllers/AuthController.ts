import {
    Request,
    Response
} from "express";

import { AuthService } from '../services/AuthService'

class AuthController {

    constructor(private authService: AuthService) {

    }

    public async store(request: Request, response: Response): Promise<Response> {
        const {
            email,
            password,
        } = request.body;

        const authenticateInfo = await this.authService.execute({
            password,
            email
        })

        return response.json(authenticateInfo);
    }
}

export { AuthController }

