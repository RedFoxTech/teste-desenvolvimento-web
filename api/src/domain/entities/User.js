const { v4 } = require("uuid");

class User {
  constructor({ name, email, password }) {
    this.id = v4();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getValues() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    }
  }
}

module.exports = User;