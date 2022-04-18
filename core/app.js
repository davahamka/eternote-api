const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db/connection");
const NotFoundError = require("./exceptions/NotFoundError");
const { errorHandler } = require("./middlewares/error-handler-middleware");
const morgan = require("morgan");
const PORT = 5000;
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to ededede🦐 🧀",
  });
});

app.use(routes);

app.get("*", (req, res, next) => {
  try {
    throw new NotFoundError("error not found");
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);

const checkConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  checkConnection();
});
