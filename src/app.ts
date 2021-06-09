
import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import "express-async-error"

import cors from "cors"
import swaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json'

import "./database"

import { AppError } from "./errors/AppError"
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
        this.express.use((err: Error, request: Request, response: Response, next: NextFunction) => {


            if (err instanceof AppError) {
                return response.status(err.statusCode).json({
                    message: err.message
                })
            }

            return response.status(500).json({
                status: "error",
                message: `Internal server error - ${err.message}`
            })

        })
    }

}

export default new App().express