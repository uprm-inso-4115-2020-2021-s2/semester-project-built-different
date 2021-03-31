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
  const { id } = req.params;

  let selectorString = "SELECT * FROM Order_Details";
  const selectors = Object.keys(body);
  let values = Object.values(req.body);

  if (selectors.lenth > 0 || id) selectorString += "\tWHERE ";

  selectors.forEach((filter, i) => {
    selectorString += `${filter}=$${i + 1}`;
    if (i < selectors.length - 1) selectorString += "\tAND ";
  });
  if (id) {
    selectorString += `\t_id=$${selectors.length + 1}`;
    values.push(id);
  }

  await pool.query(
    selectorString,
    Object.values(req.body),
    (err, r) => {
      if (err) {
        res.json(err);
      } else {
        res.json(r.rows);
      }
    },
  );
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
  let selectorString = "DELETE FROM Order_Details";

  const selectors = Object.keys(req.body);
  let values = Object.values(req.body);

  if (selectors.length > 0 || id) selectorString += "\tWHERE ";
  selectors.forEach((filter, i) => {
    console.log(i, selectors.length);
    selectorString += `${filter}=$${i + 1}`;
    if (i < selectors.length - 1) selectorString += "\tAND\t";
  });

  if (id) {
    selectorString += `\to_id = $${selectors.length + 1}`;
    values.push(id);
  }

  await pool.query(selectorString, values, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.status(200).end();
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
  let values = Object.values(req.body);

  if (selectors.length === 0 && !id)
    res.json("Must pass at least pass a body");

  selectors.forEach((filter, i) => {
    selectorString += `\t${filter}=$${i + 1}`;
    if (i !== selectors.length - 1) selectorString += ",";
  });

  if (id) {
    selectorString += `,\tWHERE o_id = $${selectors.length + 1}`;
    values.push(id);
  }
  console.log(values);
  await pool.query(selectorString, values, (err) => {
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
