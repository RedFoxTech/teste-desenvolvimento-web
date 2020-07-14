const HabitatController = require('../controllers/HabitatController');
const habitat = new HabitatController();

module.exports = app => {

    app.route(habitat.route().getPost)
        .get(habitat.show())
        .post(habitat.save())

    app.route(habitat.route().editRemove)
        .get(habitat.selectOne())
        .delete(habitat.remove())
        .put(habitat.edit())
}