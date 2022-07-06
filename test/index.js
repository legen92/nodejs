const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth.router");
const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("hello word");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users/", productRouter);

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
