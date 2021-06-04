import {
    Request,
    Response
} from "express";

import { EspecificationService } from '../services/EspecificationService'

import { EspecificationsRepository } from '../repositories/EspecificationsRepository'


class EspecificationsController {

    constructor(private especificationService: EspecificationService) {

    }

    public async index(request: Request, response: Response): Promise<Response> {

        return response.status(200).json(this.especificationService.list());
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        this.especificationService.execute({ name, description })

        return response.status(201).send();
    }
}

export { EspecificationsController }

