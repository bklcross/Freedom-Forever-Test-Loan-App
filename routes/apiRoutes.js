const router = require("express").Router();
var db = require("../models");

router.get("/loans", (req, res) => {
  db.loan_submissions.findAll({})
    .then((applications) => res.json(applications))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;