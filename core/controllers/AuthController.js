const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  findUserByEmail,
  findUserById,
} = require("../services/postgres/usersService");

module.exports = {
  loginAuth: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await findUserByEmail(email);

      if (user.length > 0) {
        const isPasswordVerify = await bcrypt.compare(
          password,
          user[0].password
        );

        if (isPasswordVerify) {
          const payload = {
            id: user[0].id,
          };

          const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

          if (token) {
            res.status(200).json({
              message: "Login success",
              token,
              user: user[0],
            });
          }
        }
      } else {
        res.status(404).json({
          message: "User not found",
        });
      }
    } catch (err) {
      next(err);
    }
  },

  checkAuth: async (req, res, next) => {
    try {
      const user = await findUserById(req.user.id);
      res.json({
        message: "Success",
        data: user[0],
      });
    } catch (err) {}
  },
};
