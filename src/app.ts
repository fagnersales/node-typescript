import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

const mongooseURI = 'URL Connection for Mongoose'
class App {
    public express: express.Application

    public constructor() {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        mongoose.connect(mongooseURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        }, () => console.log('[DATABASE] Connected'))
    }

    private routes(): void {
        this.express.use(routes)
    }

}

export default new App().express
