const router = require("express").Router();
const Users = require("./users-model.js");
const restrict = require("../auth/restrict.js");

router.get("/", restrict, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting users" });
    });
});

module.exports = router;
