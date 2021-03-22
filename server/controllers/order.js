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
// const ordersAdd = async (req, res) => {};

/*
@TYPE:
  PUBLIC
@DESC:
  - Fetch all orders that fit the filter, if none
  specified returns all order objects
@RETURN:
  - Array of order objects
*/

const ordersGet = async (req, res) => {
  // missing filtering parameter, implement later
  await req.pool.query("SELECT * FROM Order_Details", (err, r) => {
    if (err) {
      res.json("Error");
    } else {
      res.json(r);
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
  //ordersAdd,
  ordersGet,
  //ordersRemove, ordersUpdate
};
