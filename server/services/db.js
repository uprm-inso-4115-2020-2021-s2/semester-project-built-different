const { Pool } = require("pg");

const initializeDB = () => {
  console.log(process.env.NODE_ENV);
  const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "rum2go:1.0-db",
    host: "db",
    port: 5432,
  });

  return pool;
};

module.exports = initializeDB;
