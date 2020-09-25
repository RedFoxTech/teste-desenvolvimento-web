import express from 'express';
import cors from 'cors';
import routes from './routes';

const port = 3333;

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('server is running in ' + port)
});