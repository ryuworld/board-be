import cors from "cors";
import express from "express";
import router from './router';

const PORT = 8081;

const app = express();

app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`test: http://localhost:${PORT}`);
});
