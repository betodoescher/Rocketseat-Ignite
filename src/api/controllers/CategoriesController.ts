import * as express from "express";
// import { body, validationResult } from 'express-validator';
import { CategoriesRepository } from "../repositories/CategoriesRepository";

export class CategoriesController {

    constructor() {
    }

    public async index(request: express.Request, response: express.Response): Promise<express.Response> {
        return response.status(200).json((new CategoriesRepository()).list());
    }

    public async store(request: express.Request, response: express.Response): Promise<express.Response> {
        const { name, description } = request.body;

        const category = (new CategoriesRepository()).create({ name, description });

        return response.status(201).json(category);
    }
}

