const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(helmet());
app.use(morgan("combined"));
app.get("/test", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`The server is running 3030`);
});

console.log("Server started on: " + PORT);
