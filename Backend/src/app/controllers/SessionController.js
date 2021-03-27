import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import * as Yup from 'yup'

import User from '../models/User'

import AppError from '../errors/AppError'

import authConfig from '../../config/auth'

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required('Email não informado ou incorreto!'),
      password: Yup.string()
        .required('Senha deve ter mínimo de 6 caracteres')
        .min(6),
    })

    try {
      await schema.validate(req.body, { abortEarly: false })
    } catch (err) {
      throw new AppError(err)
    }

    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw new AppError('User not found.', 401)
    }

    const checkPassword = await bcrypt.compare(password, user.password_hash)

    if (!checkPassword) {
      throw new AppError('Password does not match.', 401)
    }

    const { id, name } = user

    return res.json({
      user: {
        id,
        name,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
