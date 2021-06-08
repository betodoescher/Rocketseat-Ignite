import {
    Request,
    Response
} from "express";

import { UserService } from '../services/UserService'

class UsersController {

    constructor(private userService: UserService) {

    }

    public async index(request: Request, response: Response): Promise<Response> {

        return response.status(200).json(await this.userService.list());
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const {
            name,
            password,
            email,
            driver_license
        } = request.body;

        await this.userService.execute({
            name,
            password,
            email,
            driver_license
        })

        return response.status(201).send();
    }
}

export { UsersController }

