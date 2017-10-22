const S_PORT = Number(process.env.S_PORT) || 3000;

const express = require('express');
const app = express();

const publicRouter = express.Router();

require(`${__dirname}/routes/loader`)(publicRouter);

app.use(publicRouter);

app.listen(S_PORT, () => {
  console.log(`App listening at port ${S_PORT}`);
});
