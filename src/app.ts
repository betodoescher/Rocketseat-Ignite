import express from "express"
import cors from "cors"
import swaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json'

import "./database"

import { categoriesRoutes } from './routes/categories.routes'
import { especificationsRoutes } from './routes/especifications.routes'
import { usersRoutes } from './routes/users.routes'
import { authRoutes } from './routes/auth.routes'

class App {

    public express: express.Application

    public constructor() {
        this.express = express()

        this.middlewares()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())

        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
        this.express.use(categoriesRoutes)
        this.express.use(especificationsRoutes)
        this.express.use(usersRoutes)
        this.express.use(authRoutes)
    }

}

export default new App().express