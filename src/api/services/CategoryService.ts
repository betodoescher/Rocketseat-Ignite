
import { CategoriesInterface } from '../interfaces/CategoriesInterface';

import { Category } from '../models/Category';

import csvParse from 'csv-parse'

import fs from 'fs'


interface IRequest {
    name: String
    description: String
}

class CategoryService {
    constructor(private categoriesRepository: CategoriesInterface) { }

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }

        this.categoriesRepository.create({ name, description })
    }

    list(): Category[] {
        return this.categoriesRepository.list()
    }

    import(file: Express.Multer.File): void {

        const stream = fs.createReadStream(file.path)

        const parseFile = csvParse()

        stream.pipe(parseFile)

        parseFile.on('data', async (line) => {

            console.log(line)

        })

    }
}

export { CategoryService }