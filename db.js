const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gaming_store",
  password: "2103",
  port: 5432,
});

module.exports = pool;