import "dotenv/config";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3001;

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
