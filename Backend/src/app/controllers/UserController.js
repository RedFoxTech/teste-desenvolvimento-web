import * as Yup from 'yup'
import bcrypt from 'bcryptjs'

import User from '../models/User'

import AppError from '../errors/AppError'

class UserController {
  async store(req, res) {
    const { email } = req.body

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório!'),
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

    const userExists = await User.findOne({ where: { email } })

    if (userExists) {
      throw new AppError('User already exist.')
    }

    const { id, name } = await User.create(req.body)

    return res.status(201).json({
      id,
      name,
    })
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    })

    try {
      await schema.validate(req.body, { abortEarly: false })
    } catch (err) {
      throw new AppError(err)
    }

    const { email, oldPassword } = req.body

    const user = await User.findByPk(req.userId)

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } })

      if (userExists) {
        throw new AppError('User already exists.')
      }
    }
    const checkPassword = await bcrypt.compare(oldPassword, user.password_hash)

    if (oldPassword && !checkPassword) {
      throw new AppError('Password does not match.', 401)
    }

    const { id, name } = await user.update(req.body)

    return res.json({
      id,
      name,
    })
  }
}

export default new UserController()
