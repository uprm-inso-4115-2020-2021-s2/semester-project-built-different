/*
@TYPE:
  PUBLIC
@DESC:
  - Create a new order
@RETURN:
  - JSON order Object
*/
const ordersAdd = async (req, res, pool) => {
  const { timestamp, status, comment, total, cid } = req.body;
  const queryString =
    "INSERT INTO Order_Details(timestamp, status, comment, total, cid) VALUES($1,$2,$3,$4,$5)";

  await pool.query(
    queryString,
    [timestamp, status, comment, total, cid],
    (err) => {
      if (err) {
        res.json(err);
      } else {
        res.json(req.body);
      }
    },
  );
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
  const { query } = req;

  let queryString = "SELECT * FROM Order_Details";
  const selectors = Object.keys(query);

  if (selectors.length > 0) queryString += "\tWHERE\t ";

  selectors.forEach((filter, i) => {
    queryString += `${filter}=$${i + 1}`;
    if (i < selectors.length - 1) queryString += "\tAND ";
  });

  await pool.query(queryString, Object.values(query), (err, r) => {
    if (err) {
      res.json(err);
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
  let queryString = "DELETE FROM Order_Details";

  const selectors = Object.keys(req.body);
  let values = Object.values(req.body);

  if (selectors.length > 0 || id) queryString += "\tWHERE ";
  selectors.forEach((filter, i) => {
    console.log(i, selectors.length);
    queryString += `${filter}=$${i + 1}`;
    if (i < selectors.length - 1) queryString += "\tAND\t";
  });

  if (id) {
    queryString += `\toid = $${selectors.length + 1}`;
    values.push(id);
  }

  await pool.query(queryString, values, (err) => {
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

  let queryString = "UPDATE Order_Details SET";
  const selectors = Object.keys(req.body);
  let values = Object.values(req.body);

  if (selectors.length === 0 && !id)
    res.json("Must pass at least pass a body");

  selectors.forEach((filter, i) => {
    queryString += `\t${filter}=$${i + 1}`;
    if (i < selectors.length - 1) queryString += ",";
  });

  if (id) {
    queryString += `,\tWHERE oid = $${selectors.length + 1}`;
    values.push(id);
  }
  console.log(values);
  await pool.query(queryString, values, (err) => {
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
  - Fetch all orders from a customer ordered by their date.
@RETURN:
  - Array of order objects
*/

const ordersGetOrderBy = async (req, res, pool) => {
  const { cid } = req.query;

  let queryString = "SELECT * FROM Order_Details WHERE cid = $1 ORDER BY timestamp";

  await pool.query(queryString, [cid], (err, r) => {
    if (err) {
      res.json(err);
    } else {
      res.json(r.rows);
    }
  });
};

module.exports = {
  ordersAdd,
  ordersGet,
  ordersRemove,
  ordersUpdate,
  ordersGetOrderBy,
};
