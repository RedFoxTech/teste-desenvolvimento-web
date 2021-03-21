import express, { json } from 'express';
import "./database/connection";
import "./config/excel_to_database";

const app = express();
const port = 3030;


app.use(json());

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})