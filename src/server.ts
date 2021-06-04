import app from './app'


app.listen(3333, () => console.log('Server is running!'))

// import express from "express"



// function loggerMiddleware(request: express.Request, response: express.Response, next) {
//     console.log(`${request.method} ${request.path}`);
//     next();
// }

// const app = express()

// app.use(loggerMiddleware)

// app.use(express.json())



// app.listen(3333, () => console.log('Server is running!'))