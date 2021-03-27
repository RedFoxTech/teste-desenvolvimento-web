const UserUseCase = require("../../../application/use-cases/user/UserUseCase");
const UserRepository = require("../../../infra/repositories/postgres/knex/user/UserRepository");
const UserController = require("../../controllers/user/UserController");

const userRepository = new UserRepository();
const userUseCase = new UserUseCase({ userRepository });
const userController = new UserController({ userServices: userUseCase });

module.exports = userController;