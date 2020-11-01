const mysqlx = require('@mysql/xdevapi');
const { DATABASE } = require('../config');

const config = {
  user: DATABASE.DB_USER,
  password: DATABASE.DB_PASS,
  host: DATABASE.DB_HOST,
  port: DATABASE.DB_PORT,
};

let schema;

function connection() {
  return schema
    ? Promise.resolve(schema)
    : mysqlx
      .getSession(config)
      .then((session) => {
        schema = session.getSchema(DATABASE.DB_NAME);
        return schema;
      })
      .catch(() => {
        process.exit(1);
      });
}

module.exports = connection;
