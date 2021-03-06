const { Router } = require("express");
const db = require("../../services/db");
const router = Router();

router.get("/:field/:value", (req, res) => {
  const { field, value } = req.params;
  res.json(db.find("users", { [field]: value }));
});

router.get("/", (req, res) => {
  res.json(db.find("users"));
});

module.exports = router;
