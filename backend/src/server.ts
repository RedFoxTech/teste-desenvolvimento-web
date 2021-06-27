import express from 'express';
import cors from 'cors';
import {routes} from './routes'
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3334, () => console.log('🚀 Server ON - 3334'));

