const TypeController = require('../controllers/TypeController')
const typeController = new TypeController();

module.exports = app => {
    app.route(typeController.route().getPost)
        .get(typeController.show())
        .post(typeController.save())

    app.route(typeController.route().editRemove)
        .get(typeController.selectOne())
        .put(typeController.edit())
        .delete(typeController.remove())
}