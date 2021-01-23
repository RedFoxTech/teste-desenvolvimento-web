const connection = require('../database/connection');

module.exports = {

    //INDEX - Rota para realizar listagem de todos os pokemons, listando 20 por página.

    async index(req, res) {
        const { page } = req.query;
        const [count] = await connection('pokemons').count();

        const pokemons = await connection('pokemons')
            .limit(20)
            .offset((page - 1) * 20)
            .select('*');

        const total = count['count(*)'];

        res.header('X-Total-Count', count['count(*)']);

        return res.json([{ total }, pokemons]);
    },

    // CREATE - Rota para realizar cadastros de novos pokemons.

    async create(req, res) {
        const { Name } = req.body;

        const data = req.body;

        const consult = await connection('pokemons')
            .where('Name', Name)
            .first();

        if (!consult) {
            const newPokemon = await connection('pokemons').insert(data);

            return res.status(200).json(newPokemon);
        } else {
            return res.status(400).json({ Erro: 'Pokemon já existente em nosso sistema!' })
        }

    },

    // UPDATE - Rota para realizar alterações em pokemons já cadastrado.

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        const pokemon = await connection('pokemons')
            .select('*')
            .where('id', id)
            .first();

        if (pokemon) {
            await connection('pokemons')
                .where('id', id)
                .update(data);

            return res.status(200).json({ Sucesso: 'Pokemon alterado com sucesso!' });
        } else {
            return res.status(404).json({ Erro: 'Não foi encontrado nenhum pokemon para ser editado, tente novamente!' });
        }
    },

    // DELETE - Rota para deletar um pokemon do sistema.

    async delete(req, res) {
        const { id } = req.params;

        const consult = await connection('pokemons')
            .where('id', id)
            .first();

        if (consult) {
            await connection('pokemons')
                .where('id', id)
                .delete();

            return res.status(200).json({ Sucesso: 'Pokemon deletado com sucesso!' });
        } else {
            return res.json(404).json({ Erro: 'Não consegui excluir este pokemon, tente novamente!' });
        }
    },

    async search(req, res) {
        const { SearchWord } = req.body;

        if (isNaN(SearchWord)) {
            const search = await connection('pokemons')
                .where('Name', 'like', `%${SearchWord}%`)
                .select('*');
            if (search) {
                return res.status(200).json(search);
            } else {
                return res.status(404).json({ NotFound: 'Não encontramos nenhum pokemon com este nome' });
            }
        } else {
            const search = await connection('pokemons')
                .where('Pokedex_Number', SearchWord)
                .select('*');
            if (search) {
                return res.status(200).json(search);
            } else {
                return res.status(404).json({ NotFound: 'Não encontramos nenhum pokemon com este ID!' });
            }
        }


    }
}