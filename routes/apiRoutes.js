const router = require("express").Router();
var db = require("../models");
const { Op } = require("sequelize");
const path = require("path");

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/loans", (req, res) => {
  db.loan_submissions
    .findAll({})
    .then((applications) => res.json(applications))
    .catch((err) => res.status(500).json(err));
});

router.post("/loans", (req, res) => {
  console.log("Post Triggered", req.body);
  db.loan_submissions
    .create(req.body)
    .then(() =>
      res.json({
        success: true,
      })
    )
    .catch((err) => res.status(500).json(err));
});

router.post("/search-loan", (req, res) => {
  switch (req.body.searchValue) {
    case "first_name":
      db.loan_submissions
        .findAll({
          where: {
            first_name: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "last_name":
      db.loan_submissions
        .findAll({
          where: {
            last_name: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "street":
      db.loan_submissions
        .findAll({
          where: {
            street: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "city":
      db.loan_submissions
        .findAll({
          where: {
            city: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "state":
      db.loan_submissions
        .findAll({
          where: {
            state: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "zip_code":
      db.loan_submissions
        .findAll({
          where: {
            zip_code: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "phone_number":
      db.loan_submissions
        .findAll({
          where: {
            phone_number: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "dob":
      db.loan_submissions
        .findAll({
          where: {
            dob: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "ssn":
      db.loan_submissions
        .findAll({
          where: {
            ssn: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "pre_tax_income":
      db.loan_submissions
        .findAll({
          where: {
            pre_tax_income: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    default:
      break;
  }
});

router.delete("/delete-loan/:id", function (req, res) {
  db.loan_submissions
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      db.loan_submissions
        .findAll({})
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
