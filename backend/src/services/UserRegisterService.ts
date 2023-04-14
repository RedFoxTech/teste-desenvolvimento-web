import { prisma } from "../prisma";
import bcrypt from "bcrypt";

interface IUserRegisterService {
  name: string
  email: string
  password: string
}

export class UserRegisterService {
  async execute({name, email, password}: IUserRegisterService) {
    const encryptedPassword = await bcrypt.hash(password, 10)
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: encryptedPassword,
      }
    })

    return user;
  }
}

