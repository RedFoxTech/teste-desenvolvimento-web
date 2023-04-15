import { prisma } from "../prisma";

interface IGetUserByIdService {
  id: string
}

export class GetUserByIdService {
  async execute({ id }: IGetUserByIdService) {
    
    const findUser = await prisma.user.findFirst({
      where: {
        id
      }
    })

    const user = {
      id: findUser?.id,
      name: findUser?.name,
      email: findUser?.email,
    }

    return user;
  }
}

