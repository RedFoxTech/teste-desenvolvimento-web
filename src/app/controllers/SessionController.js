import User from '../models/User';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.json({
        error:
          'Invalid email or password, please check your credentials and try again',
      });
    }

    if (!(await user.checkPassword(password))) {
      return response.status(401).json({
        error:
          'Invalid email or password, please check your credentials and try again ',
      });
    }

    const { id, name } = user;
    const token = await user.generateToken({ user });
    return response.json({
      user: {
        id,
        name,
        email,
      },
      token,
    });
  }
}

export default new SessionController();
