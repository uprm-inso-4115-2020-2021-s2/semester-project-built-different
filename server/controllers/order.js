const pool = require("../index");
console.log(pool);

/*
@TYPE:
  PUBLIC
@DESC:
  - Create a new order
@RETURN:
  - JSON order Object
*/
const ordersAdd = async (req, res, pool) => {
  let insertString =
    "INSERT INTO Order_Details (order_date, status, comment, order_total, c_id) VALUES ($1,$2,$3,$4,$5)";

  await pool.query(insertString, Object.values(req.body), (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
};
/*
@TYPE:
  PUBLIC
@DESC:
  - Fetch all orders that fit the filter, if none
  specified returns all order objects
@RETURN:
  - Array of order objects
*/

const ordersGet = async (req, res, pool) => {
  const { body } = req;

  let selectorString = "SELECT * FROM Order_Details";
  const selectors = Object.keys(body);

  if (selectors.length > 0) {
    selectorString += " WHERE ";
    selectors.forEach((filter, i) => {
      console.log(i, selectors.length);
      selectorString += `${filter}='${body[filter]}'`;
      if (i < selectors.length - 1) selectorString += " AND ";
    });
  }

  console.log(selectorString);

  await pool.query(selectorString, (err, r) => {
    if (err) {
      res.json("Error");
    } else {
      res.json(r.rows);
    }
  });
};

/*
@TYPE:
  PUBLIC
@DESC:
  - Remove order by id
@RETURN:
  - JSON order Object
*/

// const ordersRemove = async (req, res) => {};

/*
@TYPE:
  PUBLIC
@DESC:
  - update all orders that fullfill the query or by id
@RETURN:
  - JSON order Object
*/

// const ordersUpdate = async (req, res) => {};

module.exports = {
  ordersAdd,
  ordersGet,
  //ordersRemove, ordersUpdate
};
