const connection = require('../database/connection');

const bcrypt = require('bcrypt');

var DateNow = new Date();

module.exports = {

    async index(req, res) { // listar todos os usuários cadastrados
        const users = await connection('users').select('id', 'name', 'email');
        if (users) {
            return res.status(200).json(users);
        } else {
            return res.status(200).json({ Alert: 'Nenhum usuário cadastrado no sistema' });
        }
    },

    async create(req, res) { // cadastrar novo usuário
        const { name, email, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const consult = await connection('users')
            .select('*')
            .where('email', email)
            .first();

        if (!consult) {
            await connection('users').insert({
                name,
                email,
                password: hash,
                created_at: DateNow,
                updated_at: DateNow
            });
            return res.status(200).json({ Sucesso: "Usuário criado com sucesso!" });
        } else {
            return res.status(404).json({ Erro: "E-mail já cadastrado!" })
        }
    },

    async login(req, res) { // Login de usuário
        const { email, password } = req.body;

        const consult = await connection('users')
            .select('id', 'name', 'email')
            .where('email', email)
            .first();

        const findPassword = await connection('users').select('password').where('email', email).first();
        if (consult) {
            if (findPassword) {
                const match = await bcrypt.compare(password, findPassword.password);
                if (match) {
                    return res.status(200).json(consult);
                } else {
                    return res.status(400).json({ Error: 'A senha não confere!' })
                }
            }
        } else {
            return res.status(404).json({ Error: 'Email não encontrado no sistema' })
        }

    }
}