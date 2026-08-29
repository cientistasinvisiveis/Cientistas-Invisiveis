import express from 'express';
import path from 'path';
import cors from 'cors';
import pesquisadorRouter from './routes/pesquisadorRouter.js'; 
import indexRoutes from './routes/indexRouter.js'

const app = express();

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', '..', 'public')));


app.use('/', indexRoutes);

app.use('/api/pesquisadores', pesquisadorRouter);

export default app;