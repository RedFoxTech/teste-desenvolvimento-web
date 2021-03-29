const { Router } = require("express");

const userController = require("../adapters/user/UserAdapter");

const userRoutes = Router();

userRoutes.post('/register', async (req, res) => await userController.store(req, res));
userRoutes.post('/login', async (req, res) => await userController.login(req, res));

module.exports = userRoutes;