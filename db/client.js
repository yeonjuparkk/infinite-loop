const { Client } = require("pg");
const { DB_USER, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = client;
