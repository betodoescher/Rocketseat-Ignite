import express from "express"
import cors from "cors"
import { categoriesRoutes } from './routes/categories.routes'

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
        this.express.use(categoriesRoutes)
    }

    // private routes(): void {

    // }
}

export default new App().express