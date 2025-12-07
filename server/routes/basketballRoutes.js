const express = require("express");
const router = express.Router();
const basketballController = require("../controllers/basketballController");

router.post("/add", basketballController.addMember);

module.exports = router;
