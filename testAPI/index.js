const express = require("express");
const UsersRouter = require("./router/users.router");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/users", UsersRouter);

app.listen("8080", () => {
  console.log("server running ...");
});
