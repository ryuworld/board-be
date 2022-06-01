const cors = require("cors");
const express = require("express");
const router = require('./router');

const PORT = 8081;

const app = express();

app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
  console.log("test:", PORT);
});
