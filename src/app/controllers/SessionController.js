import User from '../models/User';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
      return response
        .status(401)
        .json(
          'Invalid email or password, please check your credentials and try again'
        );
    }

    if (!(await user.compareHash(password))) {
      return response
        .status(401)
        .json(
          'Invalid email or password, please check your credentials and try again'
        );
    }

    return response.json({ user, token: User.generateToken(user) });
  }
}

export default new SessionController();
