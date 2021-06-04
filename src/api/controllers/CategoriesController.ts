import {
    Request,
    Response
} from "express";

import { CreateCategoryService } from '../services/CreateCategoryService'

import { CategoriesRepository } from '../repositories/CategoriesRepository'


class CategoriesController {

    constructor() {

    }

    public async index(request: Request, response: Response): Promise<Response> {

        return response.status(200).json((new CategoriesRepository()).list());
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const categoriesRepository = new CategoriesRepository();

        const categoryService = new CreateCategoryService(categoriesRepository)

        categoryService.execute({ name, description })


        return response.status(201).send();
    }
}

export { CategoriesController }

