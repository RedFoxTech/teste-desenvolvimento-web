const User = require("../../../domain/entities/User");

class UserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async create({ name, password, email }) {
    const user = new User({ name, email, password });

    await this.userRepository.create({...user.getValues()});
    return { id: user.id };
  } 

  async existsUserByEmail({ email }) {
    const exists = await this.userRepository.existsUserByEmail({ email });
    return exists;
  }

  async findUserByEmail({ email }) {
    const user = await this.userRepository.findUserByEmail({ email });
    return user;
  }
}

module.exports = UserUseCase;