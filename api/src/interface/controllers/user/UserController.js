const { encrypt, isValidHash } = require("../../../drivers/security/bcrypt");
const { createToken } = require("../../../drivers/security/jwt");
const { isValidUserData } = require("../../../drivers/validate/joi/validateUserData");

class UserController {
  constructor({ userServices }) {
    this.userServices = userServices;
  }

  async store(req, res) {
    const { name, email, password } = req.body;
    
    try {
      if (!isValidUserData(name, email, password)) {
        return res.status(401).json({ error: 'Unspecified or incorrectly formatted data' });
      }

      const existsUser = await this.userServices.existsUserByEmail({ email });
      
      if (existsUser) {
        return res.status(401).json({ error: 'User with this email already exists' });
      }

      const passwordHash = await encrypt(password, 8);
      const { id } = await this.userServices.create({ name, email, password: passwordHash });
      const token = createToken({ id });
     
      return res.status(201).json({ name, email, token });
    } catch(err) {
      return res.status(500).json({ error: 'Internal error '});
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await this.userServices.findUserByEmail({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      if(!(await isValidHash(password, user.password))) {
        return res.status(401).json({ error: 'Password error' });
      }

      const token = createToken({ id: user.id });

      return res.status(200).json({ 
        id: user.id,
        name: user.name,
        email,
        token,
      });
    } catch (err) {
      return res.status(500).json({ error: 'Internal error' });
    }
  }
}

module.exports = UserController;
