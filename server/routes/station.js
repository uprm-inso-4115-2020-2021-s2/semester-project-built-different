const { Router } = require("express");

const stationRoutes = (pool) => {
  const {
    stationsAdd,
    stationsGet,
    stationsRemove,
    stationsUpdate,
  } = require("../controllers/station");
  const router = Router();

  /*
@TYPE:
  POST
@DESC:
  - Create a new station
@RETURN:
  - JSON Station Object
*/

  router.post("/add", (req, res) => stationsAdd(req, res, pool));

  /*
@TYPE:
  POST
@DESC:
  - Get all station that satifsy the filter requirements
@RETURN:
  - Array of JSON objects (stations)
*/

  router.get("/get", (req, res) => stationsGet(req, res, pool));

  /*
@TYPE:
  GET
@DESC:
  - remove an station by id
@RETURN:
  - id of the removed station
*/

  router.delete("/remove/:id?", (req, res) =>
    stationsRemove(req, res, pool),
  );

  /*
@TYPE:
  UPDATE
@DESC:
  - update all station that fullfill the query or by id
@RETURN:
  - JSON Station Object
*/
  router.put("/update/:id?", (req, res) =>
    stationsUpdate(req, res, pool),
  );

  return router;
};

module.exports = stationRoutes;
