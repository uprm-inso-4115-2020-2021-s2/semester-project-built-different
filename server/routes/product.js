const { Router } = require("express");

const productRoutes = (pool) => {
  const {
    productsAdd,
    productsGet,
    productsRemove,
    productsUpdate,
  } = require("../controllers/product");
  const router = Router();

  /*
@TYPE:
  POST
@DESC:
  - Create a new product
@RETURN:
  - JSON product Object
*/

  //router.post("/add", (req, res) => productsAdd(req, res, pool));

  /*
@TYPE:
  POST
@DESC:
  - Get all orders that satifsy the filter requirements
@RETURN:
  - Array of JSON objects (orders)
*/

  //router.get("/get", (req, res) => productsGet(req, res, pool));

  /*
@TYPE:
  GET
@DESC:
  - remove an order by id
@RETURN:
  - id of the removed order
*/

//   router.delete("/remove/:id?", (req, res) =>
//   productsRemove(req, res, pool),
//   );

  /*
@TYPE:
  UPDATE
@DESC:
  - update all orders that fullfill the query or by id
@RETURN:
  - JSON order Object
*/
//   router.put("/update/:id?", (req, res) =>
//   productsUpdate(req, res, pool),
//   );

  return router;
};

module.exports = productRoutes;
