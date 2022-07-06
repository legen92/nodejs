const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth.router");
const userRouter = require("./routers/user.router");
const productsRouter = require("./routers/products.router");


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", productsRouter);

app.listen(port, () => {
  console.log(`server is running at port http://localhost:${port} ...`);
});
