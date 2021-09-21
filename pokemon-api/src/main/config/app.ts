import 'reflect-metadata';
import setupSwagger from './swagger';
import express from 'express';
import configRoutes from './routes';

const app = express();
setupSwagger(app);
app.use(express.json());
configRoutes(app);
export default app;
