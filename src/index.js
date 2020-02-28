require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Rota / funcionando!');
});

require('./app/controllers/index')(app);

app.listen(port, () => {
  console.log(`Restful API Server started on port: ${port}`);
});
