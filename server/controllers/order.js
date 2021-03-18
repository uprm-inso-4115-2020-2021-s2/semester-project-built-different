/*
@TYPE:
  PUBLIC
@DESC:
  - Create a new order
@RETURN:
  - JSON order Object
*/
const ordersAdd = await (req, res) => {}

/*
@TYPE:
  PUBLIC
@DESC:
  - Fetch all orders that fit the filter, if none
  specified returns all order objects
@RETURN:
  - Array of order objects
*/

const ordersGet = await (req, res) => {};

/*
@TYPE:
  PUBLIC
@DESC:
  - Remove order by id
@RETURN:
  - JSON order Object
*/

const ordersRemove = await (req, res) => {};

/*
@TYPE:
  PUBLIC
@DESC:
  - update all orders that fullfill the query or by id
@RETURN:
  - JSON order Object
*/

const ordersUpdate = await (req,res)=>{};

module.exports = { ordersAdd, ordersGet, ordersRemove,ordersUpdate };
