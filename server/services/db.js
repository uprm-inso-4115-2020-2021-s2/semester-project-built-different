const { Pool } = require("pg");

const initializeDB = async () => {
  console.log(process.env.NODE_ENV);
  const pool = await new Pool({
    user: "postgres",
    password: "postgres",
    database: "rum2go:1.0-db",
    host: "db",
    port: 5432,
  });
  try {
    await pool.query(
      `
      CREATE TABLE Station
      (
        name VARCHAR(250) NOT NULL,
        sid SERIAL NOT NULL,
        description VARCHAR(150) NOT NULL,
        PRIMARY KEY (sid)
      );

      CREATE TABLE Meal
      (
        mid SERIAL NOT NULL,
        name VARCHAR(150) UNIQUE NOT NULL,
        price FLOAT NOT NULL,
        comments VARCHAR(250) NOT NULL,
        available BOOLEAN NOT NULL,
        PRIMARY KEY (mid),
        sid INT NOT NULL,
        FOREIGN KEY (sid) REFERENCES Station(sid)
      );

      CREATE TABLE Customer
      (
        cid SERIAL NOT NULL,
        name VARCHAR(150) NOT NULL,
        password VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL,
        PRIMARY KEY (cid),
        UNIQUE (email)
      );

      CREATE TABLE Contact_Information
      (
        phone VARCHAR(15) NOT NULL,
        payment_type VARCHAR(25) NOT NULL,
        cid INT NOT NULL,
        FOREIGN KEY (cid) REFERENCES Customer(cid)
      );

      CREATE TABLE Payment
      (
        pid SERIAL NOT NULL,
        status VARCHAR(20) NOT NULL,
        timestamp DATE NOT NULL,
        amount FLOAT NOT NULL,
        cid INT NOT NULL,
        FOREIGN KEY (cid) REFERENCES Customer(cid)
      );

      CREATE TABLE Order_Details
      (
        oid SERIAL NOT NULL,
        timestamp DATE NOT NULL,
        status VARCHAR NOT NULL,
        comment VARCHAR(150) NOT NULL,
        order_total FLOAT NOT NULL,
        cid INT NOT NULL,
        FOREIGN KEY (cid) REFERENCES Customer(cid)
      );

  `,
    );
  } catch (err) {
    console.log(err);
  }

  return pool;
};

module.exports = initializeDB;
