import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { userRoutes } from "./routes/userRouter";
import { pokemonsRoutes } from "./routes/pokemonsRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/pokemons", authMiddleware, pokemonsRoutes);

const PORT = 3001;

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
