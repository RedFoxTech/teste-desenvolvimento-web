import * as Yup from 'yup'

import Types from '../models/Types'
import Pokemons from '../models/Pokemons'

import AppError from '../errors/AppError'

class TypesController {
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required('Name required field!'),
          })

        try {
        await schema.validate(req.body, { abortEarly: false })
        } catch (err) {
        throw new AppError(err)
        }

        const resultTypes = await Types.create(req.body)

        const types = [
            { name: 'bug' },
            { name: 'dark' },
            { name: 'dragon' },
            { name: 'electric' },
            { name: 'fairy' },
            { name: 'fighting' },
            { name: 'fire' },
            { name: 'flying' },
            { name: 'ghost' },
            { name: 'grass' },
            { name: 'ground' },
            { name: 'ice' },
            { name: 'normal' },
            { name: 'poison' },
            { name: 'psychic' },
            { name: 'rock' },
            { name: 'steel' },
            { name: 'water' },
        ]

        const resultTypes = await Types.bulkCreate(types, {
            returning: true,
        })

        return res.status(201).json({
            resultTypes,
        })
    }

    async show(req, res) {
        const { id } = req.params

        const types = await Types.findByPk(id, {
            order: ['name'],
            attributes: ['id', 'name'],
            include: [
                {
                    model: Pokemons,
                    as: 'type1',
                    attributes: [
                        'name',
                        'generation',
                        'legendary',
                        'stat_total',
                        'atk',
                        'def',
                        'sta',
                        'cp39',
                        'cp40',
                    ],
                },
            ],
        })

        if (!types) {
            throw new AppError('Type not found.')
        }

        return res.json(types)
    }

    async index(req, res) {
        const types = await Types.findAll({
            order: ['name'],
            attributes: ['id', 'name'],
        })

        if (types.length === 0) {
            throw new AppError('There are no types forms.')
        }

        return res.json({
            types,
        })
    }

    async update(req, res) {
        const { id } = req.params

        const type = await Types.findByPk(id)

        if (!type) {
            throw new AppError('Type not found.')
        }

        const newType = await type.update(req.body)

        return res.json(newType)
    }
}

export default new TypesController()
