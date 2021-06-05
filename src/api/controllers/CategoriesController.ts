import {
    Request,
    Response
} from "express";

import { CategoryService } from '../services/CategoryService'

import { ImportCategoryService } from '../services/ImportCategoryService'



class CategoriesController {

    constructor(private categoryService: CategoryService, private importCategoryService: ImportCategoryService) { }

    public async index(request: Request, response: Response): Promise<Response> {

        return response.status(200).json(this.categoryService.list());
    }

    public async store(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        this.categoryService.execute({ name, description })

        return response.status(201).send();
    }

    public async import(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        this.importCategoryService.execute(file)

        return response.status(200).send();
    }
}

export { CategoriesController }

