const jwt = require("jsonwebtoken");

module.exports = {
  isAuthenticated: (req, res, next) => {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];

    if (token) {
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (payload) {
          req.user = payload;
          next();
        } else {
          res.status(403).json({
            message: "Authentication failed",
          });
          return;
        }
      } catch (err) {
        res.status(500).json({
          message: "Token error",
        });
      }
    }
  },
};
