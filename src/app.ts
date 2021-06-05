import express from "express"
import cors from "cors"
import swaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json'

import { categoriesRoutes } from './routes/categories.routes'
import { especificationsRoutes } from './routes/especifications.routes'

class App {

    public express: express.Application

    public constructor() {
        this.express = express()

        this.middlewares()
        // this.routes()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())

        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
        this.express.use(categoriesRoutes)
        this.express.use(especificationsRoutes)
    }

    // private routes(): void {

    // }
}

export default new App().express