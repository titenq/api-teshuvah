require('dotenv').config();
const mongoose = require('mongoose');

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const db = process.env.DB_NAME;

const connectionString = `mongodb://${user}:${pass}@${host}:${port}/${db}`;

mongoose.connect(connectionString, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
