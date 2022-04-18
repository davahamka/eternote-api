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
  createUser: (req, res) => {
    res.status(200);
    res.json({
      message: "User created successfully",
    });
  },
  deleteUser: (req, res) => {
    res.status(200);
  },
  updateUser: (req, res) => {
    res.status(200);
  },
};
