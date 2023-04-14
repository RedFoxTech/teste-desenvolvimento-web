import { Request, Response } from "express";
import { UserRegisterService } from "../services/UserRegisterService";
import { UserLoginService } from "../services/UserLoginService";

export class UserController {
  async register(req:Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const userRegisterService = new UserRegisterService();

      const user = await userRegisterService.execute({
        name,
        email,
        password
      });

      return res.status(201).json(user);

    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }

  async login(req:Request, res: Response) {
    try {
      const {email, password} = req.body;
      const userLoginService = new UserLoginService();

      const login = await userLoginService.execute({
        email,
        password
      });

      return res.status(201).json(login);

    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}
