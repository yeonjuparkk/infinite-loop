const { Client } = require("pg");
const { BITIO_KEY } = process.env;

const client = new Client({
  user: "yeonjupark95",
  host: "db.bit.io",
  database: "yeonjupark95/plantarrium",
  password: BITIO_KEY,
  port: 5432,
  ssl: true,
});

module.exports = client;