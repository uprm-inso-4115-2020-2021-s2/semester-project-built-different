/*
@TYPE:
  PUBLIC
@DESC:
  - Create a new Station
@RETURN:
  - JSON order Object
*/
const StationsAdd = async (req, res, pool) => {
  const { name, description } = req.body;
  const queryString =
    "INSERT INTO Station(name,description) VALUES($1,$2)";

  await pool.query(queryString, [name, description], (err) => {
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
  - Fetch all Stations that fit the filter, if none
  specified returns all order objects
@RETURN:
  - Array of Station objects
*/

const StationsGet = async (req, res, pool) => {
  const { query } = req;

  let queryString = "SELECT * FROM Station";
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
  - Remove Station by id
@RETURN:
  - id of the removed order
*/

const StationsRemove = async (req, res, pool) => {
  const { id } = req.params;
  let queryString = "DELETE FROM Station";

  const selectors = Object.keys(req.body);
  let values = Object.values(req.body);

  if (selectors.length > 0 || id) queryString += "\tWHERE ";
  selectors.forEach((filter, i) => {
    console.log(i, selectors.length);
    queryString += `${filter}=$${i + 1}`;
    if (i < selectors.length - 1) queryString += "\tAND\t";
  });

  if (id) {
    queryString += `\tsid = $${selectors.length + 1}`;
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
  - update all Stations rows that fit the filter and by id
@RETURN:
  - id of the updated Station
*/

const StationsUpdate = async (req, res, pool) => {
  const { id } = req.params;

  let queryString = "UPDATE Station SET";
  const selectors = Object.keys(req.body);
  let values = Object.values(req.body);

  if (selectors.length === 0 && !id)
    res.json("Must pass at least pass a body");

  selectors.forEach((filter, i) => {
    queryString += `\t${filter}=$${i + 1}`;
    if (i < selectors.length - 1) queryString += ",";
  });

  if (id) {
    queryString += `,\tWHERE sid = $${selectors.length + 1}`;
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
  StationsAdd,
  StationsGet,
  StationsRemove,
  StationsUpdate,
};
