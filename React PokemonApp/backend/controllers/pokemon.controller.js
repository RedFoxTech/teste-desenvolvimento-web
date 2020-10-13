const db = require("../models");
const Pokemon = db.pokemons;
const Op = db.Sequelize.Op;

// Cria um novo objeto Pokemon
exports.create = (req, res) => {
  // Validando a requisição 
  if (!req.body.nome) {
    res.status(400).send({
      message: "O Conteúdo não pode ficar vázio!"
    });
    return;
  }

  // Criando o Pokemon
  const pokemon = {
    nome: req.body.nome,
    tipo: req.body.tipo,
    capturado: req.body.capturado ? req.body.capturado : false
  };

  // Save Tutorial in the database
  Pokemon.create(pokemon)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro aconteceu ."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Pokemon.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro aconteceu!."
      });
    });
};

// Acha um único Pokemon com id 
exports.findOne = (req, res) => {
  const id = req.params.id;

  Pokemon.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro de trazer um pokemon com " + id
      });
    });
};

// Atualizar o objeto do Pokemon
exports.update = (req, res) => {
  const id = req.params.id;

  Pokemon.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O Tutorial atualizado com sucesso!."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pokemon.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O pokemon foi deletado com sucesso!"
        });
      } else {
        res.send({
          message: `Não foi possível deletar o pokemon com di=${id}. Talvez ele não exista!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível deletar o pokemon" + id
      });
    });
};

// Deleta todos os Pokemons do banco de dados
exports.deleteAll = (req, res) => {
  Pokemon.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} O Pokemon foi deletado com sucesso!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// acha o Pokemon que foi publicado!
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro aconteceu!."
      });
    });
};