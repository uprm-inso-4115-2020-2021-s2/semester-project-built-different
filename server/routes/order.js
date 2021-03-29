const { Router } = require("express");

const orderRoutes = (pool) => {
  const {
    ordersAdd,
    ordersGet,
    // ordersRemove,
    // ordersUpdate,
  } = require("../controllers/order");
  const router = Router();

  /*
@TYPE:
  POST
@DESC:
  - Create a new order
@RETURN:
  - JSON order Object
*/

  router.post("/add", (req, res) => ordersAdd(req, res, pool));

  /*
@TYPE:
  POST
@DESC:
  - Get all orders that satifsy the filter requirements
@RETURN:
  - Array of JSON objects (orders)
*/

  router.post("/get", (req, res) => ordersGet(req, res, pool));

  /*
@TYPE:
  GET
@DESC:
  - remove an order by id
@RETURN:
  - JSON order Object
*/

  // router.get("/remove/:id", ordersRemove);

  /*
@TYPE:
  UPDATE
@DESC:
  - update all orders that fullfill the query or by id
@RETURN:
  - JSON order Object
*/

  //router.update("/update/:id?", ordersUpdate);
  return router;
};

module.exports = orderRoutes;
