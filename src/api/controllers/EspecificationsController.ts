import {
    Request,
    Response
} from "express";

import { EspecificationService } from '../services/EspecificationService'

class EspecificationsController {

    constructor(private especificationService: EspecificationService) {

    }

    public async index(request: Request, response: Response): Promise<Response> {

        return response.status(200).json(await this.especificationService.list());
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        await this.especificationService.execute({ name, description })

        return response.status(201).send();
    }
}

export { EspecificationsController }

