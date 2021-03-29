const { db } = require("../../../../../drivers/database/postgres/knex");

class UserRepository {
  async create({ id, name, password, email }) {
    await db('users')
      .insert({ id, name, password, email });

    return;
  }

  async existsUserByEmail({ email }) {
    const row = await db('users')
      .where({ email })

    return row.length > 0 ? true : false;
  }

  async findUserByEmail({ email }) {
    const row = await db('users')
      .where({ email });

    return row.length > 0 ? row[0] : null;
  }
}

module.exports = UserRepository;