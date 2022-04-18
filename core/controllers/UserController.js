const {
  insertUser,
  findUserByEmail,
} = require("../services/postgres/usersService");
const UsersValidator = require("../validators/users");

module.exports = {
  getUsers: (req, res) => {
    res.status(200);
    res.json({ message: "success", data: [] });
  },
  getUserById: (req, res) => {
    res.status(200);
    res.json({
      message: "success",
      data: {
        name: "Dava",
        age: 17,
      },
    });
  },
  createUser: async (req, res, next) => {
    try {
      UsersValidator.validateUserPayload(req.body);

      const user = await findUserByEmail(req.body.email);

      if (user.length > 0) {
        res.status(400).json({
          message: "User already exist!",
        });
        return;
      }

      const newUser = await insertUser(req.body);
      res.send({
        message: "User successfully created!",
        data: newUser,
      });
    } catch (err) {
      next(err);
    }
  },
  deleteUser: (req, res) => {
    res.status(200);
  },
  updateUser: (req, res) => {
    res.status(200);
  },
};
