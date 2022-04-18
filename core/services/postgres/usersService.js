const bcrypt = require("bcrypt");
const models = require("../../models");

module.exports = {
  insertUser: async ({ name, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await models.User.create({
      name,
      email,
      password: hashedPassword,
    });
    return newUser;
  },

  findUserByEmail: async (email) => {
    const user = await models.User.findAll({
      where: {
        email,
      },
    });
    return user;
  },

  findUserById: async (id) => {
    const user = await models.User.findAll({
      where: {
        id,
      },
    });
    return user;
  },
};
