import { prisma } from "../prisma";
import bcrypt from "bcrypt";

interface IUserLoginService {
  email: string;
  password: string;
}

interface IUserLoginServiceResponse {
  user: {
    id: string;
    name: string;
    email: string;
  },
  token: string;
}

export class UserLoginService {
  async execute({email, password}: IUserLoginService): Promise<IUserLoginServiceResponse> {

    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(!user) throw new Error('Email ou senha incorretos!');

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if(!isCorrectPassword) {
      throw new Error('Email ou senha incorretos!');
    }

    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
    }

    return {
      user: userResponse,
      token: 'ahyuiwrghuahrwrqweuwh'
    };
  }
}