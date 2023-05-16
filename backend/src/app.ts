import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express';
// import cors from 'cors';

const app = express()

// app.use(cors())

app.use(express.json())


// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

export default app