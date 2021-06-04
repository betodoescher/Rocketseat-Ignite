import {
    Request,
    Response
} from "express";

import { CategoryService } from '../services/CategoryService'

import { CategoriesRepository } from '../repositories/CategoriesRepository'

class CategoriesController {

    constructor(private categoryService: CategoryService) { }

    public async index(request: Request, response: Response): Promise<Response> {

        return response.status(200).json(this.categoryService.list());
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        this.categoryService.execute({ name, description })

        return response.status(201).send();
    }
}

export { CategoriesController }

