import express from 'express';
import path from 'path';
import cors from 'cors';
import pesquisadorRouter from './routes/pesquisadorRouter.js'; 
import indexRoutes from './routes/indexRouter.js'
import renderAreaPesquisa from './routes/areaPesquisaRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'backend', 'src', 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));


app.use('/', indexRoutes);
app.use('/api/pesquisadores', pesquisadorRouter);
app.use('/', renderAreaPesquisa);

export default app;