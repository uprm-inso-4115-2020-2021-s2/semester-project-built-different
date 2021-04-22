const { Router } = require("express");

const mealRoutes = (pool) => {
  const {
    mealsAdd,
    mealsGet,
    mealsRemove,
    mealsUpdate,
  } = require("../controllers/meal");
  const router = Router();

  /*
@TYPE:
  POST
@DESC:
  - Create a new meal
@RETURN:
  - JSON order Object
*/

  router.post("/add", (req, res) => mealsAdd(req, res, pool));

  /*
@TYPE:
  POST
@DESC:
  - Get all meals that satifsy the filter requirements
@RETURN:
  - Array of JSON objects (orders)
*/

  router.get("/get", (req, res) => mealsGet(req, res, pool));

  /*
@TYPE:
  GET
@DESC:
  - remove an meal by id
@RETURN:
  - id of the removed order
*/

  router.delete("/remove/:id?", (req, res) =>
    mealsRemove(req, res, pool),
  );

  /*
@TYPE:
  UPDATE
@DESC:
  - update all meals that fullfill the query or by id
@RETURN:
  - JSON order Object
*/
  router.put("/update/:id?", (req, res) =>
    mealsUpdate(req, res, pool),
  );

  return router;
};

module.exports = mealRoutes;
