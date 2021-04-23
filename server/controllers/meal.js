/*
@TYPE:
  PUBLIC
@DESC:
  - Create a new meal
@RETURN:
  - JSON order Object
*/
const mealsAdd = async (req, res, pool) => {
  const { name, price, comments, available, sid } = req.body;
  const queryString =
    "INSERT INTO Meal(name,price,comments,available,sid) VALUES($1,$2,$3,$4)";

  await pool.query(
    queryString,
    [name, price, comments, available, sid],
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
  - Fetch all meals that fit the filter, if none
  specified returns all order objects
@RETURN:
  - Array of meal objects
*/

const mealsGet = async (req, res, pool) => {
  const { query } = req;

  let queryString = "SELECT * FROM Meal";
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
  - Remove meal by id
@RETURN:
  - id of the removed order
*/

const mealsRemove = async (req, res, pool) => {
  const { id } = req.params;
  let queryString = "DELETE FROM Meal";

  const selectors = Object.keys(req.body);
  let values = Object.values(req.body);

  if (selectors.length > 0 || id) queryString += "\tWHERE ";
  selectors.forEach((filter, i) => {
    console.log(i, selectors.length);
    queryString += `${filter}=$${i + 1}`;
    if (i < selectors.length - 1) queryString += "\tAND\t";
  });

  if (id) {
    queryString += `\tmid = $${selectors.length + 1}`;
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
  - update all meals rows that fit the filter and by id
@RETURN:
  - id of the updated meal
*/

const mealsUpdate = async (req, res, pool) => {
  const { id } = req.params;

  let queryString = "UPDATE Meal SET";
  const selectors = Object.keys(req.body);
  let values = Object.values(req.body);

  if (selectors.length === 0 && !id)
    res.json("Must pass at least pass a body");

  selectors.forEach((filter, i) => {
    queryString += `\t${filter}=$${i + 1}`;
    if (i < selectors.length - 1) queryString += ",";
  });

  if (id) {
    queryString += `,\tWHERE mid = $${selectors.length + 1}`;
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

module.exports = {
  mealsAdd,
  mealsGet,
  mealsRemove,
  mealsUpdate,
};
