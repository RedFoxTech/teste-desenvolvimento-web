import express, { json } from 'express';
import cors from "cors";
import "./database/connection";
import "./config/excel_to_database";
import routes from './routes';

const app = express();
const port = 3030;


app.use(cors());
app.use(json());
app.use(routes);

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})