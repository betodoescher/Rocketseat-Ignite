import {
    Request,
    Response
} from "express";

import { CreateEspecificationService } from '../services/CreateEspecificationService'

import { EspecificationsRepository } from '../repositories/EspecificationsRepository'


class EspecificationsController {

    constructor() {

    }

    public async index(request: Request, response: Response): Promise<Response> {

        return response.status(200).json((new EspecificationsRepository()).list());
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const especificationsRepository = new EspecificationsRepository();

        const especificationService = new CreateEspecificationService(especificationsRepository)

        especificationService.execute({ name, description })


        return response.status(201).send();
    }
}

export { EspecificationsController }

