const express = require("express");
const router = express.Router();
const panacheController = require("../controllers/panacheController");

router.post("/add", panacheController.addMember);

module.exports = router;
