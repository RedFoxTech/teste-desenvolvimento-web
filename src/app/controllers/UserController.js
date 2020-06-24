import User from '../models/User';

class UserController {
  async store(request, response) {
    const UserExists = await User.findOne({
      where: { email: request.body.email },
    });

    if (UserExists) {
      return response.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email } = await User.create(request.body);

    return response.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
