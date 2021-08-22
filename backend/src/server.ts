import express from 'express';
import path from 'path';
import cors from 'cors';

import './database';
import { routes } from './routes';
import 'reflect-metadata';

const app = express();


app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(cors());
app.use(express.json())
app.use(routes);
app.listen(3333, () => {console.log('sever running in port 3333')});