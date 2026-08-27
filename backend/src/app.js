import express from 'express';
import cors from 'cors';
import pesquisadorRouter from './routes/pesquisadorRouter.js'; 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pesquisadores', pesquisadorRouter);

export default app;