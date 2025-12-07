const express = require("express");
const router = express.Router();
const cricketController = require("../controllers/cricketController");

router.post("/add", cricketController.addMember);

module.exports = router;
