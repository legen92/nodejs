const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth.router");
const bookRouter = require("./routers/book.router");
const cors = require('cors')


const app = express();
const port = 3000;
app.use(cors())
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/book", bookRouter);


app.use(express.static((__dirname + '/public/images')))

app.listen(port, () => {
  console.log(`server is running at port http://localhost:${port} ...`);
});
