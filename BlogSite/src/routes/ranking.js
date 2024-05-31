const express = require("express");
const router = express.Router();
const rankingController = require("../controllers/rankingController");

router.get("/getRankings", function (req, res) {
    rankingController.getRankings(req, res);
});

module.exports = router;
