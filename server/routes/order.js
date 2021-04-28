const { Router } = require("express");

const orderRoutes = (pool) => {
  const {
    ordersAdd,
    ordersGet,
    ordersRemove,
    ordersUpdate,
    ordersGetOrderBy,
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
  GET
@DESC:
  - Get all orders that satifsy the filter requirements
@RETURN:
  - Array of JSON objects (orders)
*/

  router.get("/get", (req, res) => ordersGet(req, res, pool));

  /*
@TYPE:
  DELETE
@DESC:
  - remove an order by id
@RETURN:
  - id of the removed order
*/

  router.delete("/remove/:id?", (req, res) =>
    ordersRemove(req, res, pool),
  );

  /*
@TYPE:
  UPDATE
@DESC:
  - update all orders that fullfill the query or by id
@RETURN:
  - JSON order Object
*/
  router.put("/update/:id?", (req, res) =>
    ordersUpdate(req, res, pool),
  );

    /*
@TYPE:
  GET
@DESC:
  - Get all orders by customer id and ordered by date.
@RETURN:
  - Array of JSON objects (orders)
*/
  router.get("/getordered", (req, res) => 
  ordersGetOrderBy(req, res, pool)
  );

  return router;
};

module.exports = orderRoutes;
