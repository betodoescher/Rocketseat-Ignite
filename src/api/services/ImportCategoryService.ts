import { Category } from '../models/Category';
import { CategoriesInterface } from '../interfaces/CategoriesInterface';
import csvParse from 'csv-parse'
import fs from 'fs'


interface IImportCategory {
    name: String
    description: String
}

class ImportCategoryService {
    constructor(private categoriesRepository: CategoriesInterface) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {

        return new Promise((resolve, reject) => {

            const categories: IImportCategory[] = []

            const stream = fs.createReadStream(file.path)

            const parseFile = csvParse()

            stream.pipe(parseFile)

            parseFile.on('data', async (line) => {

                const [name, description] = line

                categories.push({
                    name,
                    description
                })

            }).on('end', () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            }).on('error', (err) => {
                reject(err)
            })

        })
    }

    async execute(file: Express.Multer.File): Promise<void> {

        const categories = await this.loadCategories(file)

        categories.map(async (category) => {
            const { name, description } = category

            const existCategory = this.categoriesRepository.findByName(name)

            if (!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })

    }
}

export { ImportCategoryService }