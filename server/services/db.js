const { Pool } = require("pg");

const initializeDB = () => {
  console.log(process.env.NODE_ENV);
  const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "rum2go:1.0-db",
    host: process.env.NODE_ENV === "production" ? "db" : "localhost",
    port: 5432,
  });

  pool.connect();

  pool.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
  });

  return pool;
};

module.exports = initializeDB;
