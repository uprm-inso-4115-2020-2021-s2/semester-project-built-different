const { Pool } = require('pg');

const initializeDB = () => {
  const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'rum2go:1.0-db',
    host: 'localhost',
    port: 5432,
  });

  return pool;
};

module.exports = initializeDB;
