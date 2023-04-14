import express from 'express';
import { UserController } from '../controllers/UserController';

export const userRoutes = express.Router();
const userController = new UserController();

userRoutes.post("/", async (req, res) => {
  await userController.register(req, res)
})

userRoutes.post("/login", async (req, res) => {
  await userController.login(req, res)
})
