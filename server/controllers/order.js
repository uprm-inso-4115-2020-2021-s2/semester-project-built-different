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
    "INSERT INTO Order_Details(order_date, status, comment, order_total, c_id) VALUES($1,$2,$3,$4,$5)";

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
  - id of the removed order
*/

const ordersRemove = async (req, res, pool) => {
  const { id } = req.params;
  let selectorString = "DELETE FROM Order_Details WHERE o_id = $1";

  await pool.query(selectorString, [id], (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(id);
    }
  });
};

/*
@TYPE:
  PUBLIC
@DESC:
  - update all orders rows that fit the filter and by id
@RETURN:
  - id of the updated order
*/

const ordersUpdate = async (req, res, pool) => {
  const { id } = req.params;

  let selectorString = "UPDATE Order_Details SET";
  const selectors = Object.keys(req.body);

  selectors.forEach((filter, i) => {
    selectorString += `\t${filter}=$${i + 1}`;
    if (i !== selectors.length - 1) selectorString += ",";
  });

  if (id) selectorString += `\tWHERE o_id = ${id}`;

  console.log(selectorString);

  await pool.query(selectorString, Object.values(req.body), (err) => {
    if (err) {
      res.json(err);
    } else {
      res.status(200).end();
    }
  });
};

module.exports = {
  ordersAdd,
  ordersGet,
  ordersRemove,
  ordersUpdate,
};
